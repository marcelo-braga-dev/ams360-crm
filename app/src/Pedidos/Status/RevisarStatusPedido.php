<?php

namespace App\src\Pedidos\Status;

use App\Models\Pedidos;
use App\Models\PedidosPrazos;

class RevisarStatusPedido implements PedidosStatus
{
    private string $status = 'revisar';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getRevisar();
    }

    function getNomeStatus(): string
    {
        return 'Revisar Informações';
    }

    public function reprovado(int $id, ?string $motivo)
    {
        (new Pedidos())->updateStatus($id, $this->status, $this->getPrazo(), $motivo, 3);
    }
}
