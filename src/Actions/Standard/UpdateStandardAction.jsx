import {
FETCH_UPDATE_STANDARD_REQUEST,
FETCH_UPDATE_STANDARD_SUCCESS,
FETCH_UPDATE_STANDARD_FAILURE,
} from "../../Types/Standard/types";
import axios from "axios";
import { apiToastError, apiToastSuccess } from "../../util/util";

export const fetchUpdateStandardRequest = () => ({
type: FETCH_UPDATE_STANDARD_REQUEST,
});

export const fetchUpdateStandardSuccess = (data) => ({
type: FETCH_UPDATE_STANDARD_SUCCESS,
data,
});

export const fetchUpdateStandardFailure = (error) => ({
type: FETCH_UPDATE_STANDARD_FAILURE,
error,
});

export const fetchUpdateStandard = (formData, id) => (dispatch) => {

dispatch(fetchUpdateStandardRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .patch(`https://student-info-feathers.herokuapp.com/standard/${id}`, formData, config)
    .then((data) => {
        console.log("data from action",data)
        apiToastSuccess("Updated Successfully")
    dispatch(fetchUpdateStandardSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)

    dispatch(fetchUpdateStandardFailure(error));
    });
};
