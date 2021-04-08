import {
  FETCH_DELETE_STUDENT_REQUEST,
  FETCH_DELETE_STUDENT_SUCCESS,
  FETCH_DELETE_STUDENT_FAILURE,
} from '../../Types/Student/types';

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const DeleteStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DELETE_STUDENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
      };
    case FETCH_DELETE_STUDENT_FAILURE:
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

export default DeleteStudentReducer;
