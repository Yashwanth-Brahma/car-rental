import React from "react";
import CheckBox from "./CheckBox";
import Input from "./Input";
import Select from "./Select";

const FormikControls = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    default:
      return null;
  }
};

export default FormikControls;
