import React from "react";
import { Outlet } from "react-router-dom";
import Batting from "../pages/Batting";
import { RankingHeader } from "../components/RankingHeader";

const BattingLayout = () => {
  return (
    <>
      <Batting />
      <RankingHeader />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default BattingLayout;
