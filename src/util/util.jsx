import { toast } from "react-toastify";

export const displayFormErrors = (
  key = "",
  errors = {},
  touched = {},
  submitCount = 1
) => {
  if (errors[key] !== undefined && errors[key] && submitCount) {
    return (
      <div className="text-danger input-feedback font12">{errors[key]}</div>
    );
  }
  return null;
};


export const apiToastSuccess = (successMsg) => {
//   console.log("TCL  apiToastSuccess  successMsg", successMsg);
  showToast(successMsg, 1);
};

export const apiToastError = (errorMsg) => {
  showToast(errorMsg, 0);
};

export const showToast = (msg, status) => {
//   console.log("TCL  showToast  status", status);
//   console.log("TCL  showToast  msg", msg);
  if (status) {
    toast.success(msg);
  } else {
    toast.error(msg);
  }
};