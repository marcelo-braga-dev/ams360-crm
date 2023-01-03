<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedores extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'cnpj',
        'atendente',
        'telefone',
        'email',
        'anotacoes'
    ];

    public function getFornecedor(int $id)
    {
        return $this->newQuery()->findOrFail($id);
    }

    public function getNomeFornecedores()
    {
        $items = $this->newQuery()->get();

        $dados = [];
        foreach ($items as $dado) {
            $dados[$dado->id] = $dado->nome;
        }

        return $dados;
    }

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'nome' => $dados->get('nome'),
                'cnpj' => $dados->get('cnpj'),
                'atendente' => $dados->get('atendente'),
                'telefone' =>$dados->get('telefone'),
                'email' => $dados->get('email'),
                'anotacoes' => $dados->get('anotacoes')
            ]);
    }

    public function atualizar($id, $dados)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'nome' => $dados->get('nome'),
                'cnpj' => $dados->get('cnpj'),
                'atendente' => $dados->get('atendente'),
                'telefone' =>$dados->get('telefone'),
                'email' => $dados->get('email'),
                'anotacoes' => $dados->get('anotacoes')
            ]);
    }
}
