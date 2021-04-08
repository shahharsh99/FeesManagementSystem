import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Common from "../../Common/Common"
import Charts from './charts'
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction";
import { fetchTotalFees } from "../../../Actions/Dashboard/TotalFeesAction"
import { fetchStudentList } from "../../../Actions/Student/StudentListAction"
import { connect } from 'react-redux';

const getListFees =  props => {
    props.fetchTotalFees().then(() => {
    const { totalFeesData, totalFeesError } = props;
    })
}
const getListStandard =  props => {
    props.fetchStandardList().then(() => {
    const { standardListData, standardListError } = props;
    })
}
const getListStudent =  props => {

    props.fetchStudentList().then(() => {
    const { studentListData, studentListError } = props;
    })
}
    function Dashboard(props) {
        
        useEffect(() => {
            getListFees(props);
            getListStandard(props);
            getListStudent(props);
        },props);
        
        function fees(){
            let fees = 0;
            {props.totalFeesData.forEach(data => {
                fees = fees + data.standardID.fees
                console.log("@@@@@@@@@@@@",data.standardID.fees,fees);
            })}
            return fees
    }

    function standard(){
            let standard;
            standard = props.standardListData.length
            return standard
    }

    function students(){
            let students;
            students = props.studentListData.length
            return students
    }

    function feesNotPaid(){
            let count = 0;
            props.studentListData.map(d => {
                if(!d.feesSubmitted)
                    count++
            })
            return count
    }

    return (
        <Common title="dashboard">
        <div>
            <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                </div>
            </div>
            </div>
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
            <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
                <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                    <div className="inner">
                    <h3>{fees()}</h3>
                    <p>Total Fees</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-bag" />
                    </div>
                    <Link to="/fees-evaluation" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                    <div className="inner">
                    <h3>{standard()}</h3>
                    <p>Total Standards</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-stats-bars" />
                    </div>
                    <Link to="/standard" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                    <div className="inner">
                    <h3>{students()}</h3>
                    <p>Total Students</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-person-add" />
                    </div>
                    <Link to="/student" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                    <div className="inner">
                    <h3>{feesNotPaid()}</h3>
                    <p>Student's Fees Not Paid</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-pie-graph" />
                    </div>
                    <Link to="/student" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                </div>
                </div>
            </div>
            </div>
        </section>
            
        </div>                
                <Charts totalFeesPaid = {students()-feesNotPaid()} totalFeesNotPaid={feesNotPaid()}/>
        </Common>
    )
}

const mapStateToProps = (state) => {
return {
    totalFeesLoading: state.totalFees?.isLoading,
    totalFeesData: state.totalFees?.data?.data || [],
    totalFeesError: state.totalFees?.error || {},

    studentListLoading: state.studentList.isLoading,
    studentListData: state.studentList.data?.data || [],
    studentListError: state.studentList.error || {},

    standardListLoading: state.standardList.isLoading,
    standardListData: state.standardList.data?.data || [],
    standardListError: state.standardList.error || {},



};
};

const mapDispatchToProps = {
    fetchTotalFees,
    fetchStandardList,
    fetchStudentList

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);