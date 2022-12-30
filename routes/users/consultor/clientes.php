<?php

use App\Http\Controllers\Consultor\ClientesController;
use Illuminate\Support\Facades\Route;

//Clientes
Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.')
    ->prefix('consultor/cliente')
    ->group(function () {
        Route::resource('clientes', ClientesController::class);
    });
