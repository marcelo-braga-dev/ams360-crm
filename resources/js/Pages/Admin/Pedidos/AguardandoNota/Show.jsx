import Layout from "@/Layouts/Admin/Layout";
import {Inertia} from '@inertiajs/inertia'
import {useForm} from '@inertiajs/inertia-react';

import {TextField, Typography} from "@mui/material";

export default function Create({pedido}) {
    const {data, setData, progress} = useForm({
        file_nota: ''
    });

    function submit(e) {
        e.preventDefault()
        Inertia.post(route('admin.aguardando-nota.update', pedido.id), {
            _method: 'put', ...data
        })
    }

    return (<Layout titlePage="Pedidos">

            <div className="container bg-white px-lg-6 py-lg-5">
                <form onSubmit={submit}>
                    <Typography variant={"h6"}>Nota do Pedido</Typography>
                    <div className="row">
                        <div className="col">
                            <Typography><b>Consultor:</b> {pedido.nome}</Typography>
                            <Typography><b>Cliente:</b> {pedido.cliente}</Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-3">
                            <TextField
                                type="file" fullWidth required
                                onChange={e => setData('file_nota', e.target.files[0])}>
                            </TextField>
                        </div>
                    </div>

                    <button className="btn btn-primary" type='submit'>
                        Salvar
                    </button>
                </form>
            </div>

        </Layout>)
}
