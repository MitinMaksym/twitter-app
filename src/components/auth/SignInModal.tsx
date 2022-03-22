import { Box, DialogActions, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/ducks/auth/sagas"
import { Modal } from "../common/Modal"
import LoadingButton from '@mui/lab/LoadingButton';

type SignInModalProps = {
    open: boolean
    loading: boolean
    onClose: () => void
    onSubmit: () => void
}


export type UserLoginCredentials = {
    email: string;
    password: string;
}

export const SignInModal = (props: SignInModalProps) => {
    const { open, loading, onClose } = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()


    const handleSubmit = () => {

        dispatch(login({ email, password }))
    }

    return <Modal title="Войти в аккаунт" open={open} onClose={onClose}>

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mb: 2, mt: 1 },
            }}
            autoComplete="off"
        >
            <div>
                <TextField
                    fullWidth
                    id="user-login"
                    label="Адрес электронной почты"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    fullWidth
                    id="user-password"
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <DialogActions>
                    <LoadingButton
                        size="small"
                        color="primary"
                        loading={loading}
                        loadingPosition="start"
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Войти
                    </LoadingButton>

                </DialogActions>
            </div>
        </Box>
    </Modal>
}