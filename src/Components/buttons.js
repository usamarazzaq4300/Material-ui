import { Button } from "@material-ui/core"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import { useState } from "react"

function Buttons() {
    const [color, setColor] = useState("primary")
    const [btnDisable, setBtnDisable] = useState(false)
    const ChangeColor = () => {
        // setColor("secondary")
        setBtnDisable(true)
    }
    return (
        <div>
            <h1>Material-UI Buttons</h1>
            &nbsp;<Button onClick={ChangeColor} variant="outlined" color={color} disabled={btnDisable} size="small">Outlined</Button>
            &nbsp;<Button variant="contained" color="primary" size="medium">Contained</Button>
            &nbsp;<Button variant="contained" color="primary" disabled size="large" >Contained</Button>
            &nbsp;<Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
            &nbsp;&nbsp;<IconButton aria-label="delete"><AlarmIcon /></IconButton>

            {/* Button Group */}
            <h1>Button Group</h1>
            <ButtonGroup color="primary" variant = "outlined" orientation="vertical">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            </ButtonGroup>

        </div>
    )
}
export default Buttons;