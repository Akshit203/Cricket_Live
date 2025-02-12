import React from "react";

export const RankingHeader = () => {
  return (
    <>
      <div className="border flex justify-around items-center w-[55%] mt-5 p-2 bg-gray-300 font-semibold">
        <div className="flex-1 text-center ">Rank</div>
        <div className="flex-1 text-left">Player</div>
        <div className="flex-1 text-left">Country</div>
        <div className="flex-1 text-center">Rating</div>
      </div>
    </>
  );
};
