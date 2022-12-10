<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\src\Pedidos\Pedido;
use App\src\Pedidos\Status\LancadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AguardandoNotaController extends Controller
{
    public function show($id)
    {
        $pedido = (new Pedidos)->newQuery()->findOrFail($id);
        $cliente = $pedido->cliente;
        $img = $pedido->img;

        return Inertia::render('Admin/Pedidos/AguardandoNota/Show',
            compact('pedido', 'cliente', 'img'));
    }

    public function update($id)
    {
        (new Pedido())->updateStatus($id, new LancadoStatus());

        modalSucesso('Atualizado com sucesso!');
        return redirect()->route('admin.pedidos.index');
    }
}
