<?php

namespace App\Http\Controllers\Supervisor\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosImagens;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\AguardandoPagamentoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AguardandoNotaController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Supervisor/Pedidos/AguardandoNota/Show',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new AguardandoPagamentoStatus());
        (new PedidosImagens())->updateBoleto($id, $request);

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.pedido.index');
    }
}
