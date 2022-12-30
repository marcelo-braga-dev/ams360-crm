<?php

namespace App\Models;

use App\src\Chamados\StatusChamados;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidosChamados extends Model
{
    use HasFactory;

    protected $fillable = [
        'pedidos_id',
        'consultor',
        'admin',
        'status',
        'status_data',
        'titulo',
        'prazo'
    ];

    public function create($idPedido, $titulo, $status, $prazo, $mensagem)
    {
        $pedido = (new Pedidos())->get($idPedido);

        $dados = $this->newQuery()
            ->create([
                'pedidos_id' => $idPedido,
                'consultor' => $pedido['id_consultor'],
                'admin' => auth()->id(),
                'status' => $status,
                'status_data' => now(),
                'titulo' => $titulo,
                'prazo' => $prazo,
            ]);

        // Cria historico
        (new PedidosChamadosHistoricos())->create($idPedido, $dados->id, $status, $mensagem, $prazo);

        modalSucesso('SAC criado com sucesso!');
    }

    // Retorna Infos do Chamado
    public function get($id)
    {
        $dados = $this->newQuery()->findOrFail($id);

        return [
            'id' => $id,
            'id_pedido' => $dados->pedidos_id,
            'cliente' => getNomeCliente($dados->pedidos_id),
            'status' => (new StatusChamados())->getNomeStatus($dados->status),
            'titulo' => $dados->titulo,
            'prazo' => $dados->prazo,
            'data' => date('d/m/y H:i', strtotime($dados->status_data))
        ];
    }

    // Retorna Chamados do Consultor
    public function getConsultor()
    {
        return $this->newQuery()
            ->where('consultor', auth()->id())->get();
    }

    // Atualiza Status do Chamado
    public function updateStatus(int $id, string $status, int $prazo)
    {
        $this->newQuery()
            ->where('pedidos_id', $id)
            ->update([
                'status' => $status,
                'status_data' => now(),
                'admin' => auth()->id(),
                'prazo' => $prazo
            ]);
    }
}
