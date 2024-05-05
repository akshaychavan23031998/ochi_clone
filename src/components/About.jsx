const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className="font-['neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex border-t-[1px] pt-10 border-[#87935f] mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl capitalize">Our Approach: </h1>
          <button className="flex gap-5 items-center py-5 px-10 text-white uppercase mt-10 bg-zinc-900 rounded-full">Read More
            <div className="w-3 h-3 rounded-full bg-zinc-50"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh]">
          <img className="h-full w-full rounded-3xl" src="src/assets/images/Homepage-Photo-1326x939.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
