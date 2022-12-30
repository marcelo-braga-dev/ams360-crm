import * as React from 'react';
import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row} from "reactstrap";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {useForm} from '@inertiajs/inertia-react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import ImagePdf from "@/Components/Inputs/ImagePdf";

export default function Pedidos({pedido, cliente, img, pedidoDados}) {
console.log(pedido);
    const {put, setData} = useForm({
        'reprovado': ''
    })

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

// Modal -fim

    function submit(e) {
        e.preventDefault()
        put(route('admin.conferencia.show', pedido.id))
    }

    return (
        <Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
                <Row>
                    <Col className={"mb-3"}>
                        <Typography><b>Consultor:</b> {pedido.nome}</Typography>
                    </Col>
                    <Col className="mb-3 text-right">
                        <Typography>ID do Pedido: #{pedido.id}</Typography>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className={"mb-3"}>
                        <Typography className="mb-2" variant={"h6"} component="">Dados do Pedido </Typography>
                        <Typography><b>Preço:</b> R$ {pedido.preco}</Typography>
                        <Typography><b>Forma Pagamento:</b> {pedidoDados.forma_pagamento}</Typography>
                        <Typography className="pb-2"><b>Fornecedor:</b> {pedido.fornecedor}</Typography>
                        <Typography><b>Mais informações:</b> {pedidoDados.info_pedido}</Typography>
                    </Col>
                    <Col className={"mb-3"}>
                        <Typography className="mb-2" variant={"h6"} component="">Dados do Cliente</Typography>
                        <Typography><b>Nome:</b> {cliente.nome}</Typography>
                        <Typography><b>Empresa:</b> {cliente.razao_social}</Typography>
                        <Typography><b>RG:</b> {cliente.rg}</Typography>
                        <Typography><b>CPF:</b> {cliente.cpf}</Typography>
                        <Typography><b>CNPJ:</b> {cliente.cnpj}</Typography>
                        <Typography><b>Telefone:</b> {cliente.telefone}</Typography>
                        <Typography><b>Endereço:</b> {cliente.endereco}</Typography>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className={"mb-3"}>
                        <Typography variant={"h6"}>Imagens</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Orcamento</Typography>
                            <ImagePdf url={img.url_orcamento}></ImagePdf>
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>RG</Typography>
                            <ImagePdf url={img.url_rg}></ImagePdf>
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>CPF</Typography>
                            <ImagePdf url={img.url_cpf}></ImagePdf>
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>CNH</Typography>
                            <ImagePdf url={img.url_cnh}></ImagePdf>
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Cartão CNPJ</Typography>
                            <ImagePdf url={img.url_cnpj}></ImagePdf>
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Comprovante de Residência</Typography>
                            <ImagePdf url={img.url_comprovante_residencia}></ImagePdf>
                        </Paper>
                    </Col>
                </Row>
                <hr/>
                <form onSubmit={submit}>
                    <Row className={"mt-4 text-center"}>
                        <Col></Col>
                        <Col>
                            <Button color={"primary"} component={"button"} type={"submit"}>Aprovar Pedido</Button>
                        </Col>
                        <Col>
                            <Button color="danger" onClick={handleOpen}>Reprovar Pedido</Button>
                        </Col>
                    </Row>
                </form>
            </Container>

            {/*MODAL*/}
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style} className="rounded">
                    <Typography className="mb-4" id="modal-modal-title" variant="h6" component="h2">
                        Reprovar Pedido
                    </Typography>
                    <form onSubmit={submit}>
                        <TextField
                            className="mb-4"
                            label="Motivos da reprovação"
                            multiline fullWidth rows={6} required
                            onChange={event => setData('reprovado', event.target.value)}/>
                        <div className="text-center">
                            <Button type="submit" color="primary">Salvar</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
            {/*MODAL - fim*/}
        </Layout>);
}
