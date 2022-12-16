import Layout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import Button from "@mui/material/Button";

//step
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";


export default function Create({id}) {
    const {errors} = usePage().props;

    const {data, setData, progress} = useForm({
        file_recibo: null
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('consultor.aguardando-pagamento.update', id), {
            _method: 'put',
            ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant={"h6"}>Recibo do Pagamento</Typography>
                    <Row className={"mt-4"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField
                                fullWidth required type="file"
                                onChange={e => setData('file_recibo', e.target.files[0])}>
                            </TextField>
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

