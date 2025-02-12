import React from "react";

const RankingCard = (props) => {
  return (
    <>
      <div className=" flex items-center mt-2 w-[55%] p-2">
        <div className="flex-1 text-center">{props.rank}</div>
        <div className="flex-1">{props.name}</div>
        <div className=" flex-1">{props.country}</div>
        <div className=" flex-1 text-center">{props.rating}</div>
      </div>
    </>
  );
};

export default RankingCard;
