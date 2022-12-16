import {InputAdornment, TextField} from "@mui/material";

export default function TextFieldMoney({ label, value, setData, index }) {

    function maskMoney(valor) {
        let value = valor.replace('.', '').replace(',', '').replace(/\D/g, '')
        const options = { minimumFractionDigits: 2 }
        const result = new Intl.NumberFormat('pt-BR', options).format(
            parseFloat(value) / 100
        )
        setData(index, result)
    }

    return (
        <TextField
            label={label} fullWidth
            InputProps={{startAdornment: <InputAdornment position="start">R$</InputAdornment>}}
            value={value}
            onChange={e => maskMoney(e.target.value)}/>
    );
}
