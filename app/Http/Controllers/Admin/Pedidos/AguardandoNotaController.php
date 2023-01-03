<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosImagens;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\AguardandoPagamentoStatus;
use App\src\Pedidos\Status\LancadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AguardandoNotaController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->get($id);

        return Inertia::render('Admin/Pedidos/AguardandoNota/Show',
            compact('pedido'));
    }

    public function update($id, Request $request)
    {
        (new Pedido())->updateStatus($id, new AguardandoPagamentoStatus());
        (new PedidosImagens())->updateBoleto($id, $request);

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
