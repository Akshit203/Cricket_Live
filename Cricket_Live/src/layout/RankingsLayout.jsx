import React from "react";
import Rankings from "../pages/Rankings";
import { Outlet } from "react-router-dom";

const RankingsLayout = () => {
  return (
    <>
      <Rankings />
      <div className="w-[95%] m-auto">
        <Outlet />
      </div>
    </>
  );
};

export default RankingsLayout;
