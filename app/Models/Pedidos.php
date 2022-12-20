<?php

namespace App\Models;

use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\RevisarStatusPedido;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  situacao
 *      0: novo
 *      1: ok
 *      2: reprovado
 *
 *  info_pedido
 *      informacoes de pagamento e instalacao
 */
class Pedidos extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'status',
        'status_data',
        'prazo',
        'sac',
        'preco_venda',
        'preco_custo',
        'forma_pagamento',
        'info_pedido',
        'fornecedor',
        'situacao',
        'obs',
    ];

    function create($dados)
    {
        $prazo = (new ConferenciaStatusPedido())->getPrazo();
        $status = (new ConferenciaStatusPedido())->getStatus();

        $pedido = $this->newQuery()
            ->create([
                'users_id' => auth()->id(),
                'status' => $status,
                'status_data' => now(),
                'prazo' => $prazo,
                'preco_venda' => convert_money_float($dados->preco),
                'forma_pagamento' => $dados->forma_pagamento,
                'fornecedor' => $dados->fornecedor,
                'info_pedido' => $dados->obs
            ]);

        (new PedidosHistoricos())->create($pedido->id, $status, $prazo, $dados->obs);

        return $pedido->id;
    }

    function updateStatus(int $id, string $status, int $prazo, ?string $obs = null, $situacao = 0)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'status' => $status,
                'status_data' => now(),
                'prazo' => $prazo,
                'situacao' => $situacao,
                'obs' => $obs
            ]);

        (new PedidosHistoricos())->create($id, $status, $prazo, $obs);
    }

    public function updateDados(int $id, $dados, $prazo)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'prazo' => $prazo,
                'preco_venda' => convert_money_float($dados->preco),
                'forma_pagamento' => $dados->forma_pagamento,
                'fornecedor' => $dados->fornecedor,
                'info_pedido' => $dados->obs
            ]);
    }

    function cliente()
    {
        return $this->hasOne(PedidosClientes::class);
    }

    function img()
    {
        return $this->hasOne(PedidosImagens::class);
    }

    public function updateSituacao($id, $code)
    {
        $this->newQuery()
            ->find($id)->update([
                'situacao' => $code
            ]);
    }
}
