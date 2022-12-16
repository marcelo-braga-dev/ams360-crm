<?php

namespace App\src\Pedidos\Status;

use App\Models\PedidosPrazos;

class FaturadoStatus implements PedidosStatus
{
    private string $status = 'faturado';

    public function __construct(int $prazo = 0)
    {
        $this->prazo = $prazo;
    }

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getFaturado();
    }

    function getNomeStatus(): string
    {
        return 'Faturado';
    }
}
