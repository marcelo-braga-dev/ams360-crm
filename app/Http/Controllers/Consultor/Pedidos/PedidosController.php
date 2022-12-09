<?php

namespace App\Http\Controllers\Consultor\Pedidos;

use App\Http\Controllers\Controller;
use App\Http\Requests\PedidosRequest;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\PedidosImagens;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\NovoStatusPedido;
use DateTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PedidosController extends Controller
{
    public function index()
    {
        $pedidosAll = (new Pedidos())->newQuery()->get();
        $clientesAll = (new PedidosClientes())->newQuery()->get();
        $novoStatus = (new NovoStatusPedido())->getStatus();
        $conferenciaStatus = (new ConferenciaStatusPedido())->getStatus();

        $pedidos['novo'] = [];
        $pedidos['conferencia'] = [];
        $clientes = [];

        foreach ($pedidosAll as $dados) {
            $diferenca = $this->getDiferenca($dados->status_data, $dados->prazo);

            switch ($dados->status) {
                case $novoStatus :
                    $pedidos['novo'][] = [
                        'id' => $dados->id,
                        'data' => date('d/m/y H:i', strtotime($dados->status_data)),
                        'prazo' => date('d/m/y H:i', strtotime("+$dados->prazo days", strtotime($dados->status_data))),
                        'prazo_atrasado' => $diferenca,
                        'prazoDias' => $dados->prazo,
                        'preco' => convert_float_money($dados->preco_inicial),
                        'fornecedor' => $dados->fornecedor
                    ];
                    break;
                case $conferenciaStatus :
                    $pedidos['conferencia'][] = [
                        'id' => $dados->id,
                        'data' => date('d/m/y H:i', strtotime($dados->status_data)),
                        'prazo' => date('d/m/y H:i', strtotime("+$dados->prazo days", strtotime($dados->status_data))),
                        'prazo_atrasado' => $diferenca,
                        'prazoDias' => $dados->prazo,
                        'preco' => convert_float_money($dados->preco_inicial),
                        'fornecedor' => $dados->fornecedor
                    ];
                    break;
            }
            $clientes[$dados->id] = '';
        }

        foreach ($clientesAll as $cliente) {
            $clientes[$cliente->pedidos_id] = ['nome' => $cliente->nome];
        }

        return Inertia::render('Consultor/Pedidos/Index',
            compact('pedidos', 'clientes'));
    }

    public function create()
    {
        return Inertia::render('Consultor/Pedidos/Create');
    }

    public function store(PedidosRequest $request)
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
