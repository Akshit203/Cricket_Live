import React from "react";
import { useNavigate } from "react-router-dom";

const Batting = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around items-center w-[20%] mt-4 text-[12px]  p-2 ml-20">
      <div
        className="cursor-pointer bg-[#00a896] text-white w-[75px] flex justify-center rounded-full p-1"
        onClick={() => navigate("test")}
      >
        TEST
      </div>
      <div
        className="cursor-pointer bg-[#00a896] text-white w-[75px] flex justify-center rounded-full p-1"
        onClick={() => navigate("odi")}
      >
        ODI
      </div>
      <div
        className="cursor-pointer bg-[#00a896] text-white w-[75px] flex justify-center rounded-full p-1"
        onClick={() => navigate("T20")}
      >
        T20
      </div>
    </div>
  );
};

export default Batting;
