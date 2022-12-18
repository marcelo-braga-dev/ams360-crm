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
        default :
        {
            auth()->logout();
            return redirect('/');
        }
    }
})->middleware(['auth', 'verified'])->name('home');

Route::any('dashboard', function () {
    return redirect('/');
});
