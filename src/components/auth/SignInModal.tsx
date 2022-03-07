import { Box, Button, DialogActions, TextField } from "@mui/material"
import { Modal } from "../common/Modal"

type SignInModalProps = {
    open: boolean
    onClose: () => void
    onSubmit: () => void
}
export const SignInModal = (props: SignInModalProps) => {
    const { open, onClose } = props
    return <Modal title="Войти в аккаунт" open={open} onClose={onClose} onSubmit={() => { }}>

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

                />
                <TextField
                    fullWidth
                    id="user-password"
                    label="Пароль"
                    type="password"
                />
                <DialogActions>
                    <Button variant="contained" fullWidth color="primary">Войти</Button>
                </DialogActions>
            </div>
        </Box>
    </Modal>
}