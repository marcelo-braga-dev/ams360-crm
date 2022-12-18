<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidosClientes extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'pedidos_id',
        'nome',
        'razao_social',
        'endereco',
        'telefone',
        'email',
        'cpf',
        'rg',
        'cnpj',
        'data_nascimento',
    ];

    public function create($id, $dados)
    {
        $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'nome' => $dados->nome,
                'razao_social' => $dados->razao_social,
                'endereco' => $dados->endereco,
                'telefone' => $dados->telefone,
                'email' => $dados->email,
                'cpf' => $dados->cpf,
                'rg' => $dados->rg,
                'cnpj' => $dados->cnpj,
                'data_nascimento' => $dados->nascimento,
            ]);
    }

    public function dados(int $id)
    {
        return $this->newQuery()
            ->where('pedidos_id', $id)
            ->first();
    }

    public function updateDados(int $id, $dados)
    {
        $this->newQuery()
            ->where('pedidos_id', $id)
            ->update([
                'nome' => $dados->nome,
                'razao_social' => $dados->razao_social,
                'endereco' => $dados->endereco,
                'telefone' => $dados->telefone,
                'email' => $dados->email,
                'cpf' => $dados->cpf,
                'rg' => $dados->rg,
                'cnpj' => $dados->cnpj,
                'data_nascimento' => $dados->nascimento,
            ]);
    }
}
