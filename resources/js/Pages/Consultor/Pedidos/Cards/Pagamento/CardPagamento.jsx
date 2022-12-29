
import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';
import BtnAvancaStatus from "./BtnAvancaStatus";



export default function CardPagamento({dados}) {
console.log(dados)
    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id} />}
        btnAvancaStatus={<BtnAvancaStatus id={dados.id} situacao={dados.situacao} /> }
        border="#5e72e4"/> )
}