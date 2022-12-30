import Alert from "@mui/material/Alert";
import React from "react";

export default function AlertsCard({dados}) {
    return (
        <>
            {dados.prazo_atrasado && <Alert severity='error' className='mb-2'>Pedido com Atrasos</Alert>}
            {dados.alerta && <Alert severity='warning' className='mb-2'>{dados.alerta}</Alert>}
        </>
    )
}
