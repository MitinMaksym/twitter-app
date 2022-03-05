import ReactDOM from 'react-dom'
import { theme } from './theme'
import App from './App'


import "./index.css"
import { MuiThemeProvider } from '@material-ui/core'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)


