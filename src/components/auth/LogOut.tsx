import { Avatar } from "@mui/material"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/ducks/auth/sagas"

type LogOutProps = {

}
export const LogOut = (props: LogOutProps) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }
    return <div className="log-out"><Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        onClick={handleClick}
    /></div>
}