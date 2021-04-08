import React, { useEffect } from "react";
import Common from "../../Common/Common"
import { connect } from "react-redux";
import { fetchUpdateStandard } from "../../../Actions/Standard/UpdateStandardAction";
import { fetchStandardDetail } from "../../../Actions/Standard/StandardDetailAction";
import { fetchAddStandard } from "../../../Actions/Standard/AddStandardAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { displayFormErrors } from "../../../util/util";
import { Link } from "react-router-dom";



export function AddEditStandard(props) {

    function initialValues(){
        const {standardDetailData} = props;
        let detail = standardDetailData
        if(!getStandardId()){
            detail=null
        }

        return {
            standard : detail?.standard || "",
            fees : detail?.fees || "",
        }
    }

    useEffect(() => {
        if(getStandardId()){
            props.fetchStandardDetail(getStandardId())
        }
    },props);

    const getStandardId = () => {
    const { match } = props;
    
    return match?.params?.id || "";
    };

function onHandleSubmit(val){
    const apiVal = {
        standard: val.standard,
        fees: val.fees,
    };

    if (!getStandardId()) {
        props.fetchAddStandard(apiVal).then(() => {
            const { addStandardData, history } = props;
            if (addStandardData) {
                history.push("/standard");
            }
    });
} else {
    props.fetchUpdateStandard(apiVal, getStandardId()).then(() => {
        const { updateStandardData, history } = props;
            if (updateStandardData) {
                history.push("/standard");
            }
    });
}
};
    return (

            <Common>
        <div>

            <div>
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Standard</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/standard">Standard</Link></li>
                        <li className="breadcrumb-item active">Add</li>
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
                        <Formik
            enableReinitialize
            initialValues={initialValues()}
            onSubmit={onHandleSubmit}
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
                    <>                    
                    {/* <h2 className="text-center mb-4">
                        {getStandardId() ? "Edit Customer" : "Add Customer"}
                    </h2> */}
                <form onSubmit={handleSubmit} id="quickForm">
                    <div className="card-body">

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="standard">Standard</label>
                                        <Field type="text" name="standard" className="form-control" id="standard" placeholder="Enter Standard" />
                                        {showError("standard")}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="fees">Fees</label>
                                        <Field type="number" name="fees" className="form-control" id="fees" placeholder="Enter Fees" />
                                        {showError("fees")}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    {/* <div className="w-25 text-center mt-3">
                        <button type="submit" className="btn btn-primary">  
                        {getStandardId() ? "Update" : "Add"}
                        </button>
                    </div> */}
                </form>
            
                </>
            );
        }}
        </Formik>
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
    addStandardLoading: state.addStandard?.isLoading,
    addStandardData: state.addStandard?.data || [],
    addStandardError: state.addStandard?.error || {},

    standardDetailLoading: state.standardDetail?.isLoading,
    standardDetailData: state.standardDetail?.data || [],
    standardDetailError: state.standardDetail?.error || {},

    updateStandardLoading: state.updateStandard?.isLoading,
    updateStandardData: state.updateStandard?.data || [],
    updateStandardError: state.updateStandard?.error || {},
};
};

const mapDispatchToProps = {
    fetchAddStandard,
    fetchStandardDetail,
    fetchUpdateStandard

};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditStandard);
