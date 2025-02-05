const ScoreCard = (props) => {
  return (
    <>
      <div className="h-[225px] flex flex-col justify-around p-2 ">
        {/* <div className="bg-gray-300 p-2 font-medium text-sm">
          {props.seriesName}
        </div> */}
        <div>
          <div className="flex items-center">
            <div className="mr-2 font-medium text-base">{props.matchTitle}</div>
            <div className="text-gray-800">{props.matchFormat}</div>
          </div>
          <div className="flex text-gray-800">
            <div className="mr-5">{props.matchDate}</div>
            <div className="mr-5">{props.matchTime}</div>
            <div>{props.matchVenue}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-[400px] p-3">
          <div className="font-medium flex">
            <div className="mr-2">{props.teamOne}</div>
            <div>{props.teamOneScore}</div>
          </div>
          <div className="font-medium flex">
            <div className="mr-2">{props.teamTwo}</div>
            <div>{props.teamTwoScore}</div>
          </div>
          <div className="text-red-600 font-medium">{props.matchStatus}</div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
