import axios from "axios";

import RankingCard from "./RankingCard";

import { useQuery } from "@tanstack/react-query";

const T20BattingRankings = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["t20BattingRankings"],
    queryFn: () => getT20BattingRankings(),
    staleTime: 120 * 60 * 1000, // Applying caching for 2 hours
  });

  const getT20BattingRankings = async () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket2.p.rapidapi.com/stats/v1/rankings/batsmen",
      params: {
        isWomen: "0",
        formatType: "t20",
      },
      headers: {
        "x-rapidapi-key": "62b9583332msha7e5f39f4188797p1cd14ajsnb630ccb0a070",
        "x-rapidapi-host": "cricbuzz-cricket2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
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
      {data?.rank.map((player) => {
        return (
          <RankingCard
            key={player.id}
            rank={player.rank}
            name={player.name}
            country={player.country}
            rating={player.rating}
          />
        );
      })}
    </>
  );
};

export default T20BattingRankings;
