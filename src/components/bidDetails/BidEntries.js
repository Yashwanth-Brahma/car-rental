import React from "react";
import FormikControls from "../formikControl/FormikControls";

const BidEntries = ({ formik }) => {
  return (
    <div className="my-5">
      <hr />
      <div className="mt-4 flex flex-col gap-3">
        <>
          <FormikControls
            control="input"
            type="text"
            label="Enter you 10 digit mobile number"
            name="number"
          />
          <FormikControls
            control="checkbox"
            name="whatsapp"
            options={[
              {
                key: "Get updates on WhatsApp",
                value: "Get updates on WhatsApp",
              },
            ]}
          />
        </>
        <FormikControls
          control="input"
          type="text"
          label="Enter your Name"
          name="name"
        />
        <FormikControls
          control="input"
          type="text"
          label="Enter Remarks (optional)"
          name="remarks"
          req={false}
        />
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="text-white font-bold py-2 px-4 rounded w-full my-6 bg-blue-500 hover:bg-blue-700">
        Verify via OTP
      </button>
    </div>
  );
};

export default BidEntries;
