import DoubleArrowIcon from '@mui/icons-material/DoubleArrowRounded';
import DownloadIcon from '@mui/icons-material/DownloadRounded';

export default function BtnAvancaStatus({id, situacao}) {
    return (
        <a href={route('consultor.aguardando-pagamento.show', id)}>
            {situacao === 0 &&
                <a className='btn btn-danger btn-sm text-white'>
                    <DownloadIcon sx={{ fontSize: 17 }}/>
                    Boleto/Nota
                </a>
            }
            {situacao === 1 &&
                    <DoubleArrowIcon
                    className='shadow border-2 p-0 rounded-circle'
                    color='success'
                    sx={{ fontSize: 32 }} />
            }
        </a>
    )
}
