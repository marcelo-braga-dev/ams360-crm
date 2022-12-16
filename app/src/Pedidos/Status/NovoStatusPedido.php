<?php

namespace App\src\Pedidos\Status;

use App\Models\Pedidos;
use App\Models\PedidosPrazos;

class NovoStatusPedido implements PedidosStatus
{
    private string $status = 'novo';

    function getStatus(): string
    {
        return $this->status;
    }

    function getPrazo(): int
    {
        return (new PedidosPrazos())->getNovo();
    }

    function getNomeStatus(): string
    {
        return 'Cadastrado';
    }

    public function reprovado(int $id, ?string $motivo)
    {
        (new Pedidos())->updateStatus($id, $this->status, $this->getPrazo(), $motivo, 3);
    }
}
