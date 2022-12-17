<?php

use App\Http\Controllers\Admin\Consultor\ConsultoresController;
use App\Http\Controllers\Admin\Pedidos\AguardandoFaturamentoController;
use App\Http\Controllers\Admin\Pedidos\AguardandoNotaController;
use App\Http\Controllers\Admin\Pedidos\AguardandoPagamentoController;
use App\Http\Controllers\Admin\Pedidos\CanceladoController;
use App\Http\Controllers\Admin\Pedidos\ConferenciaController;
use App\Http\Controllers\Admin\Pedidos\ConfigController;
use App\Http\Controllers\Admin\Pedidos\EntregueController;
use App\Http\Controllers\Admin\Pedidos\FaturadoController;
use App\Http\Controllers\Admin\Pedidos\LancadoController;
use App\Http\Controllers\Admin\Pedidos\PedidosController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.admins'])
    ->name('admin.')
    ->prefix('admin/pedido')
    ->group(function () {
        Route::resource('pedidos', PedidosController::class);
        Route::resource('conferencia', ConferenciaController::class);
        Route::resource('lancado', LancadoController::class);
        Route::resource('aguardando-nota', AguardandoNotaController::class);
        Route::resource('aguardando-pagamento', AguardandoPagamentoController::class);
        Route::resource('aguardando-faturamento', AguardandoFaturamentoController::class);
        Route::resource('faturado', FaturadoController::class);
        Route::resource('entregue', EntregueController::class);
        Route::resource('cancelado', CanceladoController::class);
        Route::resource('config', ConfigController::class);

        Route::get('historicos', [PedidosController::class, 'historico'])
            ->name('pedidos.historico.index');

        Route::resource('consultores', ConsultoresController::class);
    });
