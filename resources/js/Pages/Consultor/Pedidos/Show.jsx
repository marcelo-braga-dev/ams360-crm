import Layout from '@/Layouts/Consultor/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import Typography from "@mui/material/Typography";

export default function Pedidos({pedido, historico}) {

    return (<Layout titlePage="Pedidos" button={true} url={route('consultor.pedidos.index')} textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded mb-4">
            <Typography>Consultor: {pedido.nome}</Typography>
            <Typography>Cliente: {pedido.cliente}</Typography>
            <Typography>Preço: R$ {pedido.preco}</Typography>
            <Typography>Fornecedor: {pedido.fornecedor}</Typography>
        </Container>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <Typography variant="h6" className="mb-3">Histórico</Typography>
            <Table hover responsive>
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Prazo</th>
                    <th>Status</th>
                    <th>Anotações</th>
                    {/*<th>Ação</th>*/}
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
        </Container>
    </Layout>);
}
