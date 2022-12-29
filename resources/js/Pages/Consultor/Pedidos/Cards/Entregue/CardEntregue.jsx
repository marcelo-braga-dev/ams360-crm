
import CardPedidos from "../CardPedidos";
import MenuMore from './MenuMore';
import BtnAvancaStatus from "./BtnAvancaStatus";



export default function CardEntregue({dados}) {
console.log(dados)
    return ( <CardPedidos
        dados={dados}
        menuMore={<MenuMore id={dados.id}/>}
        border="green"/> )
}
