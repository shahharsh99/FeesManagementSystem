import React, { useEffect, useState } from "react";
import Common from "../../Common/Common"
import { connect } from "react-redux";
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction";
import { fetchUpdateStudent } from "../../../Actions/Student/UpdateStudentAction";
import { fetchStudentDetail } from "../../../Actions/Student/StudentDetailAction";
import { fetchAddStudent } from "../../../Actions/Student/AddStudentAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { displayFormErrors } from "../../../util/util";
import { Link } from "react-router-dom";
import DropzoneComponent from "./dropZone";


const getList = props => {
    props.fetchStandardList().then(() => {
    const { standardListData, standardListError } = props;
    })}
    
    let imageUrl;
export function AddEditStudent(props) {
    

    function handleImageUrl(files){
        return imageUrl = files[0]
    }

    function initialValues(){
        const {studentDetailData} = props;
        let detail = studentDetailData
        if(!getStudentId()){
            detail=null
        }

        return {
            firstName : detail?.firstName || "",
            lastName : detail?.lastName || "",
            image : detail?.image || "",
            // standardID : detail?.standard || "",
            street : detail?.street || "",
            city : detail?.city || "",
            pincode : detail?.pincode || "",
        }
    }


    useEffect(() => {
        getList(props)
        if(getStudentId()){
            props.fetchStudentDetail(getStudentId())
        }
    },props);

    const getStudentId = () => {
    const { match } = props;
    return match?.params?.id || "";
    };

function onHandleSubmit(val){
    let apiVal = new FormData();
    // const apiVal = {
    //     firstName : val.firstName,
    //     lastName : val.lastName,
    //     image : imageUrl,
    //     standardID : val.standard,
    //     street : val.street,
    //     city : val.city,
    //     pincode : val.pincode,
    // };
    	
		apiVal.append("firstName", val.firstName);
		apiVal.append("lastName", val.lastName);
		apiVal.append("standardID", val.standard);
		apiVal.append("street", val.street);
		apiVal.append("city", val.city);
		apiVal.append("pincode", val.pincode);
		apiVal.append("image", imageUrl);

    if (!getStudentId()) {
        props.fetchAddStudent(apiVal).then(() => {
            const { addStudentData, history } = props;
            if (addStudentData) {
                history.push("/student");
            }
    });
} else {
    props.fetchUpdateStudent(apiVal, getStudentId()).then(() => {
        const { updateStudentData, history } = props;
            if (updateStudentData) {
                history.push("/student");
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
                    <h1>
                        {getStudentId() ? "Edit Student" : "Add Student"}
                    </h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/student">Student</Link></li>
                        <li className="breadcrumb-item active">{getStudentId() ? "Edit" : "Add"}</li>
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
                        {getStudentId() ? "Edit Customer" : "Add Customer"}
                    </h2> */}
                <form onSubmit={handleSubmit} id="quickForm">
                    <div className="card-body">

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <Field type="text" name="firstName" className="form-control" id="firstName" placeholder="Enter firstName" />
                                        {showError("firstName")}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field type="text" name="lastName" className="form-control" id="lastName" placeholder="Enter lastName" />
                                        {showError("lastName")}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="standard">Standard</label>
                                        <Field as="select" name="standard" className="form-control" id="standard">
                                            <option selected disabled>Choose Standard</option>
                                            {props.standardListData?.data?.map(data => {
                                                    if(getStudentId()){
                                                        if(data.isActive){
                                                            return <option selected={data._id === props.studentDetailData.standardID ? true : false} value={data._id}>{data.standard}</option>
                                                        }
                                                    }
                                                    else{
                                                        if(data.isActive){
                                                            return <option value={data._id}>{data.standard}</option>
                                                        }
                                                    }
                                                
                                            })}
                                        </Field>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="street">Street</label>
                                        <Field type="text" name="street" className="form-control" id="street" placeholder="Enter street" />
                                        {showError("street")}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <Field type="text" name="city" className="form-control" id="city" placeholder="Enter city" />
                                        {showError("city")}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="pincode">Pincode</label>
                                        <Field type="number" name="pincode" className="form-control" id="pincode" placeholder="Enter pincode" />
                                        {showError("pincode")}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <DropzoneComponent imageUrl={getStudentId() ? props.studentDetailData.image : null} handleImageUrl = {handleImageUrl}/>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    {/* <div className="w-25 text-center mt-3">
                        <button type="submit" className="btn btn-primary">  
                        {getStudentId() ? "Update" : "Add"}
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
    addStudentLoading: state.addStudent?.isLoading,
    addStudentData: state.addStudent?.data || [],
    addStudentError: state.addStudent?.error || {},

    studentDetailLoading: state.studentDetail?.isLoading,
    studentDetailData: state.studentDetail?.data || [],
    studentDetailError: state.studentDetail?.error || {},

    updateStudentLoading: state.updateStudent?.isLoading,
    updateStudentData: state.updateStudent?.data || [],
    updateStudentError: state.updateStudent?.error || {},

    standardListLoading: state.standardList?.isLoading,
    standardListData: state.standardList?.data || [],
    standardListError: state.standardList?.error || {},
};
};

const mapDispatchToProps = {
    fetchAddStudent,
    fetchStudentDetail,
    fetchUpdateStudent,
    fetchStandardList

};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditStudent);
