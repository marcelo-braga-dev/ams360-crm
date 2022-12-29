import DoubleArrowIcon from '@mui/icons-material/DoubleArrowRounded';
import DownloadIcon from '@mui/icons-material/DownloadRounded';

export default function BtnAvancaStatus({id, situacao }) {
    return (
            <a className='btn btn-danger btn-sm text-white'
                href={route('consultor.faturado.show', id)}>
                    <DownloadIcon sx={{ fontSize: 17 }}/>
                    Nota Fiscal
            </a>
    )
}
