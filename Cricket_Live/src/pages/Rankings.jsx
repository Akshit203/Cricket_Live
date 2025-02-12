import React from "react";
import { useNavigate } from "react-router-dom";

const Rankings = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[75px]">
      <div className="text-2xl font-semibold mt-5 mb-8 relative left-[35px] top-3">
        ICC Cricket Rankings - Men's
      </div>

      <div className="border p-2  bg-[#252422] text-white rounded-md flex justify-around items-center w-[95%] m-auto">
        <div className="cursor-pointer" onClick={() => navigate("batting")}>
          Batting
        </div>
        <div className="cursor-pointer" onClick={() => navigate("bowling")}>
          Bowling
        </div>
        <div className="cursor-pointer">All Rounders</div>
      </div>
    </div>
  );
};

export default Rankings;
