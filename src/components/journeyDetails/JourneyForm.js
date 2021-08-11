import { Form, Formik } from "formik";
import React from "react";
import FormikControls from "../formikControl/FormikControls";
import * as Yup from "yup";
import { useGlobalContext } from "../../context/FormProvider";

const JourneyForm = ({ buttonVal }) => {
  const { setFormData, formData, setPlaceBid } = useGlobalContext();

  const options = [
    { key: "Select Car", value: "" },
    { key: "HatchBack", value: "HatchBack" },
    { key: "Sedan", value: "Sedan" },
    { key: "SUV", value: "SUV" },
  ];

  const initVal = {
    source: "",
    destination: "",
    carType: "",
    travellers: "",
  };
  const validationSchema = Yup.object({
    source: Yup.string().required("Required!"),
    destination: Yup.string().required("Required!"),
    carType: Yup.string().required("Required!"),
    travellers: Yup.string().required("Required!"),
  });
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    setFormData(formData ? { ...formData, ...values } : values);
    setPlaceBid(true);
  };

  return (
    <Formik
      initialValues={formData || initVal}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize>
      {(formik) => {
        const validate = (value) => {
          const { carType } = formik.values;
          if (value > 6) {
            return "Travellers should be 6 or less than 6";
          }
          if ((carType === "Sedan" || carType === "HatchBack") && value > 4)
            return "only 4 or less than 4 travellers allowed Sedan & Hatchback";
        };
        // console.log(formik.values);
        return (
          <Form className="w-full max-w-lg p-3">
            <div className="flex flex-wrap  mb-6 gap-x-8 ">
              <FormikControls
                control="input"
                type="text"
                label="Source Location"
                name="source"
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              />
              <FormikControls
                control="input"
                type="text"
                label="Destination"
                name="destination"
                className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              />
            </div>
            <div className="w-full mb-6">
              <FormikControls
                control="select"
                label="Select car Type"
                name="carType"
                options={options}
              />
              <FormikControls
                control="input"
                type="text"
                label="Number of Travellers"
                name="travellers"
                req={false}
                validate={validate}
              />
            </div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              {buttonVal}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default JourneyForm;
