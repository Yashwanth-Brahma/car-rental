import React from "react";
import { useGlobalContext } from "../../context/FormProvider";
import { BiEditAlt } from "react-icons/bi";

const JourneyDetails = () => {
  const { formData, setPlaceBid } = useGlobalContext();
  const { source, destination, carType, travellers } = formData;
  return (
    <div className="flex justify-between w-full">
      <div>
        <p className=" text-gray-400 mb-2 text-sm">Journey Details</p>
        <p className="text-lg font-semibold capitalize">
          {source} - {destination}
        </p>
        <p className="text-lg font-semibold">
          {travellers} Persons, {carType}
        </p>
      </div>
      <div>
        <p
          className="text-blue-600 font-semibold cursor-pointer"
          onClick={() => setPlaceBid(false)}>
          <BiEditAlt className="inline-block" />
          Edit
        </p>
      </div>
    </div>
  );
};

export default JourneyDetails;
