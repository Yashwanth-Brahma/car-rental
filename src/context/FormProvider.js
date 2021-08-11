import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  return (
    <FormContext.Provider
      value={{
        setFormData,
        formData,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FormContext);
};

export { FormContext, FormProvider };
