<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos_imagens', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('pedidos_id');
            $table->string('url_orcamento')->nullable();
            $table->string('url_rg')->nullable();
            $table->string('url_cpf')->nullable();
            $table->string('url_cnh')->nullable();
            $table->string('url_comprovante_residencia')->nullable();
            $table->string('url_cnpj')->nullable();
            $table->string('url_boleto')->nullable();
            $table->string('url_recibo')->nullable();
            $table->string('url_nota_fiscal')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos_imagens');
    }
};
