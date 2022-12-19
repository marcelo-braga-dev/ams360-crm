<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosHistoricos;
use App\Models\PedidosImagens;
use App\Services\Pedidos\Cards\AdminCardsServices;
use App\Services\Pedidos\PedidosServices;
use Inertia\Inertia;

class PedidosController extends Controller
{
    public function index()
    {
        $pedidos = (new AdminCardsServices())->pedidos();

        return Inertia::render('Admin/Pedidos/Index', compact('pedidos'));
    }

    public function show($id)
    {
        $dados = (new Pedidos())->newQuery()->find($id);

        $cliente = (new PedidosClientes())->getCliente($id);
        $pedido = (new PedidosServices())->pedido($dados);
        $img = (new PedidosImagens())->imagens($id);
        $historico = (new PedidosHistoricos())->historico($id);

        return Inertia::render('Admin/Pedidos/Show',
            compact('pedido', 'cliente', 'historico', 'img'));
    }

    public function historico()
    {
        $pedidos = (new PedidosServices())->pedidos();

        return Inertia::render('Admin/Pedidos/Historico', compact('pedidos'));
    }
}
