<?php

use App\Http\Controllers\Admin\Chamados\ChamadosController;
use App\Http\Controllers\Admin\Chamados\RespostasController;
use Illuminate\Support\Facades\Route;



// SAC
Route::name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('chamados', ChamadosController::class);
        //Route::resource('novo', ChamadosController::class);
    });

// Chamados Responder
//Route::name('admin.chamado.')
//    ->prefix('admin/chamado')
//    ->group(function () {
//        Route::resource('responder', RespostasController::class);
//    });


