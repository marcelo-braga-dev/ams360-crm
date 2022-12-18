import IntegradorLayout from '@/Layouts/Consultor/Layout';

import React, {useState} from 'react';
import {Table, Th, Td} from "@/Components/Kanban/styles";
import {Container, Row} from 'reactstrap';
import NovoCard from './Cards/NovoCard';
import Conferencia from './Cards/ConferenciaCard';
import LancadoCard from "./Cards/LancadoCard";
import AguardandoNotaCard from "./Cards/AguardandoNotaCard";
import AguardandoPagamentoCard from "./Cards/AguardandoPagamentoCard";
import AguardandoFaturamentoCard from "./Cards/AguardandoFaturamentoCard";
import EntregueCard from "./Cards/EntregueCard";

import DoubleScrollbar from 'react-double-scrollbar/dist/DoubleScrollbar';

export default function Dashboard({auth, errors, pedidos, clientes}) {
    return (
        <IntegradorLayout
            auth={auth}
            errors={errors}
            titlePage="Pedidos"
            button={true}
            url={route('consultor.pedidos.create')} textButton={'Cadastrar Pedido'}>

            <Container fluid>
                <div className="overflow-x-auto">
                    <DoubleScrollbar>
                            <Table className={"mt-2"}>
                                <thead>
                                <tr className={"text-center text-white"}>
                                    <Th color="bg-yellow-500">Pedidos em Aberto</Th>
                                    <Th color="bg-blue-700">Para Coferência</Th>
                                    <Th color="bg-green-700">Lançado</Th>
                                    <Th color="bg-yellow-600">Aguardando Nota/Boleto</Th>
                                    <Th color="bg-orange-600">Aguadando Pagamento</Th>
                                    <Th color="bg-purple-700">Aguardando Faturamento</Th>
                                    <Th color="bg-pink-700">Faturado</Th>
                                    <Th color="bg-gray-700">Entregue</Th>
                                    <Th color="bg-black">Cancelados</Th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="align-top">
                                    <Td color="bg-yellow-300">
                                        {pedidos.novo.map((dados) => {
                                                return (
                                                    <NovoCard key={dados.id} dados={dados}></NovoCard>
                                                )
                                            }
                                        )}
                                    </Td>
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
                                                    <AguardandoPagamentoCard key={dados.id}
                                                                             dados={dados}></AguardandoPagamentoCard>
                                                )
                                            }
                                        )}
                                    </Td>
                                    <Td color="bg-purple-400">
                                        {pedidos.faturamento.map((dados) => {
                                                return (
                                                    <AguardandoFaturamentoCard key={dados.id} dados={dados}>
                                                    </AguardandoFaturamentoCard>
                                                )
                                            }
                                        )}
                                    </Td>
                                    <Td color="bg-pink-500">
                                        {pedidos.faturado.map((dados) => {
                                                return (
                                                    <AguardandoFaturamentoCard key={dados.id} dados={dados}>
                                                    </AguardandoFaturamentoCard>
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
                                    <Td color="bg-black">
                                        {pedidos.cancelado.map((dados) => {
                                                return (
                                                    <EntregueCard key={dados.id} dados={dados}></EntregueCard>
                                                )
                                            }
                                        )}
                                    </Td>
                                </tr>
                                </tbody>
                            </Table>
                    </DoubleScrollbar>
                </div>
            </Container>
        </IntegradorLayout>
    )

}












