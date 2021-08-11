import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import "../../assets/app.css";
import { useGlobalContext } from "../../context/FormProvider";
import ErrorText from "../formikControl/ErrorText";

const OtpFields = () => {
  const { setVerified } = useGlobalContext();

  const init = {
    otp: "",
  };

  const validate = (value) => {
    if (value === "1234") {
      setVerified(true);
    } else {
      return "Enter the correct OTP";
    }
  };
  return (
    <Formik initialValues={init}>
      <div className="flex flex-col justify-center mt-8 text-center">
        <Field
          type="text"
          name="otp"
          id="otp"
          className="focus:outline-none mx-auto"
          maxLength="4"
          validate={validate}
        />
        <ErrorMessage name="otp" component={ErrorText} />
        <p className="my-5 text-blue-500 text-sm underline">Resend OTP</p>
      </div>
    </Formik>
  );
};

export default OtpFields;
