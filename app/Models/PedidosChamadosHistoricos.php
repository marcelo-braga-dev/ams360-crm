<?php

namespace App\Models;

use App\Services\Images;
use App\src\Chamados\StatusChamados;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidosChamadosHistoricos extends Model
{
    use HasFactory;

    protected $fillable = [
        'pedidos_id',
        'users_id',
        'status',
        'msg',
        'url_img_1',
        'prazo'
    ];

    public function create($id, $status, $msg, $prazo)
    {
        // $img_1 = (new Images())->armazenar($dados, 'img_1', 'chamados/' . $dados->id);

        $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'users_id' => auth()->id(),
                'status' => $status,
                'msg' => $msg,
                'url_img_1' => null,
                'prazo' => $prazo,
            ]);
    }

    public function getMensagens($id)
    {
        $dados = $this->newQuery()->where('pedidos_id', $id)->get();

        return $dados->map(function ($dados) {
            return [
                'status' => (new StatusChamados())->getNomeStatus($dados->status),
                'msg' => $dados->msg,
                'img' => $dados->url_img_1,
                'prazo' => $dados->prazo,
                'data' => date('d/m/y H:i', strtotime($dados->updated_at))
            ];
        });
    }
}
