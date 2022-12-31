import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "@mui/material";
import {useForm} from '@inertiajs/inertia-react'

const pages = [
    {'title': 'Pedidos', 'url': route('admin.pedidos.index')},
    {'title': 'Leads', 'url': route('admin.leads.create')},
    {'title': 'Usuários', 'url': route('admin.usuarios.usuario.index')},
    {'title': 'SAC', 'url': route('admin.chamados.index')},
    {'title': 'Forncecedores', 'url': route('admin.fornecedores.index')},
];

const logo = "/storage/crm/imagens/logo_ams.png";

const settings = []

function pageCurrent(url) {
    if (url === window.location.href) {
        return {mx: 1, color: '#fe3c00', display: 'block',};
    }
    return {mx: 1, color: 'white', display: 'block',}
}

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const {post} = useForm();

    function submit(e) {
        e.preventDefault()
        post(route('logout'));
    }

    return (
        <AppBar position="static" style={{"backgroundColor": "#252525"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/" sx={{display: {xs: 'none', md: 'flex'}}}>
                        <img alt="logo" src={logo} style={{height: 40, margin: 5}}></img>
                    </Link>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none',}
                            }}
                        >
                            {pages.map(({title, url}) => (
                                <MenuItem key={title} onClick={handleCloseNavMenu} style={{backgroundColor: '#252525'}}>
                                    <Button href={url} sx={pageCurrent(url)}>
                                        {title}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link href="/" sx={{display: {xs: 'flex', md: 'none'}, flexGrow: 1}}>
                        <img alt="logo" src={logo} style={{width: 100, margin: 15}}></img>
                    </Link>

                    {/*MENU HORIZONTAL*/}
                    <Box className="text-center" sx={{flexGrow: 1, ml: 3, display: {xs: 'none', md: 'flex'}}}>
                        {
                            pages.map(({title, url}) => (
                                <Button key={title} href={url} variant="text" sx={pageCurrent(url)}>
                                    {title}
                                </Button>
                            ))}
                    </Box>

                    {/*Menu user*/}
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar src=""/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(({title, url}, i) => (
                                <Typography key={i} color={"black"} variant={"inherit"} component={"a"} href={url}>
                                    <MenuItem key={i} onClick={handleCloseUserMenu}>
                                        {title}
                                    </MenuItem>
                                </Typography>
                            ))}
                            <form onSubmit={submit} style={{minWidth: 150}}>
                                <Typography style={{width: '100%'}} color={"black"} variant={"inherit"} type={"submit"}
                                            component={"button"}>
                                    <MenuItem key={"Sair"} onClick={handleCloseUserMenu}>
                                        Sair
                                    </MenuItem>
                                </Typography>
                            </form>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
