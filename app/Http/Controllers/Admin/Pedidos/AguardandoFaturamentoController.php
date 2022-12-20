<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosImagens;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\AguardandoPagamentoStatus;
use App\src\Pedidos\Status\EntregueStatus;
use App\src\Pedidos\Status\FaturadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AguardandoFaturamentoController extends Controller
{
    public function show($id)
    {
        (new Pedidos())->updateSituacao($id, 1);
        $files = (new PedidosImagens())->getImagens($id);

        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Admin/Pedidos/AguardandoFaturamento/Show',
            compact('pedido', 'cliente', 'img', 'files'));
    }

    public function update($id, Request $request)
    {
        (new PedidosImagens())->updateNotaFiscal($id, $request);
        (new Pedido())->updateStatus($id, new FaturadoStatus($request->prazo));

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
