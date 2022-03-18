import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useState } from "react"
import { SignInModal } from "../components/auth/SignInModal"
import { SignUpModal } from "../components/auth/SignUpModal"
import { Button, CircularProgress, Typography } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated, selectLoading } from '../redux/ducks/auth/selectors';
import { Box } from '@mui/system';

enum AuthModalType {
  SignIn = "signIn",
  SignUp = "signUp"
}
export const AuthPage = () => {
  const defaultModalState = { signIn: false, signUp: false }

  const [modalOpen, setModalOpen] = useState(defaultModalState)
  const isAuthenticated = useSelector(selectAuthenticated)
  const loading = useSelector(selectLoading)

  let location = useLocation();

  const handleModalOpen = (modal: AuthModalType) => {
    setModalOpen({ ...defaultModalState, [modal]: true })
  }

  const handleClose = () => {
    setModalOpen(defaultModalState)
  }

  if (isAuthenticated) {
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return (
    <>
      <div className="auth-page">
        <div className="auth-page__info-block info-block" >
          <TwitterIcon className="info-block__twitter-icon" color="primary" />

          <div className="info-block__container">
            <Typography variant="h6"><SearchIcon className="info-block__icon" />Читайте о том, что вам интересно</Typography >
            <Typography variant="h6"> <PeopleOutlineIcon className="info-block__icon" />Узнавайте о чем, говорят в мире</Typography>
            <Typography variant="h6"><ModeCommentOutlinedIcon className="info-block__icon" />Присоединяйтесь к сообществу</Typography>
          </div>

        </div>
        <div className="auth-page__login-block login-block">
          <div className="login-block__container">
            <TwitterIcon className="login-block__twitter-icon" color="primary" />
            <Typography className="login-block__title" variant="h4" gutterBottom>Узнайте, что происходит в мире прямо сейчас</Typography>
            <Typography className="login-block__sub-title">Присоединяйтесь к Твиттеру прямо сейчас!
            </Typography>
            <Button variant="outlined" fullWidth color="primary" onClick={() => handleModalOpen(AuthModalType.SignUp)}>Зарегистрироваться</Button>
            <Button variant="contained" fullWidth color="primary" onClick={() => handleModalOpen(AuthModalType.SignIn)}>Войти</Button></div>

        </div>
        <SignInModal open={modalOpen.signIn} loading={loading} onClose={handleClose} onSubmit={() => { }} />
        <SignUpModal open={modalOpen.signUp} onClose={handleClose} onSubmit={() => { }} />
      </div>

    </>
  )
}
