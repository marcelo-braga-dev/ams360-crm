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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('users_id');
            $table->string('status');
            $table->dateTime('status_data');
            $table->integer('prazo');
            $table->boolean('sac')->default(0);
            $table->float('preco_venda', 10);
            $table->float('preco_custo', 10)->nullable();
            $table->string('info_pedido', 1024)->nullable();
            $table->string('forma_pagamento');
            $table->string('fornecedor');
            $table->boolean('situacao')->default(0);
            $table->string('obs')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
};
