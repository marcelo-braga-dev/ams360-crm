import {Col, Row} from "reactstrap";
import {FormControl, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputMask from 'react-input-mask';
import Alert from "@mui/material/Alert";

export default function InfoCliente({setData, data, requireds}) {
    function checked(label, value) {
        if (label === value) return <FormControlLabel
            value={label} checked control={<Radio id="pessoa"/>} label={label}/>;
        return <FormControlLabel value={label} control={<Radio id="pessoa"/>} label={label}/>;
    }

    // Verifica Requireds
    let pessoa
    if (data.pessoa === "Pessoa Física") pessoa = data.nome && data.rg && data.cpf;
    else pessoa = data.razao_social && data.cnpj;

    requireds(pessoa && data.nascimento !== null && data.nascimento !== '' && data.telefone && data.endereco);
    // Verifica Requireds - fim

    return <Box>
        <Row className={"mt-4"}>
            <Col>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Forma de Pagamento</FormLabel>
                    <RadioGroup
                        row aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" onChange={e => setData('pessoa', e.target.value)}>
                        {checked("Pessoa Física", data.pessoa)}
                        {checked("Jurídica", data.pessoa)}
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
        <Row className={"mt-3"}>
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"6"}>
                <TextField required label="Nome" id="nome" value={data.nome}
                           onChange={e => setData('nome', e.target.value)}
                           fullWidth>
                </TextField>
            </Col>)}
            {data.pessoa === 'Jurídica' && (<Col className={"mb-3"} lg={"6"}>
                <TextField label="Razão Social" id="razao_social" value={data.razao_social}
                           onChange={e => setData('razao_social', e.target.value)} fullWidth>
                </TextField>
            </Col>)}
        </Row>
        <Row>
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="99.999.999-*" value={data.rg} onChange={e => setData('rg', e.target.value)}>
                    {() => <TextField label={'RG'} fullWidth/>}
                </InputMask>
            </Col>)}
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="999.999.999-99" value={data.cpf} onChange={e => setData('cpf', e.target.value)}>
                    {() => <TextField label={'CPF'} fullWidth/>}
                </InputMask>
            </Col>)}
            {data.pessoa === 'Jurídica' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="99.999.999/9999-99" value={data.cnpj} onChange={e => setData('cnpj', e.target.value)}>
                    {() => <TextField label={'CNPJ'} fullWidth/>}
                </InputMask>
            </Col>)}
        </Row>
        <Row>
            <Col className={"mb-3"} lg={"4"}>
                <TextField label="Data Nascimento" id="nascimento" value={data.nascimento}
                           onChange={e => setData('nascimento', e.target.value)} type={'date'}
                           fullWidth focused></TextField>
            </Col>
            <Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="(99) 9999-9999" value={data.telefone}
                           onChange={e => setData('telefone', e.target.value)}>
                    {() => <TextField label={'Telefone'} fullWidth/>}
                </InputMask>
            </Col>
        </Row>
        <Row>
            <Col>
                <TextField label="Endereço" id="endereco" value={data.endereco}
                           onChange={e => setData('endereco', e.target.value)}
                           fullWidth></TextField>
            </Col>
        </Row>
    </Box>;
}
