<?php

namespace App\src\Chamados\Status;

use App\Models\PedidosChamados;
use App\Models\PedidosChamadosHistoricos;

class RespondidoChamadoStatus implements ChamadosStatus
{
    private string $status = 'respondido';

    function getStatus(): string
    {
        return $this->status;
    }

    function getNomeStatus(): string
    {
        return 'Respondido';
    }

    function getPrazo(): int
    {
        return 4;
    }

    public function responder($id, $mensagem)
    {
        (new PedidosChamadosHistoricos())->create($id, $this->status, $mensagem, $this->getPrazo());
        (new PedidosChamados())->updateStatus($id, $this->status, $this->getPrazo());
    }
}
