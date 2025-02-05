import axios from "axios";
import { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";

const Live = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const getLiveMatches = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-live",
        {
          headers: {
            "x-rapidapi-key":
              "62b9583332msha7e5f39f4188797p1cd14ajsnb630ccb0a070",
            "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
          },
        }
      );

      const liveMatchesData = response.data;

      console.log(liveMatchesData);

      setData(liveMatchesData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLiveMatches();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-[150px] ">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5">
        {data?.response.map((match) => {
          return (
            <ScoreCard
              key={match.matchList.seriesId}
              seriesName={match.seriesName}
              matchTitle={match.matchList[0].matchTitle}
              matchFormat={match.matchList[0].matchFormat}
              matchDate={match.matchList[0].matchDate}
              matchTime={match.matchList[0].matchTime}
              matchVenue={match.matchList[0].matchVenue}
              teamOne={match.matchList[0].teamOne.name}
              teamOneScore={match.matchList[0].teamOne.score}
              teamTwo={match.matchList[0].teamTwo.name}
              teamTwoScore={match.matchList[0].teamTwo.score}
              matchStatus={match.matchList[0].matchStatus}
            />
          );
        })}
      </div>
    </>
  );
};

export default Live;
