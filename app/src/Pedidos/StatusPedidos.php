<?php

namespace App\src\Pedidos;

use App\src\Pedidos\Status\AguardandoFaturamentoStatus;
use App\src\Pedidos\Status\AguardandoNotaStatus;
use App\src\Pedidos\Status\AguardandoPagamentoStatus;
use App\src\Pedidos\Status\CanceladoStatus;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\EntregueStatus;
use App\src\Pedidos\Status\FaturadoStatus;
use App\src\Pedidos\Status\LancadoStatus;
use App\src\Pedidos\Status\NovoStatusPedido;

class StatusPedidos
{
    public function getStatus(): array
    {
        $novo = (new NovoStatusPedido());
        $conferencia = (new ConferenciaStatusPedido());
        $lancado = (new LancadoStatus());
        $nota = (new AguardandoNotaStatus());
        $pagamento = (new AguardandoPagamentoStatus());
        $faturamento = (new AguardandoFaturamentoStatus());
        $faturado = (new FaturadoStatus());
        $entregue = (new EntregueStatus());
        $cancelado = (new CanceladoStatus());


        return [
            $novo->getStatus() => $novo->getNomeStatus(),
            $conferencia->getStatus() => $conferencia->getNomeStatus(),
            $lancado->getStatus() => $lancado->getNomeStatus(),
            $nota->getStatus() => $nota->getNomeStatus(),
            $pagamento->getStatus() => $pagamento->getNomeStatus(),
            $faturamento->getStatus() => $faturamento->getNomeStatus(),
            $faturado->getStatus() => $faturado->getNomeStatus(),
            $entregue->getStatus() => $entregue->getNomeStatus(),
            $cancelado->getStatus() => $cancelado->getNomeStatus(),
        ];
    }

    public function getNomeStatus(string $status) : string
    {
        return $this->getStatus()[$status];
    }
}
