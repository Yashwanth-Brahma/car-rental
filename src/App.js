import React from "react";
import Amount from "./components/bidDetails/Amount";
import BidDetails from "./components/bidDetails/BidDetails";
import Header from "./components/Header";
import JourneyDetails from "./components/journeyDetails/JourneyDetails";
import JourneyInput from "./components/journeyDetails/JourneyInput";
import { useGlobalContext } from "./context/FormProvider";

const App = () => {
  const { placeBid, formData, verifyBtn } = useGlobalContext();
  console.log(formData);
  return (
    <>
      <Header pageHeader="Place Bid" />
      <div className="flex justify-center mt-5">
        {!placeBid ? (
          <JourneyInput />
        ) : (
          <div className="w-3/4 lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 ">
            <JourneyDetails />
            <hr className="my-5" />
            {!verifyBtn ? <Amount /> : <BidDetails />}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
