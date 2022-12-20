import {Inertia} from '@inertiajs/inertia'
import Layout from "@/Layouts/Supervisor/Layout";

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import Button from "@mui/material/Button";
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";


export default function Create({auth, pedido}) {
    const {errors} = usePage().props;

    const {data, setData, progress} = useForm({
        prazo : ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('supervisor.pedidos.faturado.update', pedido.id), {
            _method: 'put',
            ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Pedido n. {pedido.id}</Typography>

                    <Button variant="contained" type='submit'>
                        Atualizar Status
                    </Button>
                </Form>
            </Container>

        </Layout>
    )
}
