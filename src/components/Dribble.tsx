import DribbleLogo from "../assets/dribble.webp";
function Dribble() {
  return (
    <div className=" flex flex-col items-center justify-center mt-75 mb-75">
      <div>
        <img src={DribbleLogo} alt="" className="w-[250px] pb-10" />
      </div>
      <div className="flex flex-col text-2xl  md:text-3xl lg:text-4xl pb-10 ">
        <span>Like a lion's roar echoing through</span>
        <span>the jungle, a hint of our creative</span>
        <span>minds emerges.</span>
      </div>
      <div>
        <button>View Dribble</button>
      </div>
    </div>
  );
}

export default Dribble;
