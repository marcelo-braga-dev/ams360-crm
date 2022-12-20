import {Col, Row} from "reactstrap";
import {
    FormControl,
    FormLabel,
    InputAdornment,
    InputLabel, MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";

export default function Pedido({fornecedores, setData, data}) {

    return <Box>
        <Row className="my-4">
            <Col className="mb-3 col-md-4">
                <TextFieldMoney label="Preço" value={data.preco} setData={setData} index="preco" required/>
            </Col>
            <Col className="mb-3 text-red-600">
                <TextField label="Fornecedor" select fullWidth
                           onChange={e => setData('fornecedor', e.target.value)}>
                    {fornecedores.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.nome}
                        </MenuItem>
                    ))}
                </TextField>

                {/*<TextField label="Fornecedor" fullWidth value={data.fornecedor} required*/}
                {/*           onChange={e => setData('fornecedor', e.target.value)}/>*/}
            </Col>
        </Row>
        <Row className={"mb-3"}>
            <Col className={"mb-3"} lg={"6"}>
                <TextField
                    required type="file" label="Orçamento" InputLabelProps={{shrink: true}}
                    onChange={e => setData('file_orcamento', e.target.files[0])}/>
            </Col>
        </Row>
        <Row className={"mt-4"}>
            <Col>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Formas de Pagamento</FormLabel>
                    <RadioGroup required
                        row aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" onChange={e => setData('forma_pagamento', e.target.value)}>
                        <FormControlLabel value="À Vista" control={<Radio id="forma_pagamento"/>} label="À Vista"/>
                        <FormControlLabel value="Financiamento" control={<Radio id="forma_pagamento"/>} label="Financiamento"/>
                        <FormControlLabel value="Boleto" control={<Radio id="forma_pagamento"/>} label="Boleto"/>
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
        <Row className={"mb-3"}>
            <Col className={"mb-3"} lg={"12"}>
                <TextField
                    label="Anotações" multiline rows={4} fullWidth
                    value={data.obs} onChange={e => setData('obs', e.target.value)}/>
            </Col>
        </Row>
    </Box>
}
