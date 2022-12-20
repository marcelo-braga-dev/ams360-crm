import Layout from '@/Layouts/Consultor/Layout';

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import InfoCliente from './Partials/InfoCliente';
import Anexos from "./Partials/Anexos";
import Pedidos from "./Partials/Pedido";
import AlertDanger from "./Partials/AlertDanger";

import Box from '@mui/material/Box';
import {Button} from "reactstrap";

export default function Create({fornecedores}) {
    const {errors} = usePage().props;

    const {data, setData, post, progress, processing} = useForm({
        pessoa: 'Pessoa Física',
    });

    function submit(e) {
        e.preventDefault()
        post(route('consultor.pedidos.store'))
    }

    return (
        <Layout
            titlePage="Cadastrar Pedido"
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
                    <Pedidos fornecedores={fornecedores} setData={setData} data={data}></Pedidos>
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
        </Layout>
    )
}









