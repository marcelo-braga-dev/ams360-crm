import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
    {
        value: 'ativo',
        label: 'Ativo',
    },
    {
        value: 'bloqueado',
        label: 'Bloqueado',
    }
];

export default function Index({consultor, pedidos}) {

    return (<Layout titlePage="Informações do Consultor" button={true} url={route('admin.usuarios.usuario.index')}
                    textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            <Row className={"mb-3"}>
                <Col>
                    <Typography>Nome: {consultor.name}</Typography>
                    <Typography>Email: {consultor.email}</Typography>
                </Col>
                <Col>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Status"
                        defaultValue="ativo"
                        helperText="Status de acesso do usuário"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button className="mx-3" color="primary">Atualizar</Button>
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
