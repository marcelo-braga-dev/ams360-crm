import {Button} from "reactstrap";

export default function SubMenuNav({buttons}) {
    return buttons.map(({title, url}, i) => (
            <Button key={i} color="dark" size="sm" href={url}>
                {title}
            </Button>
        )
    )
}
