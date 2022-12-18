<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosImagens;
use App\Services\Pedidos\PedidosServices;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\LancadoStatus;
use App\src\Pedidos\Status\NovoStatusPedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConferenciaController extends Controller
{
    public function show($id)
    {
        $pedidoDados = (new Pedidos)->newQuery()->findOrFail($id);
        $pedido = (new PedidosServices())->pedido($pedidoDados);
        $cliente = (new PedidosClientes())->dados($pedidoDados->id);
        $img = (new PedidosImagens())->imagens($pedidoDados->id);

        return Inertia::render('Admin/Pedidos/Conferencia/Show',
            compact('pedido', 'cliente', 'img', 'pedidoDados'));
    }

    public function update($id, Request $request)
    {
        if ($request->reprovado) {
            (new NovoStatusPedido())->reprovado($id, $request->reprovado);
        } else
        (new Pedido())->updateStatus($id, new LancadoStatus());

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
