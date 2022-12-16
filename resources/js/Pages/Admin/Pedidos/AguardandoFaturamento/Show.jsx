import {Inertia} from '@inertiajs/inertia'
import Layout from "@/Layouts/Admin/Layout";

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import Button from "@mui/material/Button";
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";


export default function Create({auth, pedido}) {
    const {errors} = usePage().props;

    const {data, setData, progress} = useForm({
        file_nota_fiscal: '',
        prazo: ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('admin.aguardando-faturamento.update', pedido.id), {
            _method: 'put',
            ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Nota Fiscal do Pedido n. {pedido.id}</Typography>
                    <Row className={"mt-4"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField
                                label="Nota Fiscal" focused
                                fullWidth required type="file"
                                onChange={e => setData('file_nota_fiscal', e.target.files[0])}>
                            </TextField>
                        </Col>
                    </Row>
                    <Row className={"mt-2"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField label="Prazo Entrega" type="number" required
                                       onChange={e => setData('prazo', e.target.value)}></TextField>
                        </Col>
                    </Row>

                    <Button variant="contained" type='submit'>
                        Atualizar Status
                    </Button>
                </Form>
            </Container>

        </Layout>
    )
}
