<?php

use App\Http\Controllers\Admin\Usuarios\Admin\AdminController;
use App\Http\Controllers\Admin\Usuarios\Consultor\ConsultoresController;
use App\Http\Controllers\Admin\Usuarios\Supervisor\SupervisoresController;
use App\Http\Controllers\Admin\Usuarios\UsuariosController;
use Illuminate\Support\Facades\Route;

// Usuarios
Route::middleware(['auth', 'auth.admins'])
    ->name('admin.usuarios.')
    ->prefix('admin/usuarios')
    ->group(function () {
        Route::resource('usuario', UsuariosController::class);
        Route::resource('consultores', ConsultoresController::class);
        Route::resource('supervisores', SupervisoresController::class);
        Route::resource('admins', AdminController::class);
    });
