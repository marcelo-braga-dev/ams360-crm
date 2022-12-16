import {Col, Row} from "reactstrap";
import {FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Box from "@mui/material/Box";

export default function Anexos({setData, data, requireds}) {
    // Verifica Requireds
    let pessoa
    if (data.pessoa === "Pessoa Física") pessoa = data.file_rg && data.file_cpf && data.file_cnh ;
    else pessoa = data.file_cartao_cnpj;

    requireds(pessoa && data.file_comprovante_residencia);
    // Verifica Requireds - fim

    return <Box>
        <Row className={"mt-4"}>
            {data.pessoa === 'Pessoa Física' && (
                <Col className={"mb-3"} lg={"4"}>
                    <FormControl fullWidth>
                        <InputLabel>RG</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount" type="file" id="file_rg"
                            onChange={e => setData('file_rg', e.target.files[0])}
                        />
                    </FormControl>
                </Col>
            )}
            {data.pessoa === 'Pessoa Física' && (
                <Col className={"mb-3"} lg={"4"}>
                    <FormControl fullWidth>
                        <InputLabel>CPF</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount" type="file" id="file_cpf"
                            onChange={e => setData('file_cpf', e.target.files[0])}
                        />
                    </FormControl>
                </Col>
            )}
            {data.pessoa === 'Pessoa Física' && (
                <Col className={"mb-3"} lg={"4"}>
                    <FormControl fullWidth>
                        <InputLabel>CNH</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount" type="file" id="file_cnh"
                            onChange={e => setData('file_cnh', e.target.files[0])}
                        />
                    </FormControl>
                </Col>
            )}
        </Row>
        <Row className={"mb-3"}>
            {data.pessoa === 'Jurídica' && (
                <Col className={"mb-3"} lg={"6"}>
                    <FormControl fullWidth>
                        <InputLabel>Cartão CNPJ</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount" type="file" id="file_cartao_cnpj"
                            onChange={e => setData('file_cartao_cnpj', e.target.files[0])}
                        />
                    </FormControl>
                </Col>
            )}
            <Col className={"mb-3"} lg={"6"}>
                <FormControl fullWidth>
                    <InputLabel>Comprovante Residencia</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Amount" type="file" id="file_comprovante_residencia"
                        onChange={e => setData('file_comprovante_residencia', e.target.files[0])}
                    />
                </FormControl>
            </Col>
        </Row>
    </Box>
}
