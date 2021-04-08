import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";

//standard
import StandardListReducer from "./Standard/StandardListReducer"
import AddStandardReducer from "./Standard/AddStandardReducer"
import DeleteStandardReducer from "./Standard/DeleteStandardReducer";
import StandardDetailReducer from "./Standard/StandardDetailReducer";
import UpdateStandardReducer from "./Standard/UpdateStandardReducer";

//student
import StudentListReducer from "./Student/StudentListReducer"
import AddStudentReducer from "./Student/AddStudentReducer"
import DeleteStudentReducer from "./Student/DeleteStudentReducer";
import StudentDetailReducer from "./Student/StudentDetailReducer";
import UpdateStudentReducer from "./Student/UpdateStudentReducer";

//fees-evaluation
import StudentFromStandardReducer from "./FeesEvaluation/StudentFromStandard"

//dashboard
import TotalFeesReducer from "./Dashboard/TotalFeesReducer"
import FeesStandardWiseReducer from "./Dashboard/FeesStandardWiseReducer"

const rootReducer = combineReducers({
    
    userLogin : LoginReducer,
    
    //standard
    standardList: StandardListReducer,
    addStandard: AddStandardReducer,
    deleteStandard : DeleteStandardReducer,
    standardDetail : StandardDetailReducer,
    updateStandard : UpdateStandardReducer,

    //student
    studentList: StudentListReducer,
    addStudent: AddStudentReducer,
    deleteStudent : DeleteStudentReducer,
    studentDetail : StudentDetailReducer,
    updateStudent : UpdateStudentReducer,
    
    //fees-evaluation
    studentStandardList : StudentFromStandardReducer,

    //dashboard
    totalFees : TotalFeesReducer,
    feesStandardWise : FeesStandardWiseReducer
});

export default rootReducer;
