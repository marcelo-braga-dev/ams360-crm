<?php

use App\Http\Controllers\Consultor\Chamados\ChamadosController;
use App\Http\Controllers\Consultor\Chamados\NovoController;
use App\Http\Controllers\Consultor\Chamados\RespostasController;
use App\Http\Controllers\Consultor\ClientesController;
use App\Http\Controllers\Consultor\Pedidos\AguardandoPagamentoController;
use App\Http\Controllers\Consultor\Pedidos\FaturadoController;
use App\Http\Controllers\Consultor\Pedidos\NovosController;
use App\Http\Controllers\Consultor\Pedidos\PedidosController;
use Illuminate\Support\Facades\Route;

// Chamados
Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.')
    ->prefix('consultor')
    ->group(function () {
        Route::resource('chamados', ChamadosController::class);
    });
// Chamado Status
Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.chamado.')
    ->prefix('consultor/chamado')
    ->group(function () {
        Route::resource('novo', NovoController::class);
        Route::resource('responder', RespostasController::class);
    });

//Clientes
Route::middleware(['auth', 'auth.consultores'])
    ->name('consultor.')
    ->prefix('consultor/cliente')
    ->group(function () {
        Route::resource('clientes', ClientesController::class);
    });
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


