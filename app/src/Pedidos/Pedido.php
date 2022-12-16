<?php

namespace App\src\Pedidos;

use App\Models\Pedidos;
use App\src\Pedidos\Status\PedidosStatus;

class Pedido
{
    public function updateStatus(int $id, PedidosStatus $pedido, $obs = null)
    {
        (new Pedidos())->updateStatus($id, $pedido->getStatus(), $pedido->getPrazo(), $obs);
    }
}
