<?php

namespace App\Http\Controllers\Consultor\Pedidos;

use App\Http\Controllers\Controller;
use App\Http\Requests\PedidosRequest;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosHistoricos;
use App\Models\PedidosImagens;
use App\Services\Pedidos\Cards\AdminCardsServices;
use App\Services\Pedidos\PedidosServices;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\NovoStatusPedido;
use App\src\Pedidos\StatusPedidos;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PedidosController extends Controller
{
    public function index()
    {
        $pedidos = (new AdminCardsServices())->pedidos();

        return Inertia::render('Consultor/Pedidos/Index', compact('pedidos'));
    }

    public function create()
    {
        return Inertia::render('Consultor/Pedidos/Create');
    }

    public function show($id)
    {
        $dados = (new Pedidos())->newQuery()->find($id);
        $pedido = (new PedidosServices())->pedido($dados);

        $historico = (new PedidosHistoricos())->newQuery()
            ->where('pedidos_id', $dados->id)->get();

        $historico = $historico->map(function ($dados) {
            return [
                'id' => $dados->id,
                'data' => date('d/m/y H:i', strtotime($dados->created_at)),
                'status' => (new StatusPedidos())->getNomeStatus($dados->status),
                'prazo' => $dados->prazo,
                'obs' => $dados->obs
            ];
        });

        return Inertia::render('Consultor/Pedidos/Show',
            compact('pedido', 'historico'));
    }

    public function store(Request $request)//PedidosRequest
    {
        $idPedido = (new Pedidos())->create($request);
        (new PedidosClientes())->create($idPedido, $request);
        (new PedidosImagens())->create($idPedido, $request);

        modalSucesso('Pedido cadastrado com sucesso!');
        return redirect()->route('consultor.pedidos.index');
    }

    public function update($id)
    {
        (new ConferenciaStatusPedido())->update($id);
        return redirect()->route('consultor.pedidos.index');
    }

    private function getDiferenca(mixed $prazoData, int $prazoLimite): int
    {
        $entrada = new DateTime(now());
        $saida = new DateTime(date('Y-m-d H:i:s', strtotime("+$prazoLimite days", strtotime($prazoData))));
        return $saida->diff($entrada)->invert;
    }
}
