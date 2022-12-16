import * as React from 'react';
import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row} from "reactstrap";
import Typography from "@mui/material/Typography";
import ConvertMoney from "@/Components/ConvertMoney";
import Paper from "@mui/material/Paper";

import {useForm} from '@inertiajs/inertia-react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";


export default function Pedidos({pedido, cliente, img}) {
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

    const {put, setData} = useForm({
        'reprovado': null
    })

    function submit(e) {
        e.preventDefault()
        put(route('admin.conferencia.show', pedido.id))
    }

    return (
        <Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
                <Row>
                    <Col className={"mb-3"}>
                        <Typography>Consultor: {pedido.nome}</Typography>
                    </Col>
                    <Col className={"mb-3"}>
                        <Typography>ID do Pedido: {pedido.id}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className={"mb-3"} lg={4}>
                        <Typography variant={"h6"} component="">Dados do Pedido </Typography>
                        <Typography>Preço: <ConvertMoney>{pedido.preco_venda}</ConvertMoney></Typography>
                        <Typography>Forma Pagamento: {pedido.forma_pagamento}</Typography>
                        <Typography>Fornecedor: {pedido.fornecedor}</Typography>
                        <Typography>Anotações: {pedido.obs}</Typography>
                    </Col>
                    <Col className={"mb-3"} lg={4}>
                        <Typography variant={"h6"} component="">Dados do Cliente</Typography>
                        <Typography>Nome: {cliente.nome}</Typography>
                        <Typography>Empresa: {cliente.razao_social}</Typography>
                        <Typography>RG: {cliente.rg}</Typography>
                        <Typography>CPF: {cliente.cpf}</Typography>
                        <Typography>CNPJ: {cliente.cnpj}</Typography>
                        <Typography>Telefone: {cliente.telefone}</Typography>
                        <Typography>Endereco: {cliente.endereco}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className={"mb-3"}>
                        <Typography variant={"h6"}>Imagens</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Orcamento</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_orcamento}/>)}
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>RG</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_rg}/>)}
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>CPF</Typography>
                            {(img && (<img alt="" src={"/storage/" + img.url_cpf}/>))}
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>CNH</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_cnh}/>)}
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Cartão CNPJ</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_cnpj}/>)}
                        </Paper>
                    </Col>
                    <Col lg={4} className={"mb-3"}>
                        <Paper className={"p-3"} elevation={1}>
                            <Typography variant={"body1"}>Comprovante de Residência</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_comprovante_residencia}/>)}
                        </Paper>
                    </Col>
                </Row>
                <form onSubmit={submit}>
                    <Row className={"mt-4 text-center"}>
                        <Col></Col>
                        <Col>
                            <Button color={"primary"} component={"button"} type={"submit"}>Aprovar Pedido</Button>
                        </Col>
                        <Col>
                            <Button onClick={handleOpen} color="danger">Reprovar Pedido</Button>
                        </Col>
                    </Row>
                </form>
            </Container>
            {/*MODAL*/}
            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="rounded">
                        <Typography className="mb-4" id="modal-modal-title" variant="h6" component="h2">
                            Reprovar Pedido
                        </Typography>
                        <form onSubmit={submit}>
                            <TextField
                                className="mb-4"
                                label="Motivos da reprovação"
                                multiline fullWidth required
                                rows={6} maxRows={5}
                                onChange={event => setData('reprovado', event.target.value)}
                            />
                            <div className="text-center">
                                <Button type="submit" color="primary">Salvar</Button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
            {/*MODAL - fim*/}
        </Layout>);
}
