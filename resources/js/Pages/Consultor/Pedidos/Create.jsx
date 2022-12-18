import IntegradorLayout from '@/Layouts/Consultor/Layout';

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import InfoCliente from './Partials/InfoCliente';
import Anexos from "./Partials/Anexos";
import Pedidos from "./Partials/Pedido";
import AlertDanger from "./Partials/AlertDanger";

import Box from '@mui/material/Box';
import {Button} from "reactstrap";

export default function Create({auth}) {
    const {errors} = usePage().props;

    const {data, setData, post, progress, processing} = useForm({
        pessoa: 'Pessoa Física',
        nome: '',
        razao_social: '',
        nascimento: '',
        rg: '',
        cpf: '',
        cnpj: '',
        telefone: '',
        email: '',
        endereco: '',
        file_rg: '',
        file_cpf: '',
        file_cnh: '',
        file_cartao_cnpj: '',
        file_comprovante_residencia: '',
        preco: '',
        fornecedor: '',
        file_imagem_pedido: '',
        file_orcamento: '',
        obs: '',
        forma_pagamento: ''
    });

    function submit(e) {
        e.preventDefault()
        post(route('consultor.pedidos.store'))
    }

    return (
        <IntegradorLayout
            auth={auth}
            errors={errors}
            titlePage="Cadastrar Pedido"
            button={true}
            url={route('consultor.pedidos.index')} textButton={'Voltar'}>

            <Form onSubmit={submit}>
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                    <AlertDanger errors={errors}></AlertDanger>
                    <Box>
                        <InfoCliente setData={setData} data={data}></InfoCliente>
                    </Box>
                </Container>
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                        <Anexos setData={setData} data={data}></Anexos>
                </Container>
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                        <Pedidos setData={setData} data={data}></Pedidos>
                    <Row className="text-center mb-3">
                        <Col>
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button disabled={processing} color="primary">Cadastrar</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </IntegradorLayout>
    )
}









