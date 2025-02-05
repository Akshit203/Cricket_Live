import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" p-5  flex justify-between items-center bg-[#00a896] text-white shadow-xl fixed w-[100%] h-[70px] top-0 left-0 z-10">
        <h1 className="font-semibold text-lg relative left-4">Cricket Live</h1>
        <div className="flex p-1 font-medium text-base">
          {/* <div className="mr-4 cursor-pointer">Live Score</div> */}
          <Link to="/live-scores">
            <div className="mr-4 cursor-pointer">Live scores</div>
          </Link>
          {/* <div className="mr-4 cursor-pointer">Series</div>
          <div className="mr-4 cursor-pointer">Matches</div> */}
          <Link to="/teams">
            <div className="mr-4 cursor-pointer">Teams</div>
          </Link>
          {/* <div className="mr-4 cursor-pointer">Ranking</div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
