<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedores extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome'
    ];

    public function getFornecedores()
    {
        $items = $this->newQuery()->get();

        $dados = [];
        foreach ($items as $dado) {
            $dados[$dado->id] = $dado->nome;
        }

        return $dados;
    }
}
