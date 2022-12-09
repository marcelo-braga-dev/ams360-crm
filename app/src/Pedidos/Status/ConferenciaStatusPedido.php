<?php

namespace App\src\Pedidos\Status;

use App\Models\Pedidos;

class ConferenciaStatusPedido implements PedidosStatus
{
    private string $status = 'conferencia';

    function getStatus(): string
    {
        return $this->status;
    }

    function update(int $id) {
        (new Pedidos())->updateStatus($id, $this->status, $this->getPrazo());
    }

    function getPrazo(): int {
        return 2;
    }
}
