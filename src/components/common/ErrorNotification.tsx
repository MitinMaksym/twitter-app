import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../redux/ducks/error/errorSlice'
import { RootState } from '../../redux/rootReducer'

export const ErrorNotification = () => {
    const error = useSelector((state: RootState) => state.error.showError)
    const errorMsg = useSelector((state: RootState) => state.error.message)
    const dispatch = useDispatch()
    return (

        <Snackbar open={error} autoHideDuration={6000} onClose={() => dispatch(clearError())} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <Alert severity="error" sx={{ width: '100%' }}>
                {errorMsg || "Some error occured"}
            </Alert>
        </Snackbar>
    )
}
