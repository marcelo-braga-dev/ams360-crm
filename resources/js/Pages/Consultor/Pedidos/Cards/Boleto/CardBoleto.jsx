import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';
import AlertsCard from "./AlertsCard";

export default function CardBoleto({dados}) {

    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id}/>}
        alerts={<AlertsCard dados={dados}/>}
        border="#11cdef"/> )
}
