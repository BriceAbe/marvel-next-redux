import "../styles/globals.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
