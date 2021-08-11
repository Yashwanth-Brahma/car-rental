import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./ErrorText";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={label} {...rest}>
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
