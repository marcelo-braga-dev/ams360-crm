<?php

namespace App\src\Chamados\Status;

use App\Models\PedidosChamados;
use App\Models\PedidosChamadosHistoricos;

class NovoChamadoStatus implements ChamadosStatus
{
    private string $status = 'novo';

    function getStatus(): string
    {
        return $this->status;
    }

    function getNomeStatus(): string
    {
        return 'Em aberto';
    }

    function getPrazo(): int
    {
        return 3;
    }

    public function create(int $id, string $titulo, ?string $mensagem)
    {
        if (!(new PedidosChamados())->newQuery()->find($id)) {
            (new PedidosChamados())->create($id, $titulo, $this->status, $this->getPrazo());
        }

        (new PedidosChamadosHistoricos())->create($id, $this->status, $mensagem, $this->getPrazo());
    }
}
