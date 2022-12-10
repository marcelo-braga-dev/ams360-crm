<?php

use App\Http\Controllers\Admin\Pedidos\AguardandoFaturamentoController;
use App\Http\Controllers\Admin\Pedidos\AguardandoNotaController;
use App\Http\Controllers\Admin\Pedidos\AguardandoPagamentoController;
use App\Http\Controllers\Admin\Pedidos\ConferenciaController;
use App\Http\Controllers\Admin\Pedidos\EntregueController;
use App\Http\Controllers\Admin\Pedidos\LancadoController;
use App\Http\Controllers\Admin\Pedidos\PedidosController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.admins'])
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('pedidos', PedidosController::class);
        Route::resource('conferencia', ConferenciaController::class);
        Route::resource('lancado', LancadoController::class);
        Route::resource('aguardando-nota', AguardandoNotaController::class);
        Route::resource('aguardando-pagamento', AguardandoPagamentoController::class);
        Route::resource('aguardando-faturamento', AguardandoFaturamentoController::class);
        Route::resource('entregue', EntregueController::class);
    });
