import Layout from '@/Layouts/Consultor/Layout';
import {Inertia} from '@inertiajs/inertia'

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form, Button} from 'reactstrap';

import {
    FormControl,
    FormLabel,
    InputAdornment,
    InputLabel,
    OutlinedInput, Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import InputMask from "react-input-mask";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";
import ImagePdf from "@/Components/Inputs/ImagePdf";


export default function Edit({pedido, cliente, img}) {
    const {errors} = usePage().props;

    const {data, setData, progress} = useForm({
        pessoa: cliente.nome ? 'Pessoa Física' : 'Jurídica',
        nome: cliente.nome,
        razao_social: cliente.razao_social,
        nascimento: cliente.data_nascimento,
        rg: cliente.rg,
        cpf: cliente.cpf,
        cnpj: cliente.cnpj,
        telefone: cliente.telefone,
        email: cliente.email,
        endereco: cliente.endereco,
        file_rg: img.url_rg,
        file_cpf: img.url_cpf,
        file_cnh: img.url_cnh,
        file_cartao_cnpj: img.url_cnpj,
        file_comprovante_residencia: img.url_comprovante_residencia,
        preco: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 })
            .format(pedido.preco_venda),
        fornecedor: pedido.fornecedor,
        file_orcamento: img.url_orcamento,
        obs: pedido.info_pedido,
        forma_pagamento: pedido.forma_pagamento
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('consultor.novo.update', pedido.id), {
            _method: 'put',
            ...data
        })
    }

    function checked(label, value) {
        if (label === value) return <FormControlLabel
            value={label} checked control={<Radio id="pessoa"/>} label={label}/>;
        return <FormControlLabel value={label} control={<Radio id="pessoa"/>} label={label}/>;
    }

    return (<Layout titlePage="Pedidos">

            <Form onSubmit={submit}>
                {/*Info Cliente*/}
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                    {/*Info Cliente*/}
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
                                       mask="99.999.999-*" value={data.rg}
                                       onChange={e => setData('rg', e.target.value)}>
                                {() => <TextField label={'RG'} fullWidth/>}
                            </InputMask>
                        </Col>)}
                        {data.pessoa === 'Pessoa Física' && (<Col className={"mb-3"} lg={"4"}>
                            <InputMask maskChar=''
                                       mask="999.999.999-99" value={data.cpf}
                                       onChange={e => setData('cpf', e.target.value)}>
                                {() => <TextField label={'CPF'} fullWidth/>}
                            </InputMask>
                        </Col>)}
                        {data.pessoa === 'Jurídica' && (<Col className={"mb-3"} lg={"4"}>
                            <InputMask maskChar=''
                                       mask="99.999.999/9999-99" value={data.cnpj}
                                       onChange={e => setData('cnpj', e.target.value)}>
                                {() => <TextField label={'CNPJ'} fullWidth/>}
                            </InputMask>
                        </Col>)}
                    </Row>
                    <Row>
                        <Col className={"mb-3"} lg={"4"}>
                            <TextField label="Data Nascimento" id="nascimento" value={data.nascimento}
                                       onBlur={e => setData('nascimento', e.target.value)} type={'date'}
                                       fullWidth focused></TextField>
                        </Col>
                        <Col className={"mb-3"} lg={"4"}>
                            <InputMask maskChar=''
                                       mask="(99) 9999-9999" value={data.telefone}
                                       onChange={e => setData('telefone', e.target.value)}>
                                {() => <TextField label={'Telefone'} fullWidth/>}
                            </InputMask>
                        </Col>
                        <Col>
                            <TextField label="Email" value={data.email} type="email"
                                       onChange={e => setData('email', e.target.value)} fullWidth>
                            </TextField>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField label="Endereço" id="endereco" value={data.endereco}
                                       onChange={e => setData('endereco', e.target.value)}
                                       fullWidth></TextField>
                        </Col>
                    </Row>
                </Container>
                {/*Documentos*/}
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 mb-4">
                    <Row className={"mt-4"}>
                        {data.pessoa === 'Pessoa Física' && (
                            <Col className={"mb-3"} lg={"4"}>
                                <ImagePdf url={data.file_rg}></ImagePdf>
                                <FormControl fullWidth>
                                    <InputLabel>RG</InputLabel>
                                    <OutlinedInput
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount" type="file" id="file_rg"
                                        onChange={e => setData('file_rg', e.target.files[0])}
                                    />
                                </FormControl>
                            </Col>
                        )}
                        {data.pessoa === 'Pessoa Física' && (
                            <Col className={"mb-3"} lg={"4"}>
                                <ImagePdf url={data.file_cpf}></ImagePdf>
                                <FormControl fullWidth>
                                    <InputLabel>CPF</InputLabel>
                                    <OutlinedInput
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount" type="file" id="file_cpf"
                                        onChange={e => setData('file_cpf', e.target.files[0])}
                                    />
                                </FormControl>
                            </Col>
                        )}
                        {data.pessoa === 'Pessoa Física' && (
                            <Col className={"mb-3"} lg={"4"}>
                                <ImagePdf url={data.file_cnh}></ImagePdf>
                                <FormControl fullWidth>
                                    <InputLabel>CNH</InputLabel>
                                    <OutlinedInput
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount" type="file" id="file_cnh"
                                        onChange={e => setData('file_cnh', e.target.files[0])}
                                    />
                                </FormControl>
                            </Col>
                        )}
                    </Row>
                    <Row className={"mb-3"}>
                        {data.pessoa === 'Jurídica' && (
                            <Col className={"mb-3"} lg={"6"}>
                                <ImagePdf url={data.file_cartao_cnpj}></ImagePdf>
                                <FormControl fullWidth>
                                    <InputLabel>Cartão CNPJ</InputLabel>
                                    <OutlinedInput
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount" type="file" id="file_cartao_cnpj"
                                        onChange={e => setData('file_cartao_cnpj', e.target.files[0])}
                                    />
                                </FormControl>
                            </Col>
                        )}
                        <Col className={"mb-3"} lg={"6"}>
                            <div>
                                <ImagePdf url={data.file_comprovante_residencia}></ImagePdf>
                            </div>

                            <FormControl fullWidth>
                                <InputLabel>Comprovante Residencia</InputLabel>
                                <OutlinedInput
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                    label="Amount" type="file" id="file_comprovante_residencia"
                                    onChange={e => setData('file_comprovante_residencia', e.target.files[0])}
                                />
                            </FormControl>
                        </Col>
                    </Row>
                </Container>
                {/*Pedido*/}
                <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                    <Row className={"my-4"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <TextFieldMoney label="Preço" value={data.preco} setData={setData} index="preco"></TextFieldMoney>
                        </Col>
                        <Col className={"mb-3 text-red-600 text-right"} lg={"6"}>
                            <TextField label="Fornecedor" fullWidth value={data.fornecedor} prefix={"x"}
                                       onChange={e => setData('fornecedor', e.target.value)}></TextField></Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col className={"mb-3"} lg={"6"}>
                            <ImagePdf url={data.file_orcamento}></ImagePdf>
                            <FormControl fullWidth>
                                <InputLabel>Orçamento</InputLabel>
                                <OutlinedInput
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                    label="Amount" type="file" id="file_orcamento"
                                    onChange={e => setData('file_orcamento', e.target.files[0])}/>
                            </FormControl>
                        </Col>
                    </Row>
                    <Row className={"mt-4"}>
                        <Col>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Formas de Pagamento</FormLabel>
                                <RadioGroup
                                    row aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group" onChange={e => setData('forma_pagamento', e.target.value)}>
                                    {checked("À Vista", data.forma_pagamento)}
                                    {checked("Financiamento", data.forma_pagamento)}
                                    {checked("Boleto", data.forma_pagamento)}
                                </RadioGroup>
                            </FormControl>
                        </Col>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col className={"mb-3"} lg={"12"}>
                            <TextField
                                label="Anotações" multiline
                                rows={4} fullWidth id="obs" value={data.obs} onChange={e => setData('obs', e.target.value)}
                            /></Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button type="submit" color="primary">Atualizar Informações</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>

        </Layout>
    )
}

