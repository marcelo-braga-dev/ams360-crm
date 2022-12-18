<?php

namespace App\Http\Controllers\Consultor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosImagens;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NovosController extends Controller
{
    public function edit($id)
    {
        $pedido = (new Pedidos())->newQuery()->findOrFail($id);
        $cliente = (new PedidosClientes())->dados($pedido->id);
        $img = (new PedidosImagens())->imagens($pedido->id);

        return Inertia::render('Consultor/Pedidos/Novo/Edit',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id, Request $request)
    {
        $prazo = (new ConferenciaStatusPedido())->getPrazo();
        (new Pedidos())->updateDados($id, $request, $prazo);
        (new PedidosClientes())->updateDados($id, $request);
        (new PedidosImagens())->updateDados($id, $request);

        (new ConferenciaStatusPedido())->update($id);

        modalSucesso("Dados Atualizados com sucesso!");
        return redirect()->route('consultor.pedidos.index');
    }
}
