<?php

namespace App\src\Pedidos\Status;

class AguardandoFaturamenroStatus implements PedidosStatus
{
    private string $status = 'aguardando_faturamento';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
