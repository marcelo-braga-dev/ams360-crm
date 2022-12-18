<?php

namespace App\Services\Pedidos\Cards;

use App\Models\Pedidos;
use App\Services\Pedidos\PedidosServices;
use App\src\Pedidos\Status\AguardandoFaturamentoStatus;
use App\src\Pedidos\Status\AguardandoNotaStatus;
use App\src\Pedidos\Status\AguardandoPagamentoStatus;
use App\src\Pedidos\Status\CanceladoStatus;
use App\src\Pedidos\Status\ConferenciaStatusPedido;
use App\src\Pedidos\Status\EntregueStatus;
use App\src\Pedidos\Status\FaturadoStatus;
use App\src\Pedidos\Status\LancadoStatus;
use App\src\Pedidos\Status\NovoStatusPedido;
use DateTime;

class AdminCardsServices
{
    public function pedidos()
    {
        $pedidosAll = (new Pedidos())->newQuery()->orderByDesc('situacao')->get();

        $novoStatus = (new NovoStatusPedido())->getStatus();
        $conferenciaStatus = (new ConferenciaStatusPedido())->getStatus();
        $lancadoStatus = (new LancadoStatus())->getStatus();
        $notaStatus = (new AguardandoNotaStatus())->getStatus();
        $pagamentoStatus = (new AguardandoPagamentoStatus())->getStatus();
        $faturamentoStatus = (new AguardandoFaturamentoStatus())->getStatus();
        $faturadoStatus = (new FaturadoStatus())->getStatus();
        $entregueStatus = (new EntregueStatus())->getStatus();
        $canceladoStatus = (new CanceladoStatus())->getStatus();

        $pedidos['novo'] = [];
        $pedidos['conferencia'] = [];
        $pedidos['lancado'] = [];
        $pedidos['nota'] = [];
        $pedidos['pagamento'] = [];
        $pedidos['faturamento'] = [];
        $pedidos['faturado'] = [];
        $pedidos['entregue'] = [];
        $pedidos['cancelado'] = [];


        foreach ($pedidosAll as $dados) {
            $adminCardsServices = new PedidosServices();

            switch ($dados->status) {
                case $novoStatus :
                    $pedidos['novo'][] = $adminCardsServices->pedido($dados);
                    break;
                case $conferenciaStatus :
                    $pedidos['conferencia'][] = $adminCardsServices->pedido($dados);
                    break;
                case $lancadoStatus :
                    $pedidos['lancado'][] = $adminCardsServices->pedido($dados);
                    break;
                case $notaStatus :
                    $pedidos['nota'][] = $adminCardsServices->pedido($dados);
                    break;
                case $pagamentoStatus :
                    $pedidos['pagamento'][] = $adminCardsServices->pedido($dados);
                    break;
                case $faturamentoStatus :
                    $pedidos['faturamento'][] = $adminCardsServices->pedido($dados);
                    break;
                case $faturadoStatus :
                    $pedidos['faturado'][] = $adminCardsServices->pedido($dados);
                    break;
                case $entregueStatus :
                    $pedidos['entregue'][] = $adminCardsServices->pedido($dados);
                    break;
                    case $canceladoStatus :
                    $pedidos['cancelado'][] = $adminCardsServices->pedido($dados);
                    break;
            }
            $clientes[$dados->id] = '';
        }

        return $pedidos;
    }
}
