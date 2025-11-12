import Logo from "../assets/logo.svg";
import Lightmode from "../assets/light-mode-svgrepo-com.svg";
import SoundMode from "../assets/sound-2-svgrepo-com.svg";
import Hamburger from "../assets/hamburger-svgrepo.svg";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 bg-transparent text-white">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-5 w-auto" />
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <img
            src={Lightmode}
            alt="Toggle Theme"
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition bg-[#3A4244] rounded-full "
          />
        </li>
        <li>
          <img
            src={SoundMode}
            alt=""
            className="h-6 w-6 cursor-pointer hover:opacity-80 transition bg-[#3A4244] rounded-full"
          />
        </li>
      </ul>
      <div className="text-[#B3C1BF] flex items-center gap-2">
        <span>MENU</span>
        <img
          src={Hamburger}
          alt=""
          className="h-10 w-10 p-1 cursor-pointer hover:opacity-80 transition bg-[#3A4244] rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
