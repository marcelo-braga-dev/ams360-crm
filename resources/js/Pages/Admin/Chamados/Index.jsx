import React from "react";
import Layout from '@/Layouts/Admin/Layout';
import {Table, Td, Th} from "@/Components/Kanban/styles";

// CARDS
import NovoCard from "./Cards/NovoCard";
import AnaliseCard from "./Cards/AnaliseCard";
import FinalizadosCard from "./Cards/FinalizadosCard";
import RespondidosCard from "./Cards/RespondidosCard";
// CARDS - fim

import DoubleScrollbar from 'react-double-scrollbar/dist/DoubleScrollbar';

import {Container} from "reactstrap";

export default function Pedidos({chamados}) {

    const submenu = [
        // {'title': 'Histórico', 'url': route('admin.pedidos.historico.index')},
        // {'title': 'Configurações', 'url': route('admin.config.index')}
    ]

    return (
        <Layout titlePage="SAC" subMenu={submenu}>
            <Container fluid>
                <DoubleScrollbar>
                    <Table className={"my-2"}>
                        <thead>
                        <tr className={"text-center text-white"}>
                            <Th color="bg-green-700">Em Aberto</Th>
                            <Th color="bg-orange-700">Em Andamento</Th>
                            <Th color="bg-black">Finalizados</Th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="align-top">
                            <Td color="bg-green-400">
                                {chamados.novo.map((dados) => {
                                    return <NovoCard key={dados.id} dados={dados}></NovoCard>
                                })}
                            </Td>
                            <Td color="bg-orange-400">
                                {chamados.respondido.map((dados) => {
                                    return <RespondidosCard key={dados.id} dados={dados}></RespondidosCard>
                                })}
                            </Td>
                            <Td color="bg-black">
                                {chamados.finalizado.map((dados) => {
                                    return <FinalizadosCard key={dados.id} dados={dados}></FinalizadosCard>
                                })}
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </DoubleScrollbar>
            </Container>

        </Layout>
    );
}
