<?php

use App\Http\Controllers\Admin\ClientesController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.admins'])
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('clientes', ClientesController::class);
    });
