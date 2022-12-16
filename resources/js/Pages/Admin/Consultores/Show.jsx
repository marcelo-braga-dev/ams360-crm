import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import Typography from "@mui/material/Typography";

export default function Index({consultor, pedidos}) {

    return (<Layout titlePage="Informações do Consultor" button={true} url={route('admin.consultores.index')}
                    textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <Row className={"mb-3"}>
                <Col>
                    <Typography>Nome: {consultor.name}</Typography>
                    <Typography>Email: {consultor.email}</Typography>
                </Col>
            </Row>
        </Container>
        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded mt-4">
            <Row className={"mb-3"}>
                <Col>
                    <Typography variant={"h6"}>Histórico de Pedidos</Typography>
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Cliente</th>
                            <th>Status</th>
                            <th>Cadastrado Dia</th>
                            {/*<th>Ação</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {pedidos.map((colsultor) => {
                            return (
                                <tr key={colsultor.id} className={"align-middle"}>
                                    <th scope="row">
                                        {colsultor.id}
                                    </th>
                                    <td>
                                        {colsultor.cliente}
                                    </td>
                                    <td>
                                        {colsultor.status}
                                    </td>
                                    <td>
                                        {colsultor.data_criacao}
                                    </td>
                                    {/*<td>*/}
                                    {/*    <Button color={"primary"} href={route('admin.consultores.show', colsultor.id)}*/}
                                    {/*            size="sm">Ver</Button>*/}
                                    {/*</td>*/}
                                </tr>)
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </Layout>);
}
