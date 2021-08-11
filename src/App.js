import React from "react";
import Amount from "./components/bidDetails/Amount";
import BidDetails from "./components/bidDetails/BidDetails";
import Header from "./components/Header";
import JourneyDetails from "./components/journeyDetails/JourneyDetails";
import JourneyInput from "./components/journeyDetails/JourneyInput";
import Summary from "./components/otpVerification/Summary";
import Verification from "./components/otpVerification/Verification";
import Success from "./components/Success";
import { useGlobalContext } from "./context/FormProvider";

const App = () => {
  const { placeBid, verifyBtn, verified, bidSubmit } = useGlobalContext();
  return (
    <>
      {verified ? (
        <Header pageHeader="Summary" />
      ) : (
        <Header pageHeader="Place Bid" />
      )}
      {!bidSubmit ? (
        <>
          <div className="flex justify-center mt-5">
            {!placeBid ? (
              <JourneyInput />
            ) : (
              <div className="w-3/4 lg:w-1/3 xl:w-1/3 md:w-1/2 sm:w-1/2 ">
                <JourneyDetails />
                <hr className="my-5" />
                {!verifyBtn ? (
                  <Amount />
                ) : (
                  <>
                    <BidDetails />
                    {!verified ? (
                      <>
                        <hr className="my-5" />
                        <Verification />
                      </>
                    ) : (
                      <Summary />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <Success />
      )}
    </>
  );
};

export default App;
