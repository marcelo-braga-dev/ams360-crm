<?php

namespace App\src\Pedidos\Status;

use App\Models\Pedidos;
use App\Models\PedidosPrazos;

class LancadoStatus implements PedidosStatus
{
    private string $status = 'lancado';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getLancamento();
    }

    function getNomeStatus(): string
    {
        return 'Lançado';
    }
}
