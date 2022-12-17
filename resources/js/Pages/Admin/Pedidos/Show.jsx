import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ImagePdf from "@/Components/Inputs/ImagePdf";

import Paper from "@mui/material/Paper";

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Pedidos({pedido, cliente, img, historico}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Pedido" {...a11yProps(0)} />
                        <Tab label="Cliente" {...a11yProps(1)} />
                        <Tab label="Documentos" {...a11yProps(2)} />
                        <Tab label="Histórico" {...a11yProps(3)} />
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
                            <Typography className="mt-3"><b>Anotações:</b> {pedido.obs}</Typography>
                        </Col>
                        <Col>
                            <Paper className={"p-3"} elevation={1}>
                                <Typography variant={"body1"}>Orçamento:</Typography>
                                <ImagePdf url={img.url_orcamento}></ImagePdf>
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
                            <Typography><b>Endereço:</b> {cliente.endereco}</Typography>
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
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Row>
                        <Col className={"mb-3"}>
                            <Typography variant={"h6"}>Documentos</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className={"mb-3"}>
                            <Paper className={"p-3"} elevation={1}>
                                <Typography variant={"body1"}>Nota/Boleto</Typography>
                                <ImagePdf url={img.url_boleto}></ImagePdf>
                            </Paper>
                        </Col>
                        <Col lg={4} className={"mb-3"}>
                            <Paper className={"p-3"} elevation={1}>
                                <Typography variant={"body1"}>Comprovante de Pagamento</Typography>
                                <ImagePdf url={img.url_recibo}></ImagePdf>
                            </Paper>
                        </Col>
                        <Col lg={4} className={"mb-3"}>
                            <Paper className={"p-3"} elevation={1}>
                                <Typography variant={"body1"}>Nota Fiscal</Typography>
                                <ImagePdf url={img.url_nota_fiscal}></ImagePdf>
                            </Paper>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Typography variant="h6" className="mb-3">Histórico do Pedido</Typography>
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Prazo</th>
                            <th>Status</th>
                            <th>Anotações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {historico.map((dado) => {
                            return (
                                <tr key={dado.id} className={"align-middle"}>
                                    <th scope="row">
                                        {dado.data}
                                    </th>
                                    <td>
                                        {dado.prazo} dias
                                    </td>
                                    <td>
                                        {dado.status}
                                    </td>
                                    <td>
                                        {dado.obs}
                                    </td>
                                </tr>)
                        })}
                        </tbody>
                    </Table>
                </TabPanel>
            </Box>
        </Container>
    </Layout>);
}







