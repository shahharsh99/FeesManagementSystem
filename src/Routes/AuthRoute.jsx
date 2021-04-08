import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Pages/Dashboard"
import Student from "../Components/Pages/Student"
import FeesEvaluation from "../Components/Pages/Fees Evaluation"
import Standard from "../Components/Pages/Standard"
import AddEditStandard from "../Components/Pages/Standard/addEdit";
import AddEditStudent from "../Components/Pages/Student/addEdit";


const AuthRoute = () => {
return (
    <main className="c-main">
    <Switch>
        {/* fees-evaluation */}
        <Route exact path="/fees-evaluation" component={FeesEvaluation}/>

        {/* student */}
        <Route exact path="/edit-student/:id" component={AddEditStudent}/>
        <Route exact path="/add-student" component={AddEditStudent}/>
        <Route exact path="/student" component={Student}/>
        
        {/* standard */}
        <Route exact path="/edit-standard/:id" component={AddEditStandard}/>
        <Route exact path="/add-standard" component={AddEditStandard}/>
        <Route exact path="/standard" component={Standard}/>

        {/* dashboard */}
        <Route exact path="/dashboard" component={Dashboard}/>

        <Redirect from="/" to="/dashboard" />
    </Switch>
    </main>
);
};

export default React.memo(AuthRoute);