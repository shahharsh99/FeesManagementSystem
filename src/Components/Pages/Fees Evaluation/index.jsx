import React, { useEffect, useState } from "react";
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction";
import { fetchUpdateStudent } from "../../../Actions/Student/UpdateStudentAction";
import { fetchStudentFromStandard } from "../../../Actions/FeesEvaluation/StudentfromStandard" 
import Common from "../../Common/Common"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";

const getList = props => {
    props.fetchStandardList().then(() => {
    const { standardListData, standardListError } = props;
    })}

    
    export function FeesEvaluation(props) {
        
    function handleFeesSubmit(id,fees,standard){
        const status = {
            feesSubmitted : !fees}
        
            props.fetchUpdateStudent(status,id).then(() => {
            const { updateStudent, history } = props;
            getData(standard)
    })
    }   
        const getData = (id) => {
            props.fetchStudentFromStandard(id).then(() => {
            const { studentStandardListData, studentStandardListError } = props;
        })}

    useEffect(() => {
        getList(props)
        // getData()
    },props);

    async function handleChange(e){
        e.preventDefault();
        getData(e.target.value)
    }

            const columns = [
        {
            name: "First Name",
            selector: "firstName",
            sortable: true
        },
        {
            name: "Last Name",
            selector: "lastName",
            sortable: true
        },
        {
            name: "Image",
            cell: row => <img src = {`https://student-info-feathers.herokuapp.com/${row.image}`} height="30px" width="30px" style={{borderRadius:"50%"}}/>,
        },
        {
            name: "Fees",
            cell: row => <button className="btn btn-sm btn-success" onClick={() => handleFeesSubmit(row._id, row.feesSubmitted, row.standardID._id)} disabled = {row.feesSubmitted}>{row.feesSubmitted ? "Submitted" : "Submit"}</button>,
        },
        ];

    return (

    <Common title="fees-evaluation">
        <div>
            
            <div>
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Fees Evaluation</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Fees Evaluation</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card card-primary">
                        <div className="card-header">
                        </div>
                        <center>
                        <div className="col">
                        <div className="form-group">
                                        <select name="standard" className="form-control w-25 mt-3" id="standard" onChange={handleChange}>
                                            <option selected disabled>Choose Standard</option>
                                            {props.standardListData?.data?.map(data => {
                                                return <option value={data._id}>{data.standard}</option>
                                            })}
                                        </select>
                                        
                                    </div>
                        </div>
                        </center>
                            <DataTable
                                title= "Filtered Datatable of Students"
                                striped
                                columns={columns}
                                data={props.studentStandardListData}
                                defaultSortField="firstName"
                                sortable
                                pagination
                                highlightOnHover
                                responsive
                                />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>

        </div>
        </Common>

    );

}

const mapStateToProps = (state) => {
return {
    standardListLoading: state.standardList?.isLoading,
    standardListData: state.standardList?.data || [],
    standardListError: state.standardList?.error || {},

    studentStandardListLoading: state.studentStandardList?.isLoading,
    studentStandardListData: state.studentStandardList?.data?.data || [],
    studentStandardListError: state.studentStandardList?.error || {},

    updateStudentLoading: state.updateStudent?.isLoading,
    updateStudentData: state.updateStudent?.data || [],
    updateStudentError: state.updateStudent?.error || {},
};
};

const mapDispatchToProps = {
    fetchStandardList,
    fetchStudentFromStandard,
    fetchUpdateStudent

};

export default connect(mapStateToProps, mapDispatchToProps)(FeesEvaluation);