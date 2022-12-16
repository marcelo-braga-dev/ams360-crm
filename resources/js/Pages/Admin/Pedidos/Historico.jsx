import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {useForm} from '@inertiajs/inertia-react'
import Paper from "@mui/material/Paper";




export default function Historico({pedidos}) {

    return (<Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <Box sx={{width: '100%'}}>
                    <Typography variant="h6" className="mb-3">Histórico de Pedidos</Typography>
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Prazo</th>
                            <th>Consultor</th>
                            <th>Cliente</th>
                            <th>Status</th>
                            <th>Anotações</th>
                            <th>Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pedidos.map((dado) => {
                            return (
                                <tr key={dado.id} className={"align-middle"}>
                                    <th scope="row">
                                        {dado.data}
                                    </th>
                                    <td>
                                        {dado.prazo} ({dado.prazoDias} dias)
                                    </td>
                                    <td>
                                        {dado.nome}
                                    </td>
                                    <td>
                                        {dado.cliente}
                                    </td>
                                    <td>
                                        {dado.status}
                                    </td>
                                    <td>
                                        {dado.obs}
                                    </td>
                                    <td>
                                        <Button color={"primary"} href={route('admin.pedidos.show', dado.id)}
                                                size="sm">Ver</Button>
                                    </td>
                                </tr>)
                        })}
                        </tbody>
                    </Table>
            </Box>
        </Container>
    </Layout>)
}







