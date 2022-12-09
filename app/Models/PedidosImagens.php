<?php

namespace App\Models;

use App\Services\Images;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidosImagens extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'pedidos_id',
        'url_produtos',
        'url_orcamento',
        'url_rg',
        'url_cpf',
        'url_cnh',
        'url_comprovante_residencia',
        'url_cnpj'
    ];

    function create($id, $dados)
    {
        $urlImgPedido = (new Images())->armazenar($dados, 'file_imagem_pedido', 'pedidos/'.$id);
        $urlOrcamento = (new Images())->armazenar($dados, 'file_orcamento', 'pedidos/'.$id);
        $urlRg = (new Images())->armazenar($dados, 'file_rg', 'pedidos/'.$id);
        $urlCpf = (new Images())->armazenar($dados, 'file_cpf', 'pedidos/'.$id);
        $urlCnh = (new Images())->armazenar($dados, 'file_cnh', 'pedidos/'.$id);
        $urlCnpj = (new Images())->armazenar($dados, 'file_cartao_cnpj', 'pedidos/'.$id);
        $urlComprovante = (new Images())->armazenar($dados, 'file_comprovante_residencia', 'pedidos/'.$id);

        $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'url_produtos' => $urlImgPedido,
                'url_orcamento' => $urlOrcamento,
                'url_rg' => $urlRg,
                'url_cpf' => $urlCpf,
                'url_cnh' => $urlCnh,
                'url_comprovante_residencia' => $urlComprovante,
                'url_cnpj' => $urlCnpj,
            ]);
    }
}
