<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosHistoricos;
use App\Models\PedidosImagens;
use App\Services\Pedidos\PedidosServices;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\AguardandoNotaStatus;
use App\src\Pedidos\Status\LancadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LancadoController extends Controller
{
    public function show($id)
    {
        $dados = (new Pedidos())->newQuery()->findOrFail($id);

        $cliente = (new PedidosClientes())->getCliente($id);
        $pedido = (new PedidosServices())->pedido($dados);
        $img = (new PedidosImagens())->getImagens($id);

        return Inertia::render('Admin/Pedidos/Lancado/Show',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id, Request $request)
    {
        (new AguardandoNotaStatus())->update($id, convert_money_float($request->preco_custo));

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
