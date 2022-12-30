import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';
import BtnAvancaStatus from "./BtnAvancaStatus";
import AlertsCard from "./AlertsCard";

export default function CardPagamento({dados}) {
    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id} />}
        btnAvancaStatus={<BtnAvancaStatus id={dados.id} situacao={dados.situacao} /> }
        alerts={<AlertsCard dados={dados}/>}
        border="#5e72e4"/> )
}
