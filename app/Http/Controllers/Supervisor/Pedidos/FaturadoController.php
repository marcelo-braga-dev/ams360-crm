<?php

namespace App\Http\Controllers\Supervisor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\EntregueStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaturadoController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);

        return Inertia::render('Supervisor/Pedidos/Faturado/Show', compact('pedido'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new EntregueStatus());

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.pedido.index');
    }
}
