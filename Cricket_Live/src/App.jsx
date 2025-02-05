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
