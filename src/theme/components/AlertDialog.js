import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useAuth } from "../../auth-context/auth.context";

const AlertFileUploaded = (props) => {
  const { setAlert, fileUploadMsg } = props;
  return (
    <SweetAlert
      success
      title={fileUploadMsg}
      confirmBtnText="OK!"
      onCancel={() => setAlert(false)}
      onConfirm={() => setAlert(false)}
      customClass="alert_pop"
    />
  );
};

const AlertCustomerCreated = (props) => {
  const { setisSuccess } = props;
  return (
    <SweetAlert
      success
      title="Customer has been created successfully!"
      confirmBtnText="OKK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertCustomerUpdated = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      success
      title="Customer has been updated successfully!"
      confirmBtnText="OKK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertPaymentCreated = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      success
      title="Payment has been created successfully!"
      confirmBtnText="OKK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertRefundCreated = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      success
      title="Refund has been created successfully!"
      confirmBtnText="OKK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertChargeSucceeded = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      success
      title="Payment has been charged successfully!"
      confirmBtnText="OKK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertPasswordUpdated = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  const { setUser } = useAuth();
  return (
    <SweetAlert
      success
      title="Password has been updated successfully. Please log in again!"
      confirmBtnText="OKK!"
      //onCancel={() => setisSuccess(false)}
      onConfirm={() => {
        setUser(null);
        localStorage.removeItem("user");
        history.push("/auth/signin");
      }}
      customClass="alert_pop"
    />
  );
};

const AlertPasswordReset = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  const { setUser } = useAuth();
  return (
    <SweetAlert
      success
      title="Password reset successfull!"
      confirmBtnText="OKK!"
      //onCancel={() => setisSuccess(false)}
      onConfirm={() => {
        history.push("/auth/signin");
      }}
      customClass="alert_pop"
    />
  );
};

const AlertUnauthorized = () => {
  const history = useHistory();
  const { setUser } = useAuth();
  return (
    <SweetAlert
      danger
      title="You are not authorized or Your session has expired!"
      confirmBtnText="SignIn"
      onCancel={() => history.push("/auth/signin")}
      onConfirm={() => {
        setUser(null);
        localStorage.removeItem("user");
        history.push("/auth/signin");
      }}
      customClass="alert_pop"
    />
  );
};

const AlertDataNotFound = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      warning
      title="The requested resource was not found!"
      confirmBtnText="OK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

const AlertTooManyRequest429 = (props) => {
  const history = useHistory();
  const { setisSuccess } = props;
  return (
    <SweetAlert
      warning
      title="The requested resource was not found!"
      confirmBtnText="OK!"
      onCancel={() => setisSuccess(false)}
      onConfirm={() => setisSuccess(false)}
      customClass="alert_pop"
    />
  );
};

export {
  AlertCustomerCreated,
  AlertCustomerUpdated,
  AlertUnauthorized,
  AlertDataNotFound,
  AlertPaymentCreated,
  AlertRefundCreated,
  AlertChargeSucceeded,
  AlertPasswordUpdated,
  AlertPasswordReset,
  AlertFileUploaded,
};
