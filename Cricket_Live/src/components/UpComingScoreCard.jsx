const UpComingScoreCard = (props) => {
  return (
    <>
      <div className="border flex flex-col justify-around p-2 ">
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
      </div>
    </>
  );
};

export default UpComingScoreCard;
