import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Money from '@mui/icons-material/AttachMoneyRounded';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import TruckIcon from '@mui/icons-material/LocalShippingOutlined';

import { Alert } from '@mui/material';

export default function CardPedidos({dados, menuMore, btnAvancaStatus, border}) {

    return (
        <div className="shadow bg-white m-2 py-2 px-3 rounded"
            style={{width: 300, borderLeft: '3px solid ' + border}}>

            {/* Nome */}
            <div className='row'>
                <div className='col-10'>
                    <PersonIcon className="mr-1" sx={{ fontSize: 22 }}></PersonIcon>
                    <span>
                        {dados.cliente}
                    </span>
                </div>
                <div className='col-2'>
                    {menuMore}
                </div>
            </div>

            {/* Preco */}
            <div className='row justify-content-between'>
                <div className='col'>
                    <span style={{display: 'block'}}>
                        <Money sx={{ fontSize: 22 }}></Money>
                        R$ {dados.preco}
                    </span>
                    <span>
                        <TruckIcon className='mr-2' sx={{ fontSize: 22 }}></TruckIcon>
                        {dados.fornecedor}
                    </span>
                </div>
                {/* Btn Avanca Status */}
                <div className='col-auto pt-4 text-right'>
                    {btnAvancaStatus}
                </div>
            </div>

            {/* Pills */}
            <Stack className='py-2' direction="row" spacing={1}>
                {dados.sac ? <Chip icon={<SpeakerNotesIcon className='ml-2' />} label="SAC" color="warning"  size="small" /> : ''}
            </Stack>

            <div className='row'>
                {/* Alerts */}
            {dados.alerta && <Alert severity='warning' className='mb-2'>{dados.alerta}</Alert>}
            </div>

            {/* Datas */}
            <div className='row border-top justify-content-between'>
                <div className='col-auto'>
                    <CalendarMonthIcon sx={{ fontSize: 16 }} className='mr-1'></CalendarMonthIcon>
                    <span style={{fontSize: 11}}>
                    {dados.data}
                    </span>
                </div>
                <div className='col-auto'>
                    <AlarmOutlinedIcon sx={{ fontSize: 16 }} className='mr-1'></AlarmOutlinedIcon>
                    <span style={{fontSize: 11}}>
                    {dados.prazo}
                    </span>
                </div>
            </div>
        </div>
    )
}
