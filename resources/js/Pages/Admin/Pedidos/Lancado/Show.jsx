import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import * as React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {useForm} from '@inertiajs/inertia-react'
import {InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import PropTypes from "prop-types";
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";

export default function Pedidos({pedido, cliente, img}) {
    const {data, put, setData} = useForm({
        'preco_custo': null
    })

    function submit(e) {
        e.preventDefault()
        put(route('admin.lancado.update', pedido.id))
    }

    // TAB
    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    // TAB - fim

    // ConvertMoney
    let valor = 0
    if (data.preco_custo) {
        valor = data.preco_custo.replace('.', '').replace(',', '').replace(/\D/g, '');
        valor /= 100
    }

    function precoBruto(venda) {
        return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(
            parseFloat(venda - valor))
    }// ConvertMoney - fim

    return (<Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-4 mb-4 rounded">
            <Typography variant="h6">Informações do Pedido</Typography>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Pedido" {...a11yProps(0)} />
                        <Tab label="Cliente" {...a11yProps(1)} />
                        <Tab label="Imagens/Arquivos" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Row>
                        <Col>
                            <Typography><b>ID:</b> #{pedido.id}</Typography>
                            <Typography><b>Consultor:</b> {pedido.nome}</Typography>
                            <Typography><b>Cliente:</b> {pedido.cliente}</Typography>
                            <Typography><b>Fornecedor:</b> {pedido.fornecedor}</Typography>
                            <Typography><b>Valor:</b> {pedido.preco}</Typography>
                            <Typography className="mt-3"><b>Mais informações:</b> {pedido.info_pedido}</Typography>
                        </Col>
                        <Col>
                            <Paper className={"p-3"} elevation={1}>
                                <Typography variant={"body1"}>Orçamento:</Typography>
                                {img.url_orcamento && (<img alt="" src={"/storage/" + img.url_orcamento}/>)}
                            </Paper>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Row className={"mb-4"}>
                        <Col>
                            <Typography><b>Nome:</b> {cliente.nome}</Typography>
                            <Typography><b>Data Nascimento:</b> {cliente.data_nascimento}</Typography>
                            <Typography><b>Razão Social:</b> {cliente.razao_social}</Typography>
                            <Typography><b>RG:</b> {cliente.rg}</Typography>
                            <Typography><b>CPF:</b> {cliente.cpf}</Typography>
                            <Typography><b>Telefone:</b> {cliente.telefone}</Typography>
                            <Typography><b>Endereço:</b> {pedido.endereco}</Typography>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={2}>
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
                </TabPanel>
            </Box>
        </Container>
        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <form onSubmit={submit}>
                <Row>
                    <Col className={"mb-4"} lg={"4"}>
                        <Typography variant={"body1"}>Preço de Venda: {pedido.preco}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className={"mb-4"} lg={"4"}>
                        <TextFieldMoney required
                                        label="Preço Custo" value={data.preco_custo}
                                        setData={setData} index="preco_custo"></TextFieldMoney>
                    </Col>
                </Row>
                <Row>
                    <Col className={"mb-3"} lg={"4"}>
                        <Typography>Preço Bruto: R$ {precoBruto(pedido.preco_float)}</Typography>
                    </Col>
                </Row>
                <Button className={"mt-3"} color={"primary"}>Aprovar Pedido</Button>
            </form>
        </Container>
    </Layout>);
}
