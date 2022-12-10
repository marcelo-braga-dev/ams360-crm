import Layout from '@/Layouts/Admin/Layout';
import {Button, Card, Col, Container, Row} from "reactstrap";
import Typography from "@mui/material/Typography";
import ConvertMoney from "@/Components/ConvertMoney";
import Paper from "@mui/material/Paper";

import { useForm } from '@inertiajs/inertia-react'



export default function Pedidos({pedido, cliente, img}) {
    const {put} = useForm()
    function submit(e) {
        e.preventDefault()
        put(route('admin.conferencia.show', pedido.id))
    }

    return (
        <Layout titlePage="Pedidos" button={true} url={route('admin.pedidos.index')} textButton={'Voltar'}>

            <Container fluid="lg" className="bg-white px-lg-6 py-lg-5 rounded">
                AGUARDANDO NOTA
            </Container>

        </Layout>);
}
