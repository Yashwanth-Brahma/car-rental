import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import ErrorText from "./ErrorText";

const CheckBox = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default CheckBox;
