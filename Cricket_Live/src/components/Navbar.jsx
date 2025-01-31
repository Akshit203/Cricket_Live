const Navbar = () => {
  return (
    <>
      <div className="border p-5 boder flex justify-between items-center shadow-sm bg-[#00a896] text-white">
        <h1 className="font-semibold text-lg">Cricket Live</h1>
        <div className="flex  p-1 font-medium text-base">
          <div className="mr-4 cursor-pointer">Live Score</div>
          <div className="mr-4 cursor-pointer">Schedule</div>
          <div className="mr-4 cursor-pointer">Series</div>
          <div className="mr-4 cursor-pointer">IPL</div>
          <div className="mr-4 cursor-pointer">Teams</div>
          <div className="mr-4 cursor-pointer">Ranking</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
