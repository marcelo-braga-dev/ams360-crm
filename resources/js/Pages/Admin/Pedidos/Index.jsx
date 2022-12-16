import React, {useEffect, useState} from "react";
import Layout from '@/Layouts/Admin/Layout';
import {Table, Td, Th} from "@/Components/Kanban/styles";
import Conferencia from "./Cards/ConferenciaCard";
import LancadoCard from "./Cards/LancadoCard";
import AguardandoNotaCard from "./Cards/AguardandoNotaCard";
import AguardandoPagamentoCard from "./Cards/AguardandoPagamentoCard";
import AguardandoFaturamentoCard from "./Cards/AguardandoFaturamentoCard";
import Faturado from "./Cards/FaturadoCard"
import EntregueCard from "./Cards/EntregueCard";

import {Button, Container} from "reactstrap";

export default function Pedidos({pedidos}) {

    const submenu = [
        {'title': 'Histórico', 'url': route('admin.pedidos.historico.index')},
        {'title': 'Configurações', 'url': route('admin.config.index')}
    ]

    return (
        <Layout titlePage="Pedidos" subMenu={submenu}>
            <Container fluid>
                <div className="overflow-x-auto pb-6">
                    <Table>
                        <thead>
                        <tr className={"text-center text-white"}>
                            <Th color="bg-blue-700">Para Coferência</Th>
                            <Th color="bg-green-700">Lançamento</Th>
                            <Th color="bg-yellow-600">Aguardando Nota/Boleto</Th>
                            <Th color="bg-orange-600">Aguadando Pagamento</Th>
                            <Th color="bg-purple-700">Aguardando Faturamento</Th>
                            <Th color="bg-black">Faturado/Aguardando Entrega</Th>
                            <Th color="bg-gray-700">Entregue</Th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="align-top">
                            <Td color="bg-blue-400">
                                {pedidos.conferencia.map((dados) => {
                                        return (
                                            <Conferencia key={dados.id} dados={dados}></Conferencia>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-green-400">
                                {pedidos.lancado.map((dados) => {
                                        return (
                                            <LancadoCard key={dados.id} dados={dados}></LancadoCard>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-yellow-300">
                                {pedidos.nota.map((dados) => {
                                        return (
                                            <AguardandoNotaCard key={dados.id} dados={dados}></AguardandoNotaCard>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-orange-400">
                                {pedidos.pagamento.map((dados) => {
                                        return (
                                            <AguardandoPagamentoCard key={dados.id} dados={dados}></AguardandoPagamentoCard>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-purple-400">
                                {pedidos.faturamento.map((dados) => {
                                        return (
                                            <AguardandoFaturamentoCard key={dados.id}
                                                                       dados={dados}></AguardandoFaturamentoCard>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-black">
                                {pedidos.faturado.map((dados) => {
                                        return (
                                            <Faturado key={dados.id} dados={dados}></Faturado>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-gray-400">
                                {pedidos.entregue.map((dados) => {
                                        return (
                                            <EntregueCard key={dados.id} dados={dados}></EntregueCard>
                                        )
                                    }
                                )}
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>

        </Layout>
    );
}
