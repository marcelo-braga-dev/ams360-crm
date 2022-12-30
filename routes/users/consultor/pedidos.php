<?php

use App\Http\Controllers\Consultor\Pedidos\AguardandoPagamentoController;
use App\Http\Controllers\Consultor\Pedidos\FaturadoController;
use App\Http\Controllers\Consultor\Pedidos\NovosController;
use App\Http\Controllers\Consultor\Pedidos\PedidosController;
use Illuminate\Support\Facades\Route;

// Pedidos
Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.')
    ->prefix('consultor/pedido')
    ->group(function () {

        Route::resource('pedidos', PedidosController::class);
        Route::resource('novo', NovosController::class);
        Route::resource('aguardando-pagamento', AguardandoPagamentoController::class);
        Route::resource('faturado', FaturadoController::class);
    });
