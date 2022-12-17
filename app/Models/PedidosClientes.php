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
        'cnpj'
    ];

    public function create($id, $request)
    {
        $this->newQuery()
            ->create([
                'pedidos_id' => $id,
                'nome' => $request->nome,
                'razao_social' => $request->razao_social,
                'endereco' => $request->endereco,
                'telefone' => $request->telefone,
                'email' => $request->email,
                'cpf' => $request->cpf,
                'rg' => $request->rg,
                'cnpj' => $request->cnpj
            ]);
    }

    public function dados(int $id)
    {
        return $this->newQuery()
            ->where('pedidos_id', $id)
            ->first();
    }
}
