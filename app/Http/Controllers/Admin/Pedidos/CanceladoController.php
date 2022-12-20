<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\CanceladoStatus;
use App\src\Pedidos\Status\LancadoStatus;
use App\src\Pedidos\Status\RevisarStatusPedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CanceladoController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Admin/Pedidos/Cancelado/Show',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new CanceladoStatus(), $request->motivo);

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
