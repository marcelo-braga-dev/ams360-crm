<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $auth = auth()->user()->tipo;
    switch ($auth) {
        case 'admin' :
            return Inertia::render('Admin/Home');
        case 'consultor' :
            return Inertia::render('Consultor/Home');
        default :
        {
            auth()->logout();
            return redirect('/');
        }
    }
})->middleware(['auth', 'verified'])->name('home');
