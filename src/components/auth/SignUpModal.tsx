import { Box, Button, DialogActions, TextField } from "@mui/material"
import { Modal } from "../common/Modal"


type SignUpModalProps = {
    open: boolean
    onClose: () => void
    onSubmit: () => void
}
export const SignUpModal = (props: SignUpModalProps) => {
    const { open, onClose } = props
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
                    id="user-name"
                    label="Ваше имя"

                />
                <TextField
                    fullWidth
                    id="user-login"
                    type="email"
                    label="Адрес электронной почты"

                />
                <TextField
                    fullWidth
                    id="user-password"
                    label="Пароль"
                />
                <DialogActions>
                    <Button variant="contained" fullWidth color="primary">Зарегистрироваться</Button>
                </DialogActions>
            </div>
        </Box>
    </Modal>
}