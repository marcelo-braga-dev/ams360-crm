<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PedidosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nome' => ['required', 'max:255'],
            'razao_social' => ['required', 'max:255'],
            'rg' => ['required', 'max:255'],
            'cpf' => ['required', 'max:255'],
            'cnpj' => ['required', 'max:255'],
            'telefone' => ['required', 'max:255'],
            'endereco' => ['required', 'max:255'],
            'file_rg' => ['required'],
            'file_cpf' => ['required'],
            'file_cnh' => ['required'],
            'file_cartao_cnpj' => ['required'],
            'file_comprovante_residencia' => ['required'],
            'preco' => ['required', 'max:10'],
            'fornecedor' => ['required', 'max:255'],
            'file_imagem_pedido' => ['required'],
            'file_orcamento' => ['required'],
            //'obs' => ['required', 'max:255'],
            'forma_pagamento' => ['required', 'max:255'],
        ];
    }

    public function messages()
    {
        return [
            'nome.required' => 'Insira a(o) Nome.',
            'razao_social.required' => 'Insira a(o) Razão Social.',
            'rg.required' => 'Insira a(o) Número do RG.',
            'cpf.required' => 'Insira a(o) Numero do CPF.',
            'cnpj.required' => 'Insira a(o) Número do CNPJ.',
            'telefone.required' => 'Insira a(o) Telefone.',
            'endereco.required' => 'Insira a(o) Endereço.',
            'file_rg.required' => 'Insira a(o) Foto do RG.',
            'file_cpf.required' => 'Insira a(o) Foto do CPF.',
            'file_cnh.required' => 'Insira a(o) Foto do CNH.',
            'file_cartao_cnpj.required' => 'Insira a(o) Foto do Cartão CNPJ.',
            'file_comprovante_residencia.required' => 'Insira a(o) Comprovante de Residência.',
            'preco.required' => 'Insira a(o) Preço.',
            'fornecedor.required' => 'Insira a(o) Fornecedor.',
            'file_imagem_pedido.required' => 'Insira a(o) Foto do Pedido.',
            'file_orcamento.required' => 'Insira a(o) Foto ou PDF do Orçamento.',
            'forma_pagamento.required' => 'Insira a(o) Forma de Pagamento.',
        ];
    }
}
