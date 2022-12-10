<?php

namespace App\Models;

use App\src\Pedidos\Status\NovoStatusPedido;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedidos extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'status',
        'status_data',
        'prazo',
        'preco_inicial',
        'preco_final',
        'forma_pagamento',
        'fornecedor',
        'obs',
    ];

    function create($dados)
    {
        $prazo = (new NovoStatusPedido())->getPrazo();

        $pedido = $this->newQuery()
            ->create([
                'users_id' => auth()->id(),
                'status' => (new NovoStatusPedido())->getStatus(),
                'status_data' => now(),
                'prazo' => $prazo,
                'preco_inicial' => $dados->preco,
                'forma_pagamento' => $dados->forma_pagamento,
                'fornecedor' => $dados->fornecedor,
                'obs' => $dados->obs
            ]);
        return $pedido->id;
    }

    function updateStatus(int $id, $status, int $prazo) {
        $this->newQuery()
            ->find($id)
            ->update([
                'status' => $status,
                'status_data' => now(),
                'prazo' => $prazo
            ]);
    }

    function cliente() {
        return $this->hasOne(PedidosClientes::class);
    }

    function img() {
        return $this->hasOne(PedidosImagens::class);
    }
}
