import {Inertia} from '@inertiajs/inertia'
import Layout from "@/Layouts/Admin/Layout";

import React from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form, Button} from 'reactstrap';

import {TextField, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import ImagePdf from "@/Components/Inputs/ImagePdf";

export default function Create({pedido, img}) {
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

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                <div className="row">
                    <div className="col mb-4">
                        <Typography><b>Consultor:</b> {pedido.nome}</Typography>
                        <Typography><b>Cliente:</b> {pedido.cliente}</Typography>
                    </div>
                </div>
                <Typography variant={"h6"} component="h5">Baixar Comprovante Pagamento/Recibo</Typography>
                <div className="row">
                    <div className="col-md-4">
                        <ImagePdf url={img.url_recibo_1}/>
                    </div>
                    <div className="col-md-4">
                        <ImagePdf url={img.url_recibo_2}/>
                    </div>
                </div>
            </Container>
            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <Form onSubmit={submit}>
                    <Typography variant="body1">Nota Fiscal do Pedido n. {pedido.id}</Typography>
                    <Row className={"mt-2"}>
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

                    <Button variant="contained" type='submit' color="primary">
                        Atualizar Status
                    </Button>
                </Form>
            </Container>

        </Layout>
    )
}
