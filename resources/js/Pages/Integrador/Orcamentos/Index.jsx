import IntegradorLayout from '@/Layouts/Consultor/IntegradorLayout';
import {Head} from '@inertiajs/inertia-react';

import {Table} from './Styles';
import * as React from 'react';
import {Container} from 'reactstrap';
import NovoCard from './Cards/NovoCard';

export default function Dashboard(props) {
    return (
        <IntegradorLayout
            auth={props.auth}
            errors={props.errors}
            titlePage="Orçamentos">
            <Head title="Orçamentos"></Head>

            <Container fluid>
                <div className="overflow-x-auto pb-6">
                    <Table>
                        <thead>
                        <tr className={"text-center text-white"}>
                            <th className="p-3 bg-green-700 text-white">Novo</th>
                            <th className="bg-blue-700 text-white">Em Análise</th>
                            <th className="bg-orange-700 text-white">Finalizado</th>
                            <th className="bg-purple-700 text-white">Finalizado</th>
                            <th>Finalizado</th>
                            <th>Finalizado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="align-top">
                            <td className="bg-green-400">
                                <NovoCard></NovoCard>
                                <NovoCard></NovoCard>
                                <NovoCard></NovoCard>
                            </td>
                            <td className="bg-blue-400">
                                <NovoCard></NovoCard>
                            </td>
                            <td className="bg-orange-400">
                                <NovoCard></NovoCard>
                            </td>
                            <td className="bg-purple-400">
                                <NovoCard></NovoCard>
                            </td>
                            <td>
                                <NovoCard></NovoCard>
                            </td>
                            <td>
                                <NovoCard></NovoCard>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </IntegradorLayout>
    );
}



