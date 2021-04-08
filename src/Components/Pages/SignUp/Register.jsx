import React, {Component} from 'react'
import './style.css'
import {fetchRegister} from '../../Actions/Signup/RegisterAction'
import { connect } from 'react-redux';
import { Field, Form, Formik } from "formik";
import { displayFormErrors } from "../../util/util";
import { Link } from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);

    }

    onHandleSubmit = (values) => {
    console.log("TCL ~ Login ~ values", values);
    const apiVal = {
        companyName:  values.companyName, 
        email: values.email, 
        password: values.password, 
        cnpjNumber: values.cnpjNumber, 
        contactNumber: values.contactNumber,
        companyType: values.companyType
    };

    this.props.fetchRegister(apiVal).then(() => {
        const { userRegisterData, history } = this.props;
        console.log(userRegisterData);
    
        if (userRegisterData) {
        history.push("/signin");
    }
    });
};

    render(){
        return(
        <React.Fragment>
        <Formik
            enableReinitialize
            initialValues={{ companyName: "", email:"", password:"", cnpjNumber:"", contactNumber:"",companyType:"" }}
            onSubmit={this.onHandleSubmit}
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
                    <div>
                            <div className="hold-transition register-page">
                                <div className="register-box">
                                    <div className="register-logo">
                                        <><b>Register</b></>
                                    </div>

                                <div className="card">
                                    <div className="card-body register-card-body">
                                    {/* <p className="login-box-msg">Register a new membership</p> */}

                                    <form onSubmit={handleSubmit}>
                                        
                                        <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="Company Name" name="companyName" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-building"></span>
                                            </div>
                                        </div>
                                            {showError("companyName")}
                                        </div>

                                        {/* <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="Corporate Name" name="corporateName" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fab fa-acquisitions-incorporated"></span>
                                            </div>
                                        </div>
                                            {showError("name")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="Company Address" name="companyAddress" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-address-card"></span>
                                            </div>
                                        </div>
                                            {showError("name")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="Actual Address" name="actualAddress" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="far fa-address-card"></span>
                                            </div>
                                        </div>
                                            {showError("name")}
                                        </div> */}

                                        <div className="input-group mb-3">
                                        <Field type="email" className="form-control" placeholder="Email Address" name="email" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-at"></span>
                                            </div>
                                        </div>
                                            {showError("email")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="password" className="form-control" placeholder="Password" name="password" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-key"></span>
                                            </div>
                                        </div>
                                            {showError("password")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="CNPJ Number" name="cnpjNumber" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-registered"></span>
                                            </div>
                                        </div>
                                            {showError("cnpjNumber")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="text" className="form-control" placeholder="Contact Number" name="contactNumber" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fas fa-phone"></span>
                                            </div>
                                        </div>
                                            {showError("contactNumber")}
                                        </div>

                                        <div className="input-group mb-3">
                                        <Field type="number" className="form-control" placeholder="Company Type" name="companyType" required/>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            <span className="fab fa-artstation"></span>
                                            </div>
                                        </div>
                                            {showError("companyType")}
                                        </div>

                                        <div>
                                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                                        </div>
                                    </form>

                                <div className="social-auth-links text-center">
                                    <p>- OR -</p>
                                    <a href="#" className="btn btn-block btn-secondary">
                                    <i className="fab fa-facebook mr-2"></i>
                                    Sign up using Facebook
                                    </a>
                                    <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i>
                                    Sign up using Google+
                                    </a>
                                </div>

                                <Link to="/signin" className="text-center">I already have a membership</Link>
                                </div>
                            </div>
                            </div>
                            </div>

                        </div>
        </React.Fragment>
            );
        }}
        </Formik>
</React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    userRegisterLoading: state.userRegister.isLoading,
    userRegisterData: state.userRegister?.data?.data || [],
    userRegisterError: state.userRegister?.error || {},

};
};

const mapDispatchToProps = {
fetchRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);





