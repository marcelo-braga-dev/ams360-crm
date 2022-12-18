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

import {Row, Col, Form} from 'reactstrap';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';


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
                            PaperProps={{style: {maxHeight: 48 * 4.5, width: '20ch'},}}
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
                    </Col>
                </Row>}
            />
            {/*Conteudo Card*/}
            <Row className={"mx-0"}>
                <Col md="12">
                    <Typography variant="subtitle2" color="text.secondary">
                        Preço: R$ {dados.preco} <br/>
                        Fornecedor: {dados.fornecedor}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {dados.obs}
                    </Typography>
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
                    <Typography variant="body2" component="p">
                        Telefone: {dados.telefone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Email: {dados.email}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
