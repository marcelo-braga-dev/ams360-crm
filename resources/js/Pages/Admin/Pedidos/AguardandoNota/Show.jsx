import IntegradorLayout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

//step
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import Layout from "@/Layouts/Admin/Layout";

export default function Create({auth, pedido}) {
    const {data, setData, progress} = useForm({
        file_nota: ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('admin.aguardando-nota.update', pedido.id), {
            _method: 'put', ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Nota do Pedido</Typography>
                    <Row className={"mt-4"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField
                                type="file" fullWidth required
                                onChange={e => setData('file_nota', e.target.files[0])}>
                            </TextField>
                        </Col>
                    </Row>

                    <button className="btn btn-primary" type='submit'>
                        Salvar
                    </button>
                </Form>
            </Container>

        </Layout>)
}
