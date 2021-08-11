import React from "react";
import Header from "./components/Header";
import JourneyInput from "./components/journeyDetails/JourneyInput";

const App = () => {
  return (
    <>
      <Header pageHeader="Place Bid" />
      <div className="flex justify-center">
        <JourneyInput />
      </div>
    </>
  );
};

export default App;
