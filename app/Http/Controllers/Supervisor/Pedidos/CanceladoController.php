<?php

namespace App\Http\Controllers\Supervisor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\CanceladoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CanceladoController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Supervisor/Pedidos/Cancelado/Show',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new CanceladoStatus(), $request->motivo);

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.pedido.index');
    }
}
