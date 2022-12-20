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
        'url_orcamento',
        'url_rg',
        'url_cpf',
        'url_cnh',
        'url_comprovante_residencia',
        'url_cnpj',
        'url_boleto',
        'url_recibo',
        'url_nota_fiscal'
    ];

    function create($id, $dados)
    {
        $urlOrcamento = (new Images())->armazenar($dados, 'file_orcamento', 'pedidos/' . $id);
        $urlRg = (new Images())->armazenar($dados, 'file_rg', 'pedidos/' . $id);
        $urlCpf = (new Images())->armazenar($dados, 'file_cpf', 'pedidos/' . $id);
        $urlCnh = (new Images())->armazenar($dados, 'file_cnh', 'pedidos/' . $id);
        $urlCnpj = (new Images())->armazenar($dados, 'file_cartao_cnpj', 'pedidos/' . $id);
        $urlComprovante = (new Images())->armazenar($dados, 'file_comprovante_residencia', 'pedidos/' . $id);

        $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'url_orcamento' => $urlOrcamento,
                'url_rg' => $urlRg,
                'url_cpf' => $urlCpf,
                'url_cnh' => $urlCnh,
                'url_comprovante_residencia' => $urlComprovante,
                'url_cnpj' => $urlCnpj,
            ]);
    }

    public function getImagens(int $id)
    {
        return $this->newQuery()
            ->where('pedidos_id', $id)->first();
    }

    public function updateDados(int $id, $dados)
    {
        $urlOrcamento = (new Images())->armazenar($dados, 'file_orcamento', 'pedidos/' . $id);
        $urlRg = (new Images())->armazenar($dados, 'file_rg', 'pedidos/' . $id);
        $urlCpf = (new Images())->armazenar($dados, 'file_cpf', 'pedidos/' . $id);
        $urlCnh = (new Images())->armazenar($dados, 'file_cnh', 'pedidos/' . $id);
        $urlCnpj = (new Images())->armazenar($dados, 'file_cartao_cnpj', 'pedidos/' . $id);
        $urlComprovante = (new Images())->armazenar($dados, 'file_comprovante_residencia', 'pedidos/' . $id);

        $this->newQuery()
            ->where('pedidos_id', $id)
            ->update([
                'url_orcamento' => $urlOrcamento,
                'url_rg' => $urlRg,
                'url_cpf' => $urlCpf,
                'url_cnh' => $urlCnh,
                'url_comprovante_residencia' => $urlComprovante,
                'url_cnpj' => $urlCnpj,
            ]);
    }

    function updateBoleto($id, $dados)
    {
        $url = (new Images())->armazenar($dados, 'file_nota', 'pedidos/' . $id);

        $this->newQuery()
            ->where('pedidos_id', $id)
            ->updateOrCreate(
                ['pedidos_id' => $id], ['url_boleto' => $url]
            );
    }

    function updateRecibo($id, $dados)
    {
        $url = (new Images())->armazenar($dados, 'file_recibo', 'pedidos/' . $id);

        $this->newQuery()
            ->where('pedidos_id', $id)
            ->updateOrCreate(
                ['pedidos_id' => $id], ['url_recibo' => $url]
            );
    }

    function updateNotaFiscal($id, $dados)
    {
        $url = (new Images())->armazenar($dados, 'file_nota_fiscal', 'pedidos/' . $id);

        $this->newQuery()
            ->where('pedidos_id', $id)
            ->updateOrCreate(
                ['pedidos_id' => $id], ['url_nota_fiscal' => $url]
            );
    }
}
