<?php

namespace App\src\Pedidos;

use App\Models\Pedidos;
use App\src\Pedidos\Status\PedidosStatus;

class Pedido
{
    public function updateStatus(int $id, PedidosStatus $pedido)
    {
        (new Pedidos())->newQuery()
            ->findOrFail($id)
            ->update([
                'status' => $pedido->getStatus(),
                'prazo' => $pedido->getPrazo(),
                'status_data' => now()
            ]);
    }
}
