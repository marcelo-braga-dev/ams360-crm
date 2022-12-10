import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row} from "reactstrap";
import Typography from "@mui/material/Typography";
import ConvertMoney from "@/Components/ConvertMoney";
import Paper from "@mui/material/Paper";

import { useForm } from '@inertiajs/inertia-react'



export default function Pedidos({pedido, cliente, img}) {
    const {put} = useForm()
    function submit(e) {
        e.preventDefault()
        put(route('admin.conferencia.show', pedido.id))
    }

    return (
        <Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
                <Row>
                    <Col className={"mb-3"}>
                        <Typography>Consultor: </Typography>
                    </Col>
                    <Col className={"mb-3"}>
                        <Typography>ID do Pedido: {pedido.id}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className={"mb-3"} lg={4}>
                        <Typography variant={"h6"} component="">Dados do Pedido </Typography>
                        <Typography>Preço: <ConvertMoney>{pedido.preco_inicial}</ConvertMoney></Typography>
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
                            <Typography variant={"body1"}>Produtos</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_produtos}/>)}
                        </Paper>
                    </Col>
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
                            <Typography variant={"body1"}>Comprovante de Residencia</Typography>
                            {img && (<img alt="" src={"/storage/" + img.url_comprovante_residencia}/>)}
                        </Paper>
                    </Col>
                </Row>
                <Row className={"mt-4 text-center"}>
                    <form onSubmit={submit}>
                        <Col>
                            <Button color={"primary"} component={"button"} type={"submit"}>Aprovar Pedido</Button>
                        </Col>
                    </form>
                </Row>
            </Container>

        </Layout>);
}
