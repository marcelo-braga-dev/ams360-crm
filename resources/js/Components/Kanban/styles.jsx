import styled from "styled-components";
import {Col, Row} from "reactstrap";

export const Table = styled.table`
    width: 100%;
`;

export function Th({ children, color }) {
    return (
        <th>
            <Row className={color + " m-1 py-2 rounded"}>
                <Col>{ children }</Col>
            </Row>
        </th>
    );
}

export function Td({ children, color }) {
    return (
        <td style={{minWidth: 380, maxWidth: 380}}>
            <Row className={color + " m-2 rounded"} style={{minHeight: 1000}}>
                <Col className={"p-2"}>
                    {children}
                </Col>
            </Row>
        </td>
    );
}
