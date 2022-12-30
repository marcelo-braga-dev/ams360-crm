import {Col, Row} from "reactstrap";
import {FormControl, Radio, RadioGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputMask from 'react-input-mask';

import pesquisaCep from '@/Helpers/pesquisaCep';

export default function InfoCliente({setData, data}) {

    return <Box>
        <Row className={"mt-4"}>
            <Col>
                <FormControl>
                    <RadioGroup
                        row aria-labelledby="pessoa" defaultValue="Pessoa Física"
                        name="row-radio-buttons-group" onChange={e => setData('pessoa', e.target.value)}>
                        <FormControlLabel
                            value="Pessoa Física" control={<Radio/>} label="Pessoa Física"/>
                        <FormControlLabel value="Jurídica" control={<Radio/>} label="Jurídica"/>
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
        <Row className={"mt-3"}>
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"6"}>
                <TextField required label="Nome" id="nome" value={data.nome} fullWidth
                           onChange={e => setData('nome', e.target.value)}>

                </TextField>
            </Col>)}
            {data.pessoa === 'Jurídica' && (<Col className={"mb-3"} lg={"6"}>
                <TextField label="Razão Social" id="razao_social" value={data.razao_social} required
                           onChange={e => setData('razao_social', e.target.value)} fullWidth>
                </TextField>
            </Col>)}
        </Row>
        <Row>
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="99.999.999-*" value={data.rg} onChange={e => setData('rg', e.target.value)}>
                    {() => <TextField label={'RG'} required fullWidth/>}
                </InputMask>
            </Col>)}
            {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="999.999.999-99" value={data.cpf} onChange={e => setData('cpf', e.target.value)}>
                    {() => <TextField label={'CPF'} required fullWidth/>}
                </InputMask>
            </Col>)}
            {data.pessoa === 'Jurídica' && (<Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="99.999.999/9999-99" value={data.cnpj} onChange={e => setData('cnpj', e.target.value)}>
                    {() => <TextField label={'CNPJ'} required fullWidth/>}
                </InputMask>
            </Col>)}
        </Row>
        <Row>
            <Col className={"mb-3"} lg={"4"}>
                <TextField label="Data Nascimento" id="nascimento" required
                           onBlur={e => setData('nascimento', e.target.value)} type={'date'}
                           fullWidth InputLabelProps={{shrink: true}}></TextField>
            </Col>
            <Col className={"mb-3"} lg={"4"}>
                <InputMask maskChar=''
                           mask="(99) 9999-9999" value={data.telefone}
                           onChange={e => setData('telefone', e.target.value)}>
                    {() => <TextField label={'Telefone'} required fullWidth/>}
                </InputMask>
            </Col>
            <Col className="mb-3">
                <TextField label="Email" value={data.email} type="email"
                           onChange={e => setData('email', e.target.value)} fullWidth>
                </TextField>
            </Col>
        </Row>
        <Row>
            <Col className="mb-3 col-6 col-md-2">
                <InputMask maskChar='' mask="99999-999" value={data.cep}
                           onChange={e => setData('cep', e.target.value)}
                           onBlur={e => pesquisaCep(e.target.value)}>
                    {() => <TextField label={'Cep'} InputLabelProps={{shrink: true}} required fullWidth/>}
                </InputMask>
            </Col>
            <Col className="mb-3 col-12 col-md-10">
                <TextField label="Rua/Av." fullWidth required id="rua"
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('rua', e.target.value)}/>
            </Col>
            <Col className="mb-3 col-6 col-md-2">
                <TextField label="Número" fullWidth required
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('numero', e.target.value)}/>
            </Col>
            <Col className="mb-3 col-6 col-md-4">
                <TextField label="Complemento" fullWidth
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('complemento', e.target.value)}/>
            </Col>
            <Col className="mb-3 col-12 col-md-6">
                <TextField label="Bairro" fullWidth required id="bairro"
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('bairro', e.target.value)}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <TextField label="Cidade" fullWidth required id="cidade"
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('cidade', e.target.value)}/>
            </Col>
            <Col>
                <TextField label="Estado" fullWidth required id="estado"
                           InputLabelProps={{shrink: true}}
                           onChange={e => setData('estado', e.target.value)}/>
            </Col>
        </Row>
    </Box>
}
