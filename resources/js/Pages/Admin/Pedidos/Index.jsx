import React, {useEffect, useState} from "react";
import Layout from '@/Layouts/Admin/Layout';

import DoubleScrollbar from 'react-double-scrollbar/dist/DoubleScrollbar';

import ConferenciaCard from './Cards/Conferencia/ConferenciaCard';
import CardReprovado from './Cards/Reprovado/ReprovadoCard';
import CardLancado from './Cards/Lancado/CardLancado';
import CardBoleto from './Cards/Boleto/CardBoleto';
import CardPagamento from './Cards/Pagamento/CardPagamento';
import CardFaturando from './Cards/Faturando/CardFaturando';
import CardFaturado from './Cards/Faturado/CardFaturado';
import CardEntregue from './Cards/Entregue/CardEntregue';
import CardCancelado from './Cards/Cancelado/CardCancelado';

export default function Pedidos({pedidos}) {

    const submenu = [
        {'title': 'Histórico', 'url': route('admin.pedidos.historico.index')},
        {'title': 'Configurações', 'url': route('admin.config.index')}
    ]

    return (
        <Layout titlePage="Pedidos" subMenu={submenu}>

            {/*Cards*/}
            <div className='container'>
                <div className='row justify-content-around bg-white shadow py-3 rounded'
                     style={{fontSize: 12, fontWeight: 700}}>
                    <div className='col-auto border-end text-danger'>Reprovados: {pedidos.reprovado.length}</div>
                    <div className='col-auto border-end text-warning'>Conferência: {pedidos.conferencia.length}</div>
                    <div className='col-auto border-end text-success'>Lançados: {pedidos.lancado.length}</div>
                    <div className='col-auto border-end text-info'>Aguard. Nota/Boleto: {pedidos.nota.length}</div>
                    <div className='col-auto border-end text-primary'>Aguard.
                        Pagamento: {pedidos.pagamento.length}</div>
                    <div className='col-auto border-end text-pink-600'>Aguard.
                        Faturamento: {pedidos.faturamento.length}</div>
                    <div className='col-auto border-end text-purple-700'>Faturados: {pedidos.faturado.length}</div>
                    <div className='col-auto border-end text-green-700'>Entregues: {pedidos.entregue.length}</div>
                    <div className='col-auto text-black'>Cancelados: {pedidos.cancelado.length}</div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="overflow-x-auto mb-6">
                    <DoubleScrollbar>
                        <table className='mt-2'>
                            <thead>
                            <th>
                                <div className='row bg-danger justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Reprovados</div>
                                    <div className='col-auto'>Qdt: {pedidos.reprovado.length}</div>
                                </div>
                            </th>
                            <th>
                                <div className='row bg-warning justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Conferência</div>
                                    <div className='col-auto'>Qdt: {pedidos.conferencia.length}</div>
                                </div>
                            </th>
                            <th>
                                <div className='row bg-success justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Lançado</div>
                                    <div className='col-auto'>Qdt: {pedidos.lancado.length}</div>
                                </div>
                            </th>
                            <th>
                                <div className='row bg-info justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Aguard. Nota/Boleto</div>
                                    <div className='col-auto'>Qdt: {pedidos.nota.length}</div>
                                </div>
                            </th>
                            <th>
                                <div className='row bg-primary justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Aguard. Pagamento</div>
                                    <div className='col-auto'>Qdt: {pedidos.pagamento.length}</div>
                                </div>
                            </th>
                            <th>
                                <div
                                    className='row bg-pink-600 justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Aguard. Faturamento</div>
                                    <div className='col-auto'>Qdt: {pedidos.faturamento.length}</div>
                                </div>
                            </th>
                            <th>
                                <div
                                    className='row bg-purple-700 justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Faturado</div>
                                    <div className='col-auto'>Qdt: {pedidos.faturado.length}</div>
                                </div>
                            </th>
                            <th>
                                <div
                                    className='row bg-green-700 justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Entregue</div>
                                    <div className='col-auto'>Qdt: {pedidos.entregue.length}</div>
                                </div>
                            </th>
                            <th>
                                <div className='row bg-black justify-content-between rounded-top text-white mx-1 p-2'>
                                    <div className='col-auto'>Cancelados</div>
                                    <div className='col-auto'>Qdt: {pedidos.cancelado.length}</div>
                                </div>
                            </th>
                            </thead>
                            <tbody>
                            <tr className="align-top">
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.reprovado.map((dados) => {
                                        return (<CardReprovado key={dados.id} dados={dados}/>)
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.conferencia.map((dados) => {
                                        return (<ConferenciaCard key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.lancado.map((dados) => {
                                        return (<CardLancado key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.nota.map((dados) => {
                                        return (<CardBoleto key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.pagamento.map((dados) => {
                                        return (<CardPagamento key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.faturamento.map((dados) => {
                                        return (<CardFaturando key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.faturado.map((dados) => {
                                        return (<CardFaturado key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.entregue.map((dados) => {
                                        return (<CardEntregue key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                                <td className='shadow-sm' style={{minWidth: 300}}>
                                    {pedidos.cancelado.map((dados) => {
                                        return (<CardCancelado key={dados.id} dados={dados}/>
                                        )
                                    })}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </DoubleScrollbar>
                </div>
            </div>
            {/*Cards - fim*/}
        </Layout>
    );
}
