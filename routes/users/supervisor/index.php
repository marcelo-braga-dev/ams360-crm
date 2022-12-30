<?php
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'auth.supervisores'])
    ->group(function () {
        require __DIR__ . '/pedidos.php';
    });
