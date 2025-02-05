import { useNavigate } from "react-router-dom";

const LiveScores = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[75px]">
        <div className="text-2xl font-semibold mt-5 mb-8 relative left-[35px] top-3">
          Live Cricket Score
        </div>
        <div className="border flex w-[95%] m-auto p-2 justify-around items-center rounded-md shadow-sm bg-[#252422] text-white">
          <div className="cursor-pointer" onClick={() => navigate("live")}>
            Live
          </div>
          <div className="cursor-pointer" onClick={() => navigate("recent")}>
            Recent
          </div>
          <div className="cursor-pointer" onClick={() => navigate("upcoming")}>
            Upcoming
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveScores;
