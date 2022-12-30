<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Supervisor\Pedidos\AguardandoFaturamentoController;
use App\Http\Controllers\Supervisor\Pedidos\AguardandoNotaController;
use App\Http\Controllers\Supervisor\Pedidos\AguardandoPagamentoController;
use App\Http\Controllers\Supervisor\Pedidos\CanceladoController;
use App\Http\Controllers\Supervisor\Pedidos\ConferenciaController;
use App\Http\Controllers\Supervisor\Pedidos\ConfigController;
use App\Http\Controllers\Supervisor\Pedidos\EntregueController;
use App\Http\Controllers\Supervisor\Pedidos\FaturadoController;
use App\Http\Controllers\Supervisor\Pedidos\LancadoController;
use App\Http\Controllers\Supervisor\Pedidos\PedidosController;

Route::name('supervisor.pedidos.')
    ->prefix('supervisor/pedidos')
    ->group(function () {
        Route::resource('pedido', PedidosController::class);
        Route::resource('conferencia', ConferenciaController::class);
        Route::resource('lancado', LancadoController::class);
        Route::resource('aguardando-nota', AguardandoNotaController::class);
        Route::resource('aguardando-pagamento', AguardandoPagamentoController::class);
        Route::resource('aguardando-faturamento', AguardandoFaturamentoController::class);
        Route::resource('faturado', FaturadoController::class);
        Route::resource('entregue', EntregueController::class);
        Route::resource('cancelado', CanceladoController::class);
        Route::resource('config', ConfigController::class);
    });
