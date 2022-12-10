<?php

namespace App\src\Pedidos\Status;

class AguardandoPagamentoStatus implements PedidosStatus
{
    private string $status = 'aguardando_pagamento';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
