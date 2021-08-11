import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = (props) => {
  const { label, name, req = true, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
        {req && <sup className="text-red-600">*</sup>}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-0 leading-tight focus:border-blue-500 focus:outline-none focus:bg-white font-semibold"
      />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
export default Input;
