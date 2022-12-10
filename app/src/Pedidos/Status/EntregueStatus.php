<?php

namespace App\src\Pedidos\Status;

class EntregueStatus implements PedidosStatus
{
    private string $status = 'entregue';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
