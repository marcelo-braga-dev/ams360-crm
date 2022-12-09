import {Col, Row} from "reactstrap";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

export default function InfoCliente({setData, data}) {
    return  <Box>
        <Row className={"mt-3"}>
            <Col className={"mb-3"} lg={"6"}>
                <TextField label="Nome" id="nome" value={data.nome} onChange={e => setData('nome', e.target.value)} fullWidth>
                </TextField>
            </Col>
            <Col className={"mb-3"} lg={"6"}>
                <TextField label="Razão Social" id="razao_social" value={data.razao_social}
                           onChange={e => setData('razao_social', e.target.value)} fullWidth>
                </TextField>
            </Col>
        </Row>
        <Row>
            <Col className={"mb-3"} lg={"4"}>
                <TextField label="RG" id="rg" value={data.rg} onChange={e => setData('rg', e.target.value)}
                           fullWidth></TextField></Col>
            <Col className={"mb-3"} lg={"4"}><TextField label="CPF" id="cpf" value={data.cpf}
                                                        onChange={e => setData('cpf', e.target.value)}
                                                        fullWidth></TextField></Col>
            <Col className={"mb-3"} lg={"4"}><TextField label="CNPJ" id="cnpj" value={data.cnpj}
                                                        onChange={e => setData('cnpj', e.target.value)}
                                                        fullWidth></TextField></Col>
        </Row>
        <Row>
            <Col className={"mb-3"} lg={"4"}><TextField label="Telefone" id="telefone" value={data.telefone}
                                                        onChange={e => setData('telefone', e.target.value)}
                                                        fullWidth></TextField></Col>
        </Row>
        <Row>
            <Col><TextField label="Endereço" id="endereco" value={data.endereco} onChange={e => setData('endereco', e.target.value)}
                            fullWidth></TextField></Col>
        </Row>
    </Box>;
}
