import React from "react";
import { useGlobalContext } from "../context/FormProvider";

const Success = () => {
  const { handleHomeClick } = useGlobalContext();
  return (
    <div className="text-center mt-6">
      <div className="box-content h-25 w-32 p-4 border-4 border-green-700 bg-green-300 text-center mx-auto rounded-lg">
        <div className="h-full w-full bg-green-400 p-2">
          Your Bid Order Placed Succussfully!!!👍
        </div>
      </div>
      <button
        className="text-white font-bold py-2 px-4 rounded w-32 my-6 bg-blue-500 hover:bg-blue-700"
        onClick={handleHomeClick}>
        Go to Home Page
      </button>
    </div>
  );
};

export default Success;
