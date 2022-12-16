import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Layout from "@/Layouts/Admin/Layout";
import {Button, Col, Container, Row, Table} from "reactstrap";
import {TextField} from "@mui/material";
import Alert from "@mui/material/Alert";

export default function Register() {
    const { data, setData, post, processing, errors} = useForm({
        nome: '',
        email: '',
        senha: '',
        senha_confirmar: '',
    });console.log(errors);

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.consultores.store'));
    };

    return  (<Layout titlePage="Consultores" button={true} url={route('admin.consultores.index')} textButton={'Voltar'}>

        <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
            {errors.nome && <Alert severity="error" className={"mb-3"}>{errors.nome}</Alert>}
            {errors.senha && <Alert severity="error" className={"mb-3"}>{errors.senha}</Alert>}
            {errors.email && <Alert severity="error" className={"mb-3"}>{errors.email}</Alert>}
            <form onSubmit={submit}>
            <Row className={"mb-3 text-right"}>
                <Col md={"6"}>
                    <TextField label="Nome" id="nome" value={data.nome} required
                               onChange={e => setData('nome', e.target.value)} fullWidth>
                    </TextField>
                </Col>
                <Col md={"6"}>
                    <TextField label="Email" id="email" value={data.email} type={'email'} required
                               onChange={e => setData('email', e.target.value)} fullWidth>
                    </TextField>
                </Col>
            </Row>
            <Row className={"mb-3 text-right"}>
                <Col md={"6"}>
                    <TextField label="Senha" id="senha" value={data.senha} required
                               onChange={e => setData('senha', e.target.value)} fullWidth>
                    </TextField>
                </Col>
                <Col md={"6"}>
                    <TextField label="Confirmar Senha" id="senha_confirmar" value={data.senha_confirmar} required
                               onChange={e => setData('senha_confirmar', e.target.value)} fullWidth>
                    </TextField>
                </Col>
            </Row>
            <Row className={"mb-3 text-right"}>
                <Col className={'text-center mt-4'}>
                    <Button color={"primary"} type={'submit'}>Salvar</Button>
                </Col>
            </Row>
            </form>
        </Container>
    </Layout>);
}