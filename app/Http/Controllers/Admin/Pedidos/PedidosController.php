<?php

namespace App\Http\Controllers\Admin\Pedidos;

use App\Http\Controllers\Controller;
use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\User;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\LancadoStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DateTime;

class PedidosController extends Controller
{
    public function index()
    {
        $pedidosAll = (new Pedidos())->newQuery()->get();
        $clientesAll = (new PedidosClientes())->newQuery()->get();
        $usuariosAll = (new User())->newQuery()->get(['id', 'name']);

        $conferenciaStatus = (new ConferenciaStatusPedido())->getStatus();
        $lancadoStatus = (new LancadoStatus())->getStatus();

        $usuarios = [];
        foreach ($usuariosAll as $dados) {
            $usuarios[$dados->id] = $dados->name;
        }
        $clientes = [];
        foreach ($clientesAll as $cliente) {
            $clientes[$cliente->pedidos_id] = $cliente->nome;
        }

        $pedidos['conferencia'] = [];
        $pedidos['lancado'] = [];
        $pedidos['nota'] = [];
        $pedidos['pagamento'] = [];
        $pedidos['faturamento'] = [];
        $pedidos['entregue'] = [];

        foreach ($pedidosAll as $dados) {
            $diferenca = $this->getDiferenca($dados->status_data, $dados->prazo);

            switch ($dados->status) {
                case $conferenciaStatus :
                    $pedidos['conferencia'][] = [
                        'id' => $dados->id,
                        'nome' => $usuarios[$dados->users_id],
                        'cliente' => $clientes[$dados->id],
                        'data' => date('d/m/y H:i', strtotime($dados->status_data)),
                        'prazo' => date('d/m/y H:i', strtotime("+$dados->prazo days", strtotime($dados->status_data))),
                        'prazo_atrasado' => $diferenca,
                        'prazoDias' => $dados->prazo,
                        'preco' => convert_float_money($dados->preco_inicial),
                        'fornecedor' => $dados->fornecedor
                    ];
                    break;
                case $lancadoStatus :
                    $pedidos['lancado'][] = [
                        'id' => $dados->id,
                        'nome' => $usuarios[$dados->users_id],
                        'cliente' => $clientes[$dados->id],
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

        return Inertia::render('Admin/Pedidos/Index', compact('pedidos'));
    }

    private function getDiferenca(mixed $prazoData, int $prazoLimite): int
    {
        $entrada = new DateTime(now());
        $saida = new DateTime(date('Y-m-d H:i:s', strtotime("+$prazoLimite days", strtotime($prazoData))));
        return $saida->diff($entrada)->invert;
    }
}
