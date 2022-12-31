<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.consultores'])
    ->group(function () {
        require __DIR__ . '/chamados.php';
        require __DIR__ . '/leads.php';
        require __DIR__ . '/pedidos.php';
        require __DIR__ . '/perfil.php';
    });
