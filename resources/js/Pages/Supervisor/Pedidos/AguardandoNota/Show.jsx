import {Inertia} from '@inertiajs/inertia'
import Layout from "@/Layouts/Supervisor/Layout";

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import Button from "@mui/material/Button";

//step
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";


export default function Create({auth, pedido}) {
    const {errors} = usePage().props;

    const {data, setData, progress} = useForm({
        file_nota: ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('supervisor.pedidos.aguardando-nota.update', pedido.id), {
            _method: 'put', ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Nota do Pedido</Typography>
                    <Row className={"mt-4"}>
                        <Col className={"mb-3"} lg={"6"}>
                            {/*<FormControl fullWidth>*/}
                            {/*    <InputLabel>Nota</InputLabel>*/}
                            {/*    <OutlinedInput*/}
                            {/*        startAdornment={<InputAdornment position="start"></InputAdornment>}*/}
                            {/*        label="Amount" type="file" id="file_rg"*/}
                            {/*        onChange={e => setData('file_nota', e.target.files[0])}*/}
                            {/*    />*/}
                            {/*</FormControl>*/}
                            <TextField
                                type="file" fullWidth required
                                onChange={e => setData('file_nota', e.target.files[0])}>
                            </TextField>
                        </Col>
                    </Row>

                    <Button variant="contained" type='submit'>
                        Atualizar Status
                    </Button>
                </Form>
            </Container>

        </Layout>)
}
