<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enderecos extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'cep',
        'rua',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
    ];

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'cep' => $dados->cep,
                'rua' => $dados->rua,
                'numero' => $dados->numero,
                'complemento' => $dados->complemento,
                'bairro' => $dados->bairro,
                'cidade' => $dados->cidade,
                'estado' => $dados->estado,
            ]);
    }
}
