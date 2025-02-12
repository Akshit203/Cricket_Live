import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Live from "./components/Live";

import Teams from "./pages/Teams";

import RootLayout from "./layout/RootLayout";
import LiveScoresLayout from "./layout/LiveScoresLayout";
import Recent from "./components/Recent";
import Upcoming from "./components/Upcoming";
import RankingsLayout from "./layout/RankingsLayout";
import BattingLayout from "./layout/BattingLayout";

import TestBattingRankings from "./components/TestBattingRankings";
import BowlingLayout from "./layout/BowlingLayout";
import OdiBattingRankings from "./components/OdiBattingRankings";
import T20BattingRankings from "./components/T20BattingRankings";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="live-scores" element={<LiveScoresLayout />}>
          <Route path="live" element={<Live />} />
          <Route path="recent" element={<Recent />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
        <Route path="teams" element={<Teams />} />
        <Route path="rankings" element={<RankingsLayout />}>
          <Route path="batting" element={<BattingLayout />}>
            <Route path="test" element={<TestBattingRankings />} />
            <Route path="odi" element={<OdiBattingRankings />} />
            <Route path="t20" element={<T20BattingRankings />} />
          </Route>

          <Route path="bowling" element={<BowlingLayout />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
