import React from "react";
import { useGlobalContext } from "../../context/FormProvider";
import { BiEditAlt } from "react-icons/bi";
import OtpFields from "./OtpFields";

const Verification = () => {
  const { formData } = useGlobalContext();
  const { number } = formData;
  return (
    <div>
      <p>
        We've sent an OTP to your mobile number. Please enter it below to submit
        your bid <strong>{number}</strong>
        <span className="text-blue-500">
          <BiEditAlt className="inline-block" />
          Edit
        </span>
      </p>
      <OtpFields />
    </div>
  );
};

export default Verification;
