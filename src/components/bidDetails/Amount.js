import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import * as Yup from "yup";
import ErrorText from "../formikControl/ErrorText";
import FormikControls from "../formikControl/FormikControls";
import "yup-phone";
import { useGlobalContext } from "../../context/FormProvider";
import BidEntries from "./BidEntries";

const Amount = () => {
  const [next, setNext] = useState(false);
  const { formData, setFormData, setVerifyBtn } = useGlobalContext();

  const init = {
    amount: "",
    rateNegio: "",
    number: "+91",
    whatsapp: "",
    name: "",
    remarks: "",
  };
  const validate = Yup.object({
    amount: Yup.string().required("Required!"),
    number: Yup.string().phone("IN").required(),
    name: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setFormData({ ...formData, ...values });
    setSubmitting(false);
    resetForm();
    setVerifyBtn(true);
  };

  return (
    <Formik
      classname="text-center"
      initialValues={init}
      validationSchema={validate}
      onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <div className="flex justify-center">
              <label htmlFor="amount">
                <BiRupee className="text-5xl inline-block mt-4" />
              </label>
              <Field
                type="text"
                name="amount"
                id="amount"
                className=" focus:outline-none text-5xl w-full "
                placeholder="0"
              />
              <ErrorMessage name="amount" component={ErrorText} />
            </div>
            <FormikControls
              control="checkbox"
              options={[
                {
                  key: "Rate Negiotable",
                  value: "Rate Negiotable",
                },
              ]}
              name="rateNegio"
              className="mt-5"
            />
            {!next ? (
              <button
                className={`${
                  !formik.values.amount
                    ? "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-700"
                } 
                      text-white font-bold py-2 px-4 rounded w-full my-6
                `}
                onClick={() => setNext(true)}
                disabled={!formik.values.amount}>
                Next
              </button>
            ) : (
              <BidEntries formik={formik} />
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default Amount;
