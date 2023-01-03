<?php

namespace App\Http\Controllers\Consultor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Enderecos;
use App\Models\Fornecedores;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosImagens;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RevisarController extends Controller
{
    public function edit($id)
    {
        $pedido = (new Pedidos())->newQuery()->findOrFail($id);
        $cliente = (new PedidosClientes())->getCliente($pedido->id);
        $img = (new PedidosImagens())->getImagens($pedido->id);
        $fornecedores = (new Fornecedores())->newQuery()->get();
        $endereco = (new Enderecos())->get($cliente->endereco);

        return Inertia::render('Consultor/Pedidos/Revisar/Edit',
            compact('pedido', 'cliente', 'img', 'fornecedores', 'endereco'));
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
