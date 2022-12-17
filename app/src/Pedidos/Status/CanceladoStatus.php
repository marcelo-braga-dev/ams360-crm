<?php

namespace App\src\Pedidos\Status;

use App\Models\PedidosPrazos;

class CanceladoStatus implements PedidosStatus
{
    private string $status = 'cancelado';

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
        return 'Cancelado';
    }
}
