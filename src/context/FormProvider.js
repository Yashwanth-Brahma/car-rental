import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);
  const [placeBid, setPlaceBid] = useState(false);
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [verified, setVerified] = useState(false);
  const [bidSubmit, setBidSubmit] = useState(false);

  const handleHomeClick = () => {
    setPlaceBid(false);
    setFormData(null);
    setVerifyBtn(false);
    setVerified(false);
    setBidSubmit(false);
  };

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
        bidSubmit,
        setBidSubmit,
        handleHomeClick,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FormContext);
};

export { FormContext, FormProvider };
