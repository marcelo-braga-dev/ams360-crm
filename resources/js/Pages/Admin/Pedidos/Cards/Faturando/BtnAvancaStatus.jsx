import DoubleArrowIcon from '@mui/icons-material/DoubleArrowRounded';
import {Button} from "reactstrap";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleRight";
import {Link} from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/DownloadRounded";

export default function BtnAvancaStatus({dados}) {
    return (
        <a href={route('admin.aguardando-faturamento.show', dados.id)}>
            {dados.situacao === 0 &&
                <button className="btn btn-danger btn-sm">
                    <DownloadIcon></DownloadIcon>
                    Boleto/Nota
                </button>
            }
            {dados.situacao === 1 &&
                <DoubleArrowIcon
                    className='shadow border-2 p-0 rounded-circle'
                    color='success'
                    sx={{fontSize: 32}}/>
            }
        </a>
    )
}
