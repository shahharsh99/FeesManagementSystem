import {
FETCH_ADD_STANDARD_REQUEST,
FETCH_ADD_STANDARD_SUCCESS,
FETCH_ADD_STANDARD_FAILURE,
} from "../../Types/Standard/types";
import axios from "axios";
import { apiToastError, apiToastSuccess } from "../../util/util";


export const fetchAddStandardRequest = () => ({
type: FETCH_ADD_STANDARD_REQUEST,
});

export const fetchAddStandardSuccess = (data) => ({
type: FETCH_ADD_STANDARD_SUCCESS,
data,
});

export const fetchAddStandardFailure = (error) => ({
type: FETCH_ADD_STANDARD_FAILURE,
error,
});

export const fetchAddStandard = (formData) => (dispatch) => {

dispatch(fetchAddStandardRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .post('https://student-info-feathers.herokuapp.com/standard', formData, config)
    .then((data) => {
        console.log("data from action",data)
        apiToastSuccess("Added Successfully")

    dispatch(fetchAddStandardSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)

    dispatch(fetchAddStandardFailure(error));
    });
};
