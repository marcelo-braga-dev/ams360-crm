<?php

namespace App\src\Pedidos\Status;

class AguardandoNotaStatus implements PedidosStatus
{
    private string $status = 'aguardando_nota';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return 5;
    }
}
