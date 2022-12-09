import IntegradorLayout from '@/Layouts/Consultor/IntegradorLayout';

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import InfoCliente from './Partials/InfoCliente';
import Anexos from "./Partials/Anexos";
import Pedidos from "./Partials/Pedido";
import AlertDanger from "./Partials/AlertDanger";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

//step
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';

const steps = [
    {
        label: 'Informações do Cliente',
        description: `Insira as informações do cliente do pedido.`,
    },
    {
        label: 'Anexos - Documentos',
        description: 'Insira os anexos.',
    },
    {
        label: 'Pedido',
        description: `Insira as informações do pedido.`,
    },
];


export default function Create({auth}) {
    const { errors } = usePage().props;

    const { data, setData, post, progress } = useForm({
            nome: "",
            razao_social: "",
            rg: "",
            cpf: "",
            cnpj: "",
            telefone: "",
            endereco: "",
            file_rg: "",
            file_cpf: "",
            file_cnh: "",
            file_cartao_cnpj: "",
            file_comprovante_residencia: "",
            preco: "",
            fornecedor: "",
            file_imagem_pedido: "",
            file_orcamento: "",
            obs: "",
            forma_pagamento: ""
    });
    function submit(e) {
        e.preventDefault()
        post(route('consultor.pedidos.store'))
    }

    //step
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function inputs(i) {
        switch (i) {
            case 0: return <InfoCliente setData={setData} data={data}></InfoCliente>;
            case 1: return <Anexos setData={setData} data={data}></Anexos>;
            case 2: return <Pedidos setData={setData} data={data}></Pedidos>;
        }
    }

    return (
        <IntegradorLayout
            auth={auth}
            errors={errors}
            titlePage="Cadastrar Pedido"
            button={true}
            url={route('consultor.pedidos.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5">
                <AlertDanger errors={errors}></AlertDanger>

                <Box>
                    <Form onSubmit={submit}>
                        <Box>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel>
                                            {step.label}
                                        </StepLabel>
                                        <StepContent>
                                            <Typography>{step.description}</Typography>
                                            {inputs(index)}
                                            <Box sx={{mb: 2}}>
                                                <div>
                                                    <Button
                                                        disabled={index === 0}
                                                        onClick={handleBack}
                                                        sx={{mt: 1, mr: 1}}
                                                    >
                                                        Voltar
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{mt: 1, mr: 1}}
                                                        type={index === steps.length - 1 ? 'submit' : 'button'}
                                                    >
                                                        {index === steps.length - 1 ? 'Finalizar' : 'Avançar'}
                                                    </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{p: 3}}>
                                    <Typography>Todos passos completados</Typography>
                                    <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                                        Reiniciar
                                    </Button>
                                </Paper>
                            )}
                        </Box>
                    </Form>
                </Box>
            </Container>
        </IntegradorLayout>
    )
}









