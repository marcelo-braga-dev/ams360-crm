<?php

namespace App\src\Pedidos\Status;

class NovoStatusPedido implements PedidosStatus
{
    private string $status = 'novo';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
