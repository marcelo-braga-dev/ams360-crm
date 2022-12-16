<?php

namespace App\src\Pedidos\Status;

use App\Models\PedidosPrazos;

class AguardandoPagamentoStatus implements PedidosStatus
{
    private string $status = 'aguardando_pagamento';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getPagamento();
    }

    function getNomeStatus(): string
    {
        return 'Aguardando Pagamento';
    }
}
