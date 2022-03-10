import ReactDOM from 'react-dom'
import { theme } from './theme'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'


import "./index.scss"
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')

)


