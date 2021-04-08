import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import SignIn from "../Components/Pages/SignIn/SignIn";
import AuthRoute from "./AuthRoute";

const AutheticateRoute = ({ component: Component, ...rest }) => {
const authToken = localStorage.getItem("userAccessToken");

return (
    <Route
    {...rest}
    render={(props) =>
        authToken ? <AuthRoute {...props} /> : <Redirect to="/login" />
    }
    />
);
};

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route exact name = "login" path="/login" component={SignIn}/>
            <AutheticateRoute
                path="/"
                name="Login"
                render={(props) => <AuthRoute {...props} />}
            />

            <Route path="/" render={() => <Redirect to="/login" />} />
        </Switch>
    </Router>)}

export default Routes;