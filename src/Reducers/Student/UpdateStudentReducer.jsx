import {
FETCH_UPDATE_STUDENT_REQUEST,
FETCH_UPDATE_STUDENT_SUCCESS,
FETCH_UPDATE_STUDENT_FAILURE,
} from '../../Types/Student/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const UpdateStudentReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_UPDATE_STUDENT_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case FETCH_UPDATE_STUDENT_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case FETCH_UPDATE_STUDENT_FAILURE:
    return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error.response,
    };
    default:
    return state;
}
};

export default UpdateStudentReducer;
