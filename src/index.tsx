import ReactDOM from "react-dom";
import { theme } from "./theme";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
