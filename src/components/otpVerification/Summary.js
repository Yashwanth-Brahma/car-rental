import React from "react";
import { useGlobalContext } from "../../context/FormProvider";

const Summary = () => {
  const { setBidSubmit } = useGlobalContext();
  return (
    <div className="mt-4">
      <button
        className="text-white font-bold py-2 px-4 rounded w-full my-6 bg-blue-500 hover:bg-blue-700"
        onClick={() => setBidSubmit(true)}>
        Submit Bid
      </button>
    </div>
  );
};

export default Summary;
