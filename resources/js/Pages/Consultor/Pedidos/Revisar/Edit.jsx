import Layout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';

import AlertDanger from "./Partials/AlertDanger";
import InfoCliente from "./Partials/InfoCliente";
import Anexos from "./Partials/Anexos";
import Pedidos from "./Partials/Pedido";

export default function Edit({pedido, cliente, img, fornecedores, endereco}) {
    const {errors} = usePage().props;

    const {data, setData, progress, processing} = useForm({
        pessoa: cliente.nome ? 'Pessoa Física' : 'Jurídica',
        nome: cliente.nome,
        razao_social: cliente.razao_social,
        nascimento: cliente.data_nascimento,
        rg: cliente.rg,
        cpf: cliente.cpf,
        cnpj: cliente.cnpj,
        telefone: cliente.telefone,
        email: cliente.email,

        endereco: {
            cep: endereco.cep,
            rua: endereco.rua,
            numero: endereco.numero,
            complemento: endereco.complemento,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado
        },

        file_rg: img.url_rg,
        file_cpf: img.url_cpf,
        file_cnh: img.url_cnh,
        file_cartao_cnpj: img.url_cnpj,
        file_comprovante_residencia: img.url_comprovante_residencia,
        preco: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 })
            .format(pedido.preco_venda),
        fornecedor: pedido.fornecedor,
        file_orcamento: img.url_orcamento,
        obs: pedido.info_pedido,
        forma_pagamento: pedido.forma_pagamento
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('consultor.novo.update', pedido.id), {
            _method: 'put',
            ...data
        })
    }

    return (<Layout
            titlePage="Cadastrar Pedido"
            url={route('consultor.pedidos.index')} textButton="Voltar">

            <form onSubmit={submit}>
                <div className="container bg-white px-lg-6 py-lg-5 mb-4">
                    <AlertDanger errors={errors} />
                    <InfoCliente setData={setData} data={data} />
                </div>
                <div className="container bg-white px-lg-6 py-lg-5 mb-4">
                    <Anexos setData={setData} data={data} img={img} />
                </div>
                <div className="container bg-white px-lg-6 py-lg-5">
                    <Pedidos fornecedores={fornecedores} setData={setData} data={data}/>

                    <div className="row text-center mb-3">
                        <div className="col">
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <button className="btn btn-primary" disabled={processing}>Atualizar</button>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}

