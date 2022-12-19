<?php

namespace App\Services\Pedidos;

use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\User;
use App\src\Pedidos\StatusPedidos;
use DateTime;

class PedidosServices
{
    public array $usuarios = [];
    public array $clientes = [];

    public function __construct()
    {
        $this->clientes = (new PedidosClientes())->dados();
        $this->usuarios = (new User())->getNomes();
    }

    public function pedido($dados): array
    {
        return [
            'id' => $dados->id,
            'nome' => $this->usuarios[$dados->users_id],
            'cliente' => $this->clientes[$dados->id]['nome'],
            'data' => date('d/m/y H:i', strtotime($dados->status_data)),
            'prazo' => date('d/m/y H:i', strtotime("+$dados->prazo days", strtotime($dados->status_data))),
            'prazo_atrasado' => $this->getDiferenca($dados->status_data, $dados->prazo),
            'prazoDias' => $dados->prazo,
            'status' => (new StatusPedidos())->getNomeStatus($dados->status),
            'preco' => convert_float_money($dados->preco_venda),
            'preco_float' => $dados->preco_venda,
            'fornecedor' => $dados->fornecedor,
            'obs' => $dados->obs,
            'situacao' => $dados->situacao,
            'email' => $this->clientes[$dados->id]['email'],
            'telefone' => $this->clientes[$dados->id]['telefone'],
            'nascimento' => $this->clientes[$dados->id]['nascimento']
        ];
    }

    public function pedidos()
    {
        $pedidosAll = (new Pedidos())->newQuery()->orderByDesc('id')->get();

        $pedidos = [];
        foreach ($pedidosAll as $dados) {
            $pedidos[] = $this->pedido($dados);
        }
        return $pedidos;
    }

    private function getDiferenca(mixed $prazoData, int $prazoLimite): int
    {
        $entrada = new DateTime(now());
        $saida = new DateTime(date('Y-m-d H:i:s', strtotime("+$prazoLimite days", strtotime($prazoData))));
        return $saida->diff($entrada)->invert;
    }
}
