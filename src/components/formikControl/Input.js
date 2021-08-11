import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className=" bg-black text-white" />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
export default Input;
