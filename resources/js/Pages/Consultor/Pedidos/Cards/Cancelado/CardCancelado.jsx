import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';

export default function CardCancelado({dados}) {
    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id}/>}
        border="black"/> )
}
