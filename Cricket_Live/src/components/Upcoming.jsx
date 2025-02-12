import axios from "axios";

import UpComingScoreCard from "./UpComingScoreCard";

import { useQuery } from "@tanstack/react-query";

const Upcoming = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["upcomingMatches"],
    queryFn: () => getUpcomingMatches(),
    staleTime: 120 * 60 * 1000, // Applying caching for 2 hours
  });

  const getUpcomingMatches = async () => {
    try {
      const response = await axios.get(
        "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-upcoming",
        {
          headers: {
            "x-rapidapi-key":
              "62b9583332msha7e5f39f4188797p1cd14ajsnb630ccb0a070",
            "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
          },
        }
      );

      const upcomingMatchesData = response.data;

      console.log(upcomingMatchesData);

      return upcomingMatchesData;
    } catch (error) {
      console.error(error);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-[150px] ">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5">
        {data?.response.map((series) => {
          return (
            <>
              <div className="bg-gray-300 p-2 font-medium text-sm">
                {series.seriesName}
              </div>
              {series?.matchList.map((match) => {
                return (
                  <UpComingScoreCard
                    key={match.matchId}
                    matchTitle={match.matchTitle}
                    matchFormat={match.matchFormat}
                    matchDate={match.matchDate}
                    matchTime={match.matchTime}
                    matchVenue={match.matchVenue}
                  />
                );
              })}
              <div className="mb-5"></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Upcoming;
