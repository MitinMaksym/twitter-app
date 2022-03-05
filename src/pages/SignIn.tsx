import { Button, makeStyles, Typography } from "@material-ui/core"
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@mui/icons-material/Search'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutline'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import { useState } from "react"
import { Box, DialogActions, TextField } from "@mui/material"
import { Modal } from "../components/Modal"
import { theme as mainTheme } from './../theme'

const useStyles = makeStyles((theme: typeof mainTheme) => ({
  wrapper: {
    display: "flex",
    height: '100vh',
    overflow: 'hidden'
  },
  infoBlock: {
    position: "relative",
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    color: "white",
    fontWeight: 700,
    fontSize: 20,

  },
  twitterIbgIcon: {
    top: '55%',
    left: '50%',
    position: 'absolute',
    transform: 'scale(100)',

  },
  infoBlockIcon: {
    fontSize: 32,
    marginRight: 15
  },
  infoWrapper: {
    position: 'relative',
    maxWidth: 380,
    padding: 20,

    '& h6:not(:last-child)': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 40
    }

  },
  loginBlock: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWrapper: {
    maxWidth: 300,
    padding: 20
  },
  loginTwitterIcon: {
    fontSize: 60
  },

  loginTitle: {
    fontWeight: 700,
    marginBottom: 60,
    lineHeight: '140%',
    marginTop: 20
  }

}))
export const SignIn = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <>
      <Box className={classes.wrapper}>
        <div className={classes.infoBlock}>
          <TwitterIcon className={classes.twitterIbgIcon} color="primary" />

          <div className={classes.infoWrapper}>
            <Typography variant="h6"><SearchIcon className={classes.infoBlockIcon} />Читайте о том, что вам интересно</Typography >
            <Typography variant="h6"> <PeopleOutlinedIcon className={classes.infoBlockIcon} />Узнавайте о чем, говорят в мире</Typography>
            <Typography variant="h6"><ModeCommentOutlinedIcon className={classes.infoBlockIcon} />Присоединяйтесь к сообществу</Typography>
          </div>

        </div>
        <div className={classes.loginBlock}>
          <div className={classes.loginWrapper}>
            <TwitterIcon className={classes.loginTwitterIcon} color="primary" />
            <Typography className={classes.loginTitle} variant="h4" gutterBottom>Узнайте, что происходит в мире прямо сейчас</Typography>
            <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
            </Typography>
            <br />
            <Button style={{ marginBottom: 20 }} variant="outlined" fullWidth color="primary">Зарегистрироваться</Button>
            <Button variant="contained" fullWidth color="primary">Войти</Button></div>

        </div>
      </Box>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Modal title="Войти в аккаунт" open={open} onClose={handleClose} onSubmit={() => { }}>

        <SignInForm />

      </Modal>
    </>
  )
}



const SignInForm = () => {
  return <Box
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
      />
      <DialogActions>
        <Button variant="contained" fullWidth color="primary">Войти</Button>
      </DialogActions>
    </div>
  </Box>
}
