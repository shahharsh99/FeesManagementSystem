import {
FETCH_UPDATE_STANDARD_REQUEST,
FETCH_UPDATE_STANDARD_SUCCESS,
FETCH_UPDATE_STANDARD_FAILURE,
} from '../../Types/Standard/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const UpdateStandardReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_UPDATE_STANDARD_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case FETCH_UPDATE_STANDARD_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case FETCH_UPDATE_STANDARD_FAILURE:
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

export default UpdateStandardReducer;
