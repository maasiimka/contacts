import React from "react";
import { useSelector } from "react-redux";
import { getIsAutentificated } from "../../redux/auth/auth-selectors";
import IntroductionPage from "./IntroductionPage";
import StartPage from "./StartPage";

const HomePage = () => {
  const isAuthenthicated = useSelector(getIsAutentificated);

  return (
    <div>
      {isAuthenthicated ? (
        <h2>
          <StartPage />
        </h2>
      ) : (
        <IntroductionPage />
      )}
    </div>
  );
};

export default HomePage;
