import Common from '../../Common/Common'
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {CBadge} from '@coreui/react'
import { fetchStudentList } from "../../../Actions/Student/StudentListAction"
import { fetchUpdateStudent } from "../../../Actions/Student/UpdateStudentAction";
import { fetchDeleteStudent } from '../../../Actions/Student/DeleteStudentAction'
import bootbox from 'bootbox/bootbox';


const getList = props => {
    props.fetchStudentList().then(() => {
    const { studentListData, studentListError } = props;
    })}

function StudentList(props) {

    function handleDelete(id){
        {bootbox.confirm({
                    message: "Are you yure to delete this standard ?",
                    buttons: {
                        confirm: {
                            label: 'Yes',
                            className: 'btn-sm btn-success'
                        },
                        cancel: {
                            label: 'No',
                            className: 'btn-sm btn-danger'
                        }
                    },
                    callback: function (result) {
                        if(result){
                            props.fetchDeleteStudent(id).then(() => {
                            const { deleteStudentData } = props;
                            if (deleteStudentData) {
                            getList(props);
                            }
                        });
                        }
                    }
                }).css({
                        'margin-top': '12%'
                        }
);}
    };


    function handleEdit(id){
        const { history } = props;
        history.push(`/edit-student/${id}`);
    }

    function handleStatusChange(id,activeStatus){
        const status = {
            isActive : !activeStatus}
        
        props.fetchUpdateStudent(status,id).then(() => {
            const { updateStudent, history } = props;
            getList(props)
    })
    
}
    

    useEffect(() => {
        getList(props);
    },props);

    const { studentListData, history } = props;

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
            name: "Fees",
            cell: row => <div data-tag="allowRowEvents">
                            {row.feesSubmitted ? <CBadge color="warning" shape="pill">Paid</CBadge> : <CBadge color="danger" shape="pill">Not Paid</CBadge>}
                        </div>,
        },
        {
            name: "Image",
            cell: row => <img src = {`https://student-info-feathers.herokuapp.com/${row.image}`} height="30px" width="30px" style={{borderRadius:"50%"}}/>,
        },
        {
            name: "Status",
            cell: row => <div data-tag="allowRowEvents">
                            {row.isActive ? <CBadge color="success" shape="pill" style={{cursor:"pointer"}} onClick={() => handleStatusChange(row._id,row.isActive)}>Active</CBadge> : <CBadge style={{cursor:"pointer"}} color="danger" shape="pill" onClick={() => handleStatusChange(row._id,row.isActive)}>Inactive</CBadge>}
                        </div>,
        },
        {
            name: "Actions",
            cell: row => <div data-tag="allowRowEvents">
                            <a style={{color : "#0099ff", fontSize : "15px", cursor : "pointer"}} className="m-3 fa fa-pencil" onClick={() => handleEdit(row._id)}></a> 
                            <a style={{color : "#ff0000", fontSize : "15px", cursor : "pointer"}} className="m-3 fas fa-trash" onClick={() => handleDelete(row._id)}></a>
                        </div>,
        },
        ];

return (
    <Common title="student">
        <div>
            <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Student</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Student</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        </div>
        <div>
                        <DataTable
                        title= "Datatable of Student"
                        actions={<Link to="/add-student" className="m-3"><Fab size="small" color="secondary" aria-label="add"><AddIcon /></Fab></Link>}
                        striped
                        columns={columns}
                        data={studentListData}
                        defaultSortField="firstName"
                        // sortIcon={<SortIcon />}
                        sortable
                        pagination
                        highlightOnHover
                        responsive
                        // selectableRows
                        // onSelectedRowsChange={handleChange}
                        />
        </div>
    </Common>
    )
}


const mapStateToProps = (state) => {
return {
    studentListLoading: state.studentList.isLoading,
    studentListData: state.studentList.data?.data || [],
    studentListError: state.studentList.error || {},

    deleteStudentLoading: state.deleteStudent.isLoading,
    deleteStudentData: state.deleteStudent?.data || [],
    deleteStudentError: state.deleteStudent?.error || {},

    updateStudentLoading: state.updateStudent?.isLoading,
    updateStudentData: state.updateStudent?.data || [],
    updateStudentError: state.updateStudent?.error || {},
};
};

const mapDispatchToProps = {
    fetchStudentList,
    fetchUpdateStudent,
    fetchDeleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);






