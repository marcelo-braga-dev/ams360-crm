import {Col, Row} from "reactstrap";
import {
    FormControl,
    FormLabel,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextFieldMoney from "@/Components/Inputs/TextFieldMoney";

export default function Pedido({setData, data, requireds}) {

    requireds(data.preco && data.fornecedor && data.forma_pagamento);

    function checked(label, value) {
        if (label === value) return <FormControlLabel value={label} checked control={<Radio id="forma_pagamento"/>}
                                                      label={label}/>;
        return <FormControlLabel value={label} control={<Radio id="forma_pagamento"/>} label={label}/>;
    }

    return <Box>
        <Row className={"my-4"}>
            <Col className={"mb-3"} lg={"6"}>
                <TextFieldMoney label="Preço" value={data.preco} setData={setData} index="preco"></TextFieldMoney>
            </Col>
            <Col className={"mb-3 text-red-600 text-right"} lg={"6"}>
                <TextField label="Fornecedor" fullWidth value={data.fornecedor} prefix={"x"}
                           onChange={e => setData('fornecedor', e.target.value)}></TextField></Col>
        </Row>
        <Row className={"mb-3"}>
            <Col className={"mb-3"} lg={"6"}>
                <FormControl fullWidth>
                    <InputLabel>Orçamento</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        label="Amount" type="file" id="file_orcamento"
                        onChange={e => setData('file_orcamento', e.target.files[0])}/>
                </FormControl>
            </Col>
        </Row>
        <Row className={"mt-4"}>
            <Col>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Formas de Pagamento</FormLabel>
                    <RadioGroup
                        row aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" onChange={e => setData('forma_pagamento', e.target.value)}>
                        {checked("À Vista", data.forma_pagamento)}
                        {checked("Financiamento", data.forma_pagamento)}
                        {checked("Boleto", data.forma_pagamento)}
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
        <Row className={"mb-3"}>
            <Col className={"mb-3"} lg={"12"}>
                <TextField
                    label="Anotações" multiline
                    rows={4} fullWidth id="obs" value={data.obs} onChange={e => setData('obs', e.target.value)}
                /></Col>
        </Row>
    </Box>
}
