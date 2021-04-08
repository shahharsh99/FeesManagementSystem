    import React from 'react'
    import { Link } from 'react-router-dom'
    import './adminlte.min.css'

    function handleLogOut(){
        localStorage.removeItem("userAccessToken")
    }
    export default function Common(props) {
        return (
            <div>
                <div>
    <div className="wrapper">
        
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/signin" className="nav-link btn btn-light" onClick={() => handleLogOut()} role="button">
                Log Out{/* <a className="btn btn-secondary">Log Out</a> */}
            </Link>
            </li>


        </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
            </div>
            </div>
            <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                </button>
                </div>
            </div>
            </div>
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu-open">
                <Link to="/dashboard" className={props.title === "dashboard" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Dashboard
                    </p>
                </Link>
                <Link to="/standard" className={props.title === "standard" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Standard
                    </p>
                </Link>
                <Link to="/student" className={props.title === "student" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Student
                    </p>
                </Link>
                <Link to="/fees-evaluation" className={props.title === "fees-evaluation" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Fees Evaluation
                    </p>
                </Link>

                </li>
            </ul>
            </nav>
        </div>
        </aside>
        <div className="content-wrapper">
        {props.children}
        {console.log(props.children)}
        </div>
         {/* /.content-wrapper */}
        <footer className="main-footer">
        <strong>Copyright ©2021 <a href="https://fees-management-system-react.herokuapp.com/">Fees Management System</a> | </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 0.0.1
        </div>
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
        </aside>
    </div>
    </div>


            </div>
        )
    }
