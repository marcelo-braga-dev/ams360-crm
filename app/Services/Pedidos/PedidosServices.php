<?php

namespace App\Services\Pedidos;

use App\Models\Pedidos;
use App\Models\PedidosClientes;
use App\Models\User;
use App\src\Pedidos\StatusPedidos;
use DateTime;

class PedidosServices
{
    public $usuarios = [];
    public $clientes = [];

    public function __construct()
    {
        $usuariosAll = (new User())->newQuery()->get(['id', 'name']);
        $clientesAll = (new PedidosClientes())->newQuery()->get();


        foreach ($usuariosAll as $dados) {
            $this->usuarios[$dados->id] = $dados->name;
        }

        foreach ($clientesAll as $cliente) {
            $this->clientes[$cliente->pedidos_id]['nome'] = $cliente->nome ?? $cliente->razao_social;
            $this->clientes[$cliente->pedidos_id]['telefone'] = $cliente->telefone;
            $this->clientes[$cliente->pedidos_id]['email'] = $cliente->email;
            $this->clientes[$cliente->pedidos_id]['nascimento'] = date('d/m/Y', strtotime($cliente->data_nascimento));
        }
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
