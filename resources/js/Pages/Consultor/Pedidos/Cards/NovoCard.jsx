import {Inertia} from '@inertiajs/inertia'
import React, {useState} from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Link,
    Menu,
    MenuItem,
    styled
} from '@mui/material';

import {Row, Col, Form, Button} from 'reactstrap';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleRight';
import PersonIcon from '@mui/icons-material/Person';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ITEM_HEIGHT = 48;

//Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

export default function OrcamentoLine1({dados}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Modal
    const [openModal, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    function handleSubmit(e) {
        e.preventDefault()
        handleCloseModal()
        Inertia.put(route('consultor.pedidos.update', dados.id))
    }

    // Mostra Prazo
    function prazo(valor) {
        const danger = () => {
            if (dados.prazo_atrasado) return "text-red-600"
        }

        if (valor) {
            return (<Typography variant="caption" component={"p"} className={danger()}>
                Prazo: {dados.prazo} ({dados.prazoDias} dias) {}
            </Typography>)
        }
    }

    // Mostra Prazo - fim

    return (
        <Card sx={{margin: 1}}>
            <CardHeader
                action={
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{'aria-labelledby': 'long-button',}}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5, width: '20ch'},}}
                        >
                            <Link href={route('consultor.pedidos.show', dados.id)} underline="none" color="inherit">
                                <MenuItem key={dados.id} onClick={handleClose}>
                                    Ver Informações
                                </MenuItem>
                            </Link>
                        </Menu>
                    </div>
                }
                title={<Typography variant="body1"><PersonIcon className="mr-2"></PersonIcon>{dados.cliente}
                </Typography>}
                subheader={<Row>
                    <Col md="12">
                        <Typography variant="caption" component={"p"}>Data: {dados.data}</Typography>
                        {prazo(dados.prazoDias)}
                    </Col>
                </Row>}
            />
            {/*Conteudo Card*/}
            {dados.situacao === 3 && <Alert severity="error" className="mb-2">Revise os Dados do Pedido!</Alert>}
            <Row className={"mx-0"}>
                <Col md="9">
                    <Typography variant="subtitle2" color="text.secondary">
                        Preço: R$ {dados.preco} <br/>
                        Fornecedor: {dados.fornecedor}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {dados.obs}
                    </Typography>
                </Col>
                {/*Abre Modal*/}
                <Col md="3" className="mt-1">
                    {dados.situacao === 0 && <ArrowCircleUpIcon onClick={handleOpenModal} style={{cursor: 'pointer'}}
                                                                fontSize={"large"}></ArrowCircleUpIcon>}
                    {dados.situacao === 3 && <Button href={"/"}
                        color={"danger"} size={"sm"}>Revisar</Button>}
                </Col>
            </Row>

            <CardActions disableSpacing>
                <Typography variant="caption" ml={2}>ID: {dados.id}</Typography>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2">
                        Telefone: <br/>
                        Email:
                    </Typography>
                </CardContent>
            </Collapse>

            {/*Modal*/}
            <div>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Enviar Pedido para Conferência
                        </Typography>
                        <Row className={"mt-4"}>
                            <Form onSubmit={handleSubmit}>
                                <Col className={"text-right"}>
                                    <Button onClick={handleCloseModal} type={"button"}>Cancelar</Button>
                                    <Button variant="contained" type={"submit"}>Confirmar</Button>
                                </Col>
                            </Form>
                        </Row>
                    </Box>
                </Modal>
            </div>
        </Card>
    )
}
