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
        'users_id',
        'analizador',
        'status',
        'status_data',
        'titulo',
        'prazo'
    ];

    public function create($id, $titulo, $status, $prazo)
    {
        return $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'users_id' => auth()->id(),
                'status' => $status,
                'status_data' => now(),
                'titulo' => $titulo,
                'prazo' => $prazo,
            ]);
    }

    public function dados($id)
    {
        $dados = $this->newQuery()->findOrFail($id);

        return [
            'id' => $dados->id,
            'cliente' => getNomeCliente($id),
            'status' => (new StatusChamados())->getNomeStatus($dados->status),
            'titulo' => $dados->titulo,
            'prazo' => $dados->prazo,
            'data' => date('d/m/y H:i', strtotime($dados->status_data))
        ];
    }

    public function updateStatus(int $id, string $status, int $prazo)
    {
        $this->newQuery()
            ->where('pedidos_id', $id)
            ->update([
                'status' => $status,
                'status_data' => now(),
                'analizador' => auth()->id(),
                'prazo' => $prazo
            ]);
    }
}
