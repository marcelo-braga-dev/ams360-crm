import IntegradorLayout from '@/Layouts/Consultor/Layout';

import React, {useState} from 'react';
import {Table, Th, Td} from "@/Components/Kanban/styles";
import {Container, Row} from 'reactstrap';
import NovoCard from './Cards/NovoCard';
import Conferencia from './Cards/ConferenciaCard';

export default function Dashboard({auth, errors, pedidos, clientes}) {

    return (
        <IntegradorLayout
            auth={auth}
            errors={errors}
            titlePage="Pedidos"
            button={true}
            url={route('consultor.pedidos.create')} textButton={'Cadastrar Pedido'}>

            <Container fluid>
                <div className="overflow-x-auto pb-6">
                    <Table>
                        <thead>
                        <tr className={"text-center text-white"}>
                            <Th color="bg-yellow-500">Pedidos em Aberto</Th>
                            <Th color="bg-blue-700">Coferência</Th>
                            <Th color="bg-green-700">Lançado</Th>
                            <Th color="bg-gray-500">Aguardando Nota/Boleto</Th>
                            <Th color="bg-blue-700">Aguadando Pagamento</Th>
                            <Th color="bg-blue-700">Aguardando Faturamento</Th>
                            <Th color="bg-blue-700">Entregue</Th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="align-top">
                            <Td color="bg-yellow-300">
                                {pedidos.novo.map((dados) => {
                                        return (
                                            <NovoCard nome={clientes[dados.id].nome} dados={dados}></NovoCard>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-blue-400">
                                {pedidos.conferencia.map((dados) => {
                                        return (
                                            <Conferencia nome={clientes[dados.id].nome} dados={dados}></Conferencia>
                                        )
                                    }
                                )}
                            </Td>
                            <Td color="bg-green-400">
                            </Td>
                            <Td color="bg-gray-300">
                            </Td>
                            <Td color="">
                            </Td>
                            <Td color="">
                            </Td>
                            <Td color="">
                            </Td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </IntegradorLayout>
    )

}












