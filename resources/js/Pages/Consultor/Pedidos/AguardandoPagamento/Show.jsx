import Layout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form, Button} from 'reactstrap';

//step
import {TextField, Typography} from "@mui/material";
import ImagePdf from "@/Components/Inputs/ImagePdf";

export default function Create({id, files}) {
    const {data, setData, progress} = useForm();

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('consultor.aguardando-pagamento.update', id), {
            _method: 'put',
            ...data
        })
    }

    return (<Layout titlePage="Pedidos" url={route('consultor.pedidos.index')} textButton="Voltar">
            {/*Baixar Nota*/}
            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                <Row>
                    <Col>
                        <Typography variant={"body1"} component="p">Baixar Nota/Boleto</Typography>
                        <ImagePdf url={files.url_boleto}/>
                    </Col>
                </Row>
            </Container>

            {/*Envio de Comprovantes*/}
            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography className="mb-3" variant="h5">Enviar Comprovantes de Pagametos</Typography>
                    <Typography variant={"body1"}>Recibo do Pagamento</Typography>
                    <Row className="mb-4">
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField
                                fullWidth required type="file"
                                onChange={e => setData('file_recibo_1', e.target.files[0])}>
                            </TextField>
                        </Col>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextField
                                fullWidth type="file"
                                onChange={e => setData('file_recibo_2', e.target.files[0])}>
                            </TextField>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Button variant="contained" type='submit' color="primary">
                            Enviar
                        </Button>
                    </div>
                </Form>
            </Container>

        </Layout>
    )
}

