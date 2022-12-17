import IntegradorLayout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form, Button} from 'reactstrap';

//step
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import Layout from "@/Layouts/Admin/Layout";


export default function Create({auth, pedido}) {

    const {data, setData} = useForm({
        motivo : ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('admin.cancelado.update', pedido.id), {
            _method: 'put', ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Cancelar Pedido</Typography>
                    <Row className={"my-4"}>
                        <TextField
                            label="Motivos do Cancelamento" fullWidth multiline rows={4} required
                            value={data.obs} onChange={e => setData('motivo', e.target.value)}
                        />
                    </Row>

                    <Button variant="contained" type='submit' color="danger">
                        Cancelar Pedido
                    </Button>
                </Form>
            </Container>

        </Layout>)
}
