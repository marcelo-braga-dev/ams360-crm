import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';

export default function CardBoleto({dados}) {

    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id}/>}
        border="#11cdef"/> )
}
