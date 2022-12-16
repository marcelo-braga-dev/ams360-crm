<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  prazos
 *      novo
 *      conferencia
 *      lancamento
 *      boleto
 *      pagamento
 *      faturando
 *      faturado
 */
class PedidosPrazos extends Model
{
    use HasFactory;

    protected $fillable = [
        'prazo',
        'valor'
    ];

    public function getNovo()
    {
        return $this->newQuery()
            ->where('prazo', 'novo')->first('valor')->valor;
    }

    public function getConferencia()
    {
        return $this->newQuery()
            ->where('prazo', 'conferencia')->first('valor')->valor;
    }

    public function getLancamento()
    {
        return $this->newQuery()
            ->where('prazo', 'lancamento')->first('valor')->valor;
    }

    public function getBoleto()
    {
        return $this->newQuery()
            ->where('prazo', 'boleto')->first('valor')->valor;
    }

    public function getPagamento()
    {
        return $this->newQuery()
            ->where('prazo', 'pagamento')->first('valor')->valor;
    }

    public function getFaturando()
    {
        return $this->newQuery()
            ->where('prazo', 'faturando')->first('valor')->valor;
    }

    public function getFaturado()
    {
        return $this->newQuery()
            ->where('prazo', 'faturado')->first('valor')->valor;
    }


    public function setNovo(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'novo')
            ->update(['valor' => $valor]);
    }

    public function setConferencia(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'conferencia')
            ->update(['valor' => $valor]);
    }

    public function setLancamento(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'lancamento')
            ->update(['valor' => $valor]);
    }

    public function setBoleto(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'boleto')
            ->update(['valor' => $valor]);
    }

    public function setPagamento(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'pagamento')
            ->update(['valor' => $valor]);
    }

    public function setFaturando(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'faturando')
            ->update(['valor' => $valor]);
    }

    public function setFaturado(int $valor)
    {
        $this->newQuery()
            ->where('prazo', 'faturado')
            ->update(['valor' => $valor]);
    }
}
