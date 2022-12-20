<?php

namespace App\Http\Controllers\Consultor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosImagens;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\AguardandoFaturamentoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AguardandoPagamentoController extends Controller
{
    public function show($id)
    {
        (new Pedidos())->updateSituacao($id, 1);

        $files = (new PedidosImagens())->getImagens($id);

        return Inertia::render('Consultor/Pedidos/AguardandoPagamento/Show',
            compact('id', 'files'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new AguardandoFaturamentoStatus());
        (new PedidosImagens())->updateRecibo($id, $request);

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('consultor.pedidos.index');
    }
}
