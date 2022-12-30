import DoubleArrowIcon from '@mui/icons-material/DoubleArrowRounded';
import DownloadIcon from '@mui/icons-material/DownloadRounded';

export default function BtnAvancaStatus({id, situacao}) {
    return (
        <>
            {situacao === 1 && (
                <a href={route('admin.aguardando-pagamento.show', id)}>
                    <DoubleArrowIcon
                        className='shadow border-2 p-0 rounded-circle'
                        color='success'
                        sx={{fontSize: 32}}/>
                </a>
            )
            }
        </>

    )
}
