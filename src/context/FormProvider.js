import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const [placeBid, setPlaceBid] = useState(false);
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [verified, setVerified] = useState(false);
  return (
    <FormContext.Provider
      value={{
        setFormData,
        formData,
        placeBid,
        setPlaceBid,
        setVerifyBtn,
        verifyBtn,
        verified,
        setVerified,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FormContext);
};

export { FormContext, FormProvider };
