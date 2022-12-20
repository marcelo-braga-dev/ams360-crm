<?php

use App\Http\Controllers\Admin\Chamados\ChamadosController;
use App\Http\Controllers\Admin\Chamados\RespostasController;
use App\Http\Controllers\Admin\Fornecedores\FornecedoresController;
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
use App\Http\Controllers\Admin\Usuarios\Consultor\ConsultoresController;
use App\Http\Controllers\Admin\Usuarios\Supervisor\SupervisoresController;
use App\Http\Controllers\Admin\Usuarios\UsuariosController;
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

        Route::resource('chamados', ChamadosController::class);
    });

// Chamado Status
Route::middleware(['auth', 'auth.admins'])
    ->name('admin.usuarios.')
    ->prefix('admin/usuarios')
    ->group(function () {
        Route::resource('usuario', UsuariosController::class);
        Route::resource('consultores', ConsultoresController::class);
        Route::resource('supervisores', SupervisoresController::class);
    });

// Chamado Status
Route::middleware(['auth', 'auth.admins'])
    ->name('admin.chamado.')
    ->prefix('admin/chamado')
    ->group(function () {
        Route::resource('responder', RespostasController::class);
    });

// Fornecedores
Route::middleware(['auth', 'auth.admins'])
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('fornecedores', FornecedoresController::class);
    });

// SAC
Route::middleware(['auth', 'auth.admins'])
    ->name('admin.chamados.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('novo', ChamadosController::class);
    });
