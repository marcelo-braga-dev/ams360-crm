import React from "react";

import EmailIcon from '@mui/icons-material/EmailSharp';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function EmailIconPopover({dados}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        dados.email ?
            (<>
                <button>
                    <EmailIcon className="mx-1" aria-describedby={id}
                              variant="contained" onClick={handleClick}/>
                </button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{p: 2}}>{dados.email}</Typography>
                </Popover></>) :
            <EmailIcon className="mx-1" color="disabled" variant="contained"/>
    )
}
