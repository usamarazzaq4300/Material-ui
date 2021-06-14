import {Checkbox} from "@material-ui/core"
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
function Check()
{
    function GetValue(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <Checkbox color="secondary" value="Usama" onChange={(e)=>GetValue(e)}/>
            <Checkbox color="secondary" value="Noman" onChange={(e)=>GetValue(e)}/>
            <Checkbox color="secondary" value="Usman" onChange={(e)=>GetValue(e)}/>
            <Checkbox color="secondary" indeterminate/>
            {/* Icons */}
            <Checkbox color="primary" icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>


        </div>
    )
}
export default Check;