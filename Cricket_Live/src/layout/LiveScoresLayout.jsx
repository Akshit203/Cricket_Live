import { Outlet } from "react-router-dom";
import LiveScores from "../pages/LiveScores";

const LiveScoresLayout = () => {
  return (
    <div>
      <LiveScores />
      <div className="w-[95%] m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LiveScoresLayout;
