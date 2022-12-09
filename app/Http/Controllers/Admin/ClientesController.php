<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Clientes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientesController extends Controller
{
    public function index()
    {
        $clientes = (new Clientes())->newQuery()->get();

        return Inertia::render('Admin/Clientes/Index', compact('clientes'));
    }
}
