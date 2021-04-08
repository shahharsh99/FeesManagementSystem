import Common from '../../Common/Common'
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction"
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {CBadge} from '@coreui/react'
import { fetchUpdateStandard } from "../../../Actions/Standard/UpdateStandardAction";
import { fetchDeleteStandard } from '../../../Actions/Standard/DeleteStandardAction'
import bootbox from 'bootbox/bootbox';


const getList = props => {
    props.fetchStandardList().then(() => {
    const { standardListData, standardListError } = props;
    })}

function StandardList(props) {

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
                            props.fetchDeleteStandard(id).then(() => {
                            const { deleteStandardData } = props;
                            if (deleteStandardData) {
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
        history.push(`/edit-standard/${id}`);
    }

    function handleStatusChange(id,activeStatus){
        const status = {
            isActive : !activeStatus}
        
        props.fetchUpdateStandard(status,id).then(() => {
            const { updateStandard, history } = props;
            getList(props)
    })
    
}
    

    useEffect(() => {
        getList(props);
    },props);

    const { standardListData, history } = props;

        const columns = [
        {
            name: "Standard",
            selector: "standard",
            sortable: true
        },
        {
            name: "Fees",
            selector: "fees",
            sortable: true
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
    <Common title="standard">
        <div>
            <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Standard</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Standard</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        </div>
        <div>
                        <DataTable
                        title= "Datatable of Standard and Fees"
                        actions={<Link to="/add-standard" className="m-3"><Fab size="small" color="secondary" aria-label="add"><AddIcon /></Fab></Link>}
                        striped
                        columns={columns}
                        data={standardListData}
                        defaultSortField="standard"
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
    standardListLoading: state.standardList.isLoading,
    standardListData: state.standardList.data?.data || [],
    standardListError: state.standardList.error || {},

    deleteStandardLoading: state.deleteStandard.isLoading,
    deleteStandardData: state.deleteStandard?.data || [],
    deleteStandardError: state.deleteStandard?.error || {},


    updateStandardLoading: state.updateStandard?.isLoading,
    updateStandardData: state.updateStandard?.data || [],
    updateStandardError: state.updateStandard?.error || {},
};
};

const mapDispatchToProps = {
    fetchStandardList,
    fetchUpdateStandard,
    fetchDeleteStandard
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardList);






