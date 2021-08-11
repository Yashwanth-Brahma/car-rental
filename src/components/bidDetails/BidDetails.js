import React from "react";
import { useGlobalContext } from "../../context/FormProvider";
import { BiRupee } from "react-icons/bi";

const BidDetails = () => {
  const { formData } = useGlobalContext();
  const { amount, name, number, remarks, rateNegio } = formData;
  return (
    <div className="flex justify-between w-full">
      <div>
        <p className=" text-gray-400 mb-2 text-sm">Bid Details</p>
        <p className="text-lg font-semibold capitalize">
          {number} <br />
          {name} <br />
          {remarks}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <p className=" font-extrabold text-3xl">
          <BiRupee />
          {amount}
        </p>
        <p className="text-sm text-gray-400">
          {rateNegio ? "Negiotable Price" : "Fixed Price"}
        </p>
      </div>
    </div>
  );
};

export default BidDetails;
