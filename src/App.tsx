import "./App.css";
//#121315
import Navbar from "./components/Navbar";
import DownArrow from "./assets/down-arrow-circle-svgrepo-com.svg";
import Portfolio from "./components/Portfolio";
import ShowDesc from "./components/ShowDesc";
import ShowCards from "./components/ShowCards";
import Slider from "./components/Slider";
import Marquee from "./components/Marquee";
import Marquee2 from "./components/Marquee2";
import Dribble from "./components/Dribble";
import Contact from "./components/Contact";
import Footer from "./assets/footer-logo.7dd398e2.svg";
function App() {
  return (
    <div className="bg-[#121315]  text-white px-10 justify-center flex flex-col">
      <div className="sticky top-0 z-10 w-full bg-[#121315]">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center  w-100% h-[80vh] gap-10 ">
        <h1 className="flex flex-col text-5xl/10 sm:text-7xl/14 md:text-8xl/18 lg:text-8xl/18 font-bold text-center  text-[#E0EEEE]  ">
          <span>ROAR IN THE</span>
          <span>DIGITAL WILDERNESS.</span>
        </h1>
        <div className="flex flex-col text-center text-[8px] items-center sm:text-[10px] md:text-[12px] lg:text-[12px]  uppercase text-[#E0EEEE]">
          <span>We roar with success, delivering the TRIONN®</span>
          <span>through versatile design, branding and the latest</span>
          <span>tech development to companies.</span>
          <div className="gap-2 w-[30px] sm:w-[30px] md:w-10 lg:w-[45px]">
            <img src={DownArrow} alt="" className="color-#5a7272" />
          </div>
        </div>
        <div className="w-full text-2xl flex justify-between">
          <button className="cursor-pointer">Explore work</button>
          <button>Get in touch</button>
        </div>
      </div>
      <div className="w-full mt-6">
        <video
          src={`${import.meta.env.BASE_URL}Intro.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl"
        />
      </div>
      <div className="flex">
        <ShowDesc indexnumber={0} />
        <div className="w-full flex flex-col justify-end items-end ">
          <div className="mb-10 hidden sm:hidden md:hidden lg:flex">
            <button>Explore work</button>
          </div>
        </div>
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <ShowDesc indexnumber={1} />
      </div>
      <div className="flex flex-col gap-4 justify-start items-start sm:justify-end sm:items-end lg:justify-end lg:items-end ">
        <div>
          <div className="flex flex-col text-start text-[15px] sm:text-[15px] md:text-[20px] lg:text-[25px] ">
            <span>We roar with creativity, staying updated with the</span>
            <span>latest tech to make your brand a formidable force</span>
            <span>in the digital wilderness and deliver exceptional</span>
            <span>website and app experiences.</span>
          </div>
          <div className="flex justify-start mt-6 mb-10 ">
            <button>About us</button>
          </div>
        </div>
      </div>
      <div>
        <ShowCards />
      </div>
      <div>
        <ShowDesc indexnumber={2} />
      </div>
      <div className="flex flex-col gap-4 justify-start items-start sm:justify-end sm:items-end lg:justify-end lg:items-end ">
        <div className="mb-10">
          <div className="flex flex-col text-start text-[15px] sm:text-[15px] md:text-[20px] lg:text-[25px] ">
            <span>Take heed, as the</span>
            <span>lion's roar in our client</span>
            <span>reviews resounds</span>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div className="pb-10">
        <Marquee />
        <Marquee2 />
      </div>
      <div>
        <Dribble />
      </div>
      <div className="mt-10 mb-20 text-center w-full  ">
        <h1 className="py-5 flex flex-col text-[70px]/15 sm:text-[100px]/20 md:text-[150px]/30 lg:text-[200px]/40 uppercase">
          <span>join our</span>
          <span>jungle</span>
          <span>trek</span>
        </h1>
      </div>
      <div>
        <Contact />
      </div>
      <div className="flex sm:flex-col flex-col  md:flex-row lg:flex-row pb-10 ">
        <div>
          <ShowDesc indexnumber={3} />
        </div>
        <div className="w-full  flex items-start  justify-start lg:items-end lg:justify-end md:items-end md:justify-end sm:items-center lg:pb-12 md:pb-12">
          <button style={{ background: "#c5fcfc", color: "#121315" }}>
            Lets talk!
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between text-2xl md:text-2xl lg:text-3xl mb-10 border-t border-b p-7">
        <div className="flex flex-col md:flex-row  ">
          <div className="flex flex-col text-start p-2 ">
            <span>Email</span>
            <span>hello@trionn.com</span>
          </div>
          <div className="flex flex-col text-start md:ml-40 lg:ml-40 p-2 ">
            <span>Call</span>
            <span>+91 98241 82099</span>
          </div>
        </div>
        <div className="flex flex-col text-start md:text-end lg:text-end p-2 ">
          <span>Teams</span>
          <span>Talk to Trionn</span>
        </div>
      </div>
      <div className="flex justify-between items-center pb-10 pt-5">
        <span>@2025 TRIONN®</span>
        <div className="gap-2 w-[30px] sm:w-[30px] md:w-10 lg:w-[45px]">
          <img
            src={DownArrow}
            alt=""
            className="color-#5a7272 rotate-180 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
      <footer>
        <img src={Footer} alt="" className="w-full" />
      </footer>
    </div>
  );
}

export default App;
