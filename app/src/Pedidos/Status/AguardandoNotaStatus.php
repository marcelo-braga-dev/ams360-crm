<?php

namespace App\src\Pedidos\Status;

use App\Models\Pedidos;
use App\Models\PedidosPrazos;

class AguardandoNotaStatus implements PedidosStatus
{
    private string $status = 'aguardando_nota';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getBoleto();
    }

    function getNomeStatus(): string
    {
        return 'Aguardando Nota/Boleto';
    }

    function update(int $id, $preco_custo)
    {
        (new Pedidos())->newQuery()
            ->find($id)->update([
                'preco_custo' => $preco_custo,
                'status' => $this->getStatus(),
                'status_data' => now(),
                'prazo' => $this->getPrazo(),
                'situacao' => 0
            ]);
    }
}
