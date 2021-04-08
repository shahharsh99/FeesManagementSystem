import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import {fetchLogin} from "../../../Actions/Login/LoginAction"
import { Field, Form, Formik } from "formik";
import { displayFormErrors } from "../../../util/util"
import * as Yup from "yup";


class SignIn extends Component{
    constructor(props) {
        super(props);
    }

    

    onHandleSubmit = (values) => {
    console.log("TCL ~ Login ~ values", values);
    const apiVal = {
        strategy: "local",
        email: values.email,
        password: values.password,
    };

    this.props.fetchLogin(apiVal).then(() => {
        const { userLoginData, history } = this.props;

    if (userLoginData) {
        history.push("/dashboard");
    }
    });
};

    render() {
    return (
        <div>
        <div className="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
        onSubmit={this.onHandleSubmit}
        validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
            password: Yup.string()
                .required("No password provided")
                .min(6, "Password is too short - should be 6 chars minimum.")})}
    >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        submitCount,
        setFieldValue,
        }) => {
        const showError = (key) =>
            displayFormErrors(key, errors, touched, submitCount);

        return (
    <React.Fragment>
        <center>
            <div  className="container align-items-center" style={{marginTop:"8%"}}>        
                    <form onSubmit={handleSubmit} className="needs-validation">
                    <div className="input-group mb-1">
                    <Field type="email" name="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                        {errors.email && touched.email && (
                                <div
                                style={{ color: "red" }}
                                className="input-feedback mt-0 mb-2"
                                >
                                {errors.email}
                                </div>
                            )}
                            <br/>
                    <div className="input-group">
                    <Field type="password" className="form-control"  name="password" placeholder="Password" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    {errors.password && touched.password && (
                                <div
                                style={{ color: "red" }}
                                className="input-feedback mt-0 mb-2"
                                >
                                {errors.password}
                                </div>
                            )}
                            <br/>
                    <div className="col-8">
                        <button type="submit" className="btn btn-primary btn-block ">Sign In</button><br/>
                    </div>
                    </form>
        </div>
        </center>
    </React.Fragment>
        );
        }}
    </Formik>

<p className="mb-0 text-center">
    <Link to="/signup" className="text-center">Register a new membership</Link>
</p>
</div>
</div>
</div>
</div>
    </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userLoginLoading: state.userLogin.isLoading,
        userLoginData: state.userLogin?.data || null,
        userLoginError: state.userLogin?.error || {},
    };
    };
    
const mapDispatchToProps = {
        fetchLogin,
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


    