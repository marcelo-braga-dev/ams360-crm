<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $auth = auth()->user()->tipo;
    switch ($auth) {
        case (new \App\src\Usuarios\Admins())->getTipo() :
            return Inertia::render('Admin/Home');
        case (new \App\src\Usuarios\Consultores())->getTipo() :
            return Inertia::render('Consultor/Home');
        case (new \App\src\Usuarios\Supervisores())->getTipo() :
            return Inertia::render('Supervisor/Home');
        default :
        {
            auth()->logout();
            modalErro('Tipo de usuário não encontrado.');
            return redirect('/');
        }
    }
})->middleware(['auth', 'verified'])->name('home');

Route::any('dashboard', function () {
    return redirect('/');
});
