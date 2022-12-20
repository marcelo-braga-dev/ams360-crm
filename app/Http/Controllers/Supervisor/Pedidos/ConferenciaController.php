<?php

namespace App\Http\Controllers\Supervisor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosImagens;
use App\Services\Pedidos\PedidosServices;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\LancadoStatus;
use App\src\Pedidos\Status\RevisarStatusPedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConferenciaController extends Controller
{
    public function show($id)
    {
        $pedidoDados = (new Pedidos)->newQuery()->findOrFail($id);
        $pedido = (new PedidosServices())->pedido($pedidoDados);
        $cliente = (new PedidosClientes())->getCliente($pedidoDados->id);
        $img = (new PedidosImagens())->getImagens($pedidoDados->id);

        return Inertia::render('Supervisor/Pedidos/Conferencia/Show',
            compact('pedido', 'cliente', 'img', 'pedidoDados'));
    }

    public function update($id, Request $request)
    {
        if ($request->reprovado) {
            (new RevisarStatusPedido())->reprovado($id, $request->reprovado);
        } else
        (new Pedido())->updateStatus($id, new LancadoStatus());

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.pedido.index');
    }
}
