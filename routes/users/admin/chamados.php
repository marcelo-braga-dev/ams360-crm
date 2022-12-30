<?php

use App\Http\Controllers\Admin\Chamados\ChamadosController;
use Illuminate\Support\Facades\Route;

// SAC
Route::name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('chamados', ChamadosController::class);
    });


