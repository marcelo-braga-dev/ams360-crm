<?php

use App\Http\Controllers\Consultor\ClientesController;
use App\Http\Controllers\Consultor\Pedidos\PedidosController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.')
    ->prefix('consultor')
    ->group(function () {
        Route::resource('clientes', ClientesController::class);
        Route::resource('pedidos', PedidosController::class);
    });
