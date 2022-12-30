<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/users/auth.php';
require __DIR__ . '/users/index.php';
require __DIR__ . '/users/admin/index.php';
require __DIR__ . '/users/consultor/index.php';
require __DIR__ . '/users/supervisor/index.php';
