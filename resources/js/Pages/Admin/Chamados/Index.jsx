import React, {useEffect, useState} from "react";
import Layout from '@/Layouts/Admin/Layout';
import {Table, Td, Th} from "@/Components/Kanban/styles";
import NovoCard from "./Cards/NovoCard";

import DoubleScrollbar from 'react-double-scrollbar/dist/DoubleScrollbar';

import {Button, Container} from "reactstrap";

export default function Pedidos({chamados}) {

    const submenu = [
        {'title': 'Histórico', 'url': route('admin.pedidos.historico.index')},
        {'title': 'Configurações', 'url': route('admin.config.index')}
    ]

    return (
        <Layout titlePage="Pedidos" subMenu={submenu}>
            <Container fluid>
                <DoubleScrollbar>
                    <Table className={"mt-2"}>
                        <thead>
                        <tr className={"text-center text-white"}>
                            <Th color="bg-blue-700">Para Coferência</Th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="align-top">
                            <Td color="bg-blue-400">
                                {/*{pedidos.conferencia.map((dados) => {*/}
                                {/*        return (*/}
                                {/*            <Conferencia key={dados.id} dados={dados}></Conferencia>*/}
                                {/*        )*/}
                                {/*    }*/}
                                {/*)}*/}
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </DoubleScrollbar>
            </Container>

        </Layout>
    );
}
