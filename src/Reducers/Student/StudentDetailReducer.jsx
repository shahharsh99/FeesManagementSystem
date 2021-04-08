import {
    FETCH_STUDENT_DETAIL_REQUEST,
    FETCH_STUDENT_DETAIL_SUCCESS,
    FETCH_STUDENT_DETAIL_FAILURE,
} from '../../Types/Student/types'

const initialState = {
    data: null,
    error: null,
    isLoading: false,
};

const StudentDetailReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_STUDENT_DETAIL_REQUEST:
        return {
        ...state,
        isLoading: true,
        };
    case FETCH_STUDENT_DETAIL_SUCCESS:
        return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
        };
    case FETCH_STUDENT_DETAIL_FAILURE:
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

export default StudentDetailReducer;
