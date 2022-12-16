<?php

namespace App\src\Pedidos\Status;

use App\Models\PedidosPrazos;

class EntregueStatus implements PedidosStatus
{
    private string $status = 'entregue';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 0;
    }

    function getNomeStatus(): string
    {
        return 'Entregue';
    }
}
