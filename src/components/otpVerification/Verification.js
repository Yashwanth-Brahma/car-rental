import React, { useState } from "react";
import { useGlobalContext } from "../../context/FormProvider";
import { BiEditAlt } from "react-icons/bi";
import OtpFields from "./OtpFields";
import FormikControls from "../formikControl/FormikControls";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const Verification = () => {
  const { formData, setFormData } = useGlobalContext();
  const { number } = formData;
  const [edit, setEdit] = useState(false);

  const init = { number: "" };
  const validate = Yup.object({
    number: Yup.string().phone("IN").required(),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setFormData({ ...formData, ...values });
    setSubmitting(false);
    setEdit(false);
  };
  return (
    <div>
      <p>
        We've sent an OTP to your mobile number. Please enter it below to submit
        your bid <strong>{number}</strong>
        <span
          className="text-blue-600 font-semibold cursor-pointer"
          onClick={() => setEdit(true)}>
          <BiEditAlt className="inline-block" />
          Edit
        </span>
      </p>
      {edit && (
        <Formik
          initialValues={formData || init}
          validationSchema={validate}
          onSubmit={onSubmit}
          enableReinitialize>
          <Form className="mt-5">
            <FormikControls
              control="input"
              type="text"
              label="Enter you 10 digit mobile number"
              name="number"
            />
            <button
              type="submit"
              className="text-white font-bold py-2 px-4 rounded w-full my-6 bg-blue-500 hover:bg-blue-700">
              Update mobile number
            </button>
          </Form>
        </Formik>
      )}
      <OtpFields />
    </div>
  );
};

export default Verification;
