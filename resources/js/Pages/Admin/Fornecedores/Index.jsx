import Layout from '@/Layouts/Admin/Layout';

import React, {useState} from 'react';
import {Container, Row, Col, Table, Button} from 'reactstrap';
import {TextField, Typography} from "@mui/material";
import {useForm} from "@inertiajs/inertia-react";

export default function Create({fornecedores}) {
    const {post, setData, reset} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('admin.fornecedores.store'))
    }

    return (
        <Layout titlePage="Abrir SAQ" url={route('admin.chamados.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-3 px-md-6 py-4 mb-4">
                <Row>
                    <Col className="mb-4">
                        <Typography className="mb-3" variant="h6">Informações do SAC</Typography>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3 p-3 shadow rounded">
                        <Table width="100%">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fornecedor</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fornecedores.map((dados) => {
                                return (<tr key={dados.id}>
                                    <td>
                                        {dados.id}
                                    </td>
                                    <td>
                                        {dados.nome}
                                    </td>
                                </tr>)
                            })}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col mb-3 p-3 shadow rounded">
                        <Typography className="mb-3">Cadastrar Fornecedor</Typography>
                        <form onSubmit={submit}>
                            <div className="row p-3">
                                <div className="col-8">
                                    <TextField label="Fornecedor" fullWidth
                                               onChange={e => setData('fornecedor', e.target.value)}/></div>
                                <div className="col-4"><Button color="primary">Salvar</Button></div>
                            </div>
                        </form>
                    </div>
                </div>

            </Container>
        </Layout>
    )
}
