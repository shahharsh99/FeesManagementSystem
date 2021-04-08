import Routes from './Routes/Routes';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./Reducers"
import { ToastContainer, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const createStoreWithMiddleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(logger, reduxThunk)(createStore)
    : applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        transition={Flip}
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </Provider>
  );
}

export default App;
