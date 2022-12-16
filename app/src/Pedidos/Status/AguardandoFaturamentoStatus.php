<?php

namespace App\src\Pedidos\Status;

use App\Models\PedidosPrazos;

class AguardandoFaturamentoStatus implements PedidosStatus
{
    private string $status = 'aguardando_faturamento';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getFaturando();
    }

    function getNomeStatus(): string
    {
        return 'Aguardando Faturamento';
    }
}
