import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, } from "@mui/material";
import { useNavigate } from "react-router-dom"


export const BackButton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <IconButton aria-label="back" size="small" sx={{ marginRight: "5px" }} onClick={handleClick}>
            <ArrowBackIcon color="primary" fontSize="small" />
        </IconButton>
    )
}
