import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const Select = ({ label, name, options, req = true, ...rest }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
        {req && <sup className="text-red-600">*</sup>}
      </label>
      <Field
        as="select"
        name={name}
        id={label}
        {...rest}
        className="block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-0 leading-tight focus:border-blue-500 focus:outline-none focus:bg-white font-semibold">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Select;
