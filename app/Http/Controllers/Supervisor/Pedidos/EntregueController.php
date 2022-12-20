<?php

namespace App\Http\Controllers\Supervisor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EntregueController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Supervisor/Pedidos/Entregue/Show',
            compact('pedido', 'cliente', 'img'));
    }
}
