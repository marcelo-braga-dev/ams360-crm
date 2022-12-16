import IntegradorLayout from '@/Layouts/Consultor/Layout';

import React, {useState} from 'react';
import {useForm, usePage} from '@inertiajs/inertia-react';
import {Container, Row, Col, Form} from 'reactstrap';

import InfoCliente from './Partials/InfoCliente';
import Anexos from "./Partials/Anexos";
import Pedidos from "./Partials/Pedido";
import AlertDanger from "./Partials/AlertDanger";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import Modal from '@mui/material/Modal';

//step labels
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Alert from "@mui/material/Alert";

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
// step labels - fim

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Create({auth}) {
    const {errors} = usePage().props;

    const {data, setData, post, progress} = useForm({
        pessoa: 'Pessoa Física',
        nome: null,
        razao_social: null,
        nascimento: null,
        rg: null,
        cpf: null,
        cnpj: null,
        telefone: null,
        endereco: null,
        file_rg: null,
        file_cpf: null,
        file_cnh: null,
        file_cartao_cnpj: null,
        file_comprovante_residencia: null,
        preco: null,
        fornecedor: null,
        file_imagem_pedido: null,
        file_orcamento: null,
        obs: null,
        forma_pagamento: null
    });

    function submit(e) {
        e.preventDefault()
        if (requiredsOk) {
            post(route('consultor.pedidos.store'))
        } else handleOpen()

    }

    //step controls
    const [activeStep, setActiveStep] = React.useState(0);

    // Verifica Requireds
    let requiredsOk;

    function requireds(valor) {
        requiredsOk = valor;
    }

    // Verifica Requireds -fim

    const handleNext = () => {
        if (requiredsOk) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else handleOpen()
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    //step controls - fim

    function inputs(i) {
        switch (i) {
            case 0:
                return <InfoCliente setData={setData} data={data} requireds={requireds}></InfoCliente>;
            case 1:
                return <Anexos setData={setData} data={data} requireds={requireds}></Anexos>;
            case 2:
                return <Pedidos setData={setData} data={data} requireds={requireds}></Pedidos>;
        }
    }

    // MODAL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // MODAL - Fim

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

            {/*MODAL*/}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Alert className="rounded" sx={style} severity="error">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Atenção!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Preencha todos os campos.
                        </Typography>
                    </Alert>
                </Modal>
            </div>
            {/*MODAL - fim*/}
        </IntegradorLayout>
    )
}









