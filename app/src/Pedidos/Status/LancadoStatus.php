<?php

namespace App\src\Pedidos\Status;

class LancadoStatus implements PedidosStatus
{
    private string $status = 'lancado';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
