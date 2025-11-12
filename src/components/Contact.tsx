import DribbleLogo from "../assets/logos/dribble.webp";
import LinkedIn from "../assets/logos/linkedin.png";
import Instagram from "../assets/logos/instagram.png";
import Behance from "../assets/logos/behance.png";
import Facebook from "../assets/logos/facebook.png";
function Contact() {
  return (
    <div className="flex justify-center ">
      <ul className="flex flex-col text-start font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl pb-10 gap-3  w-200">
        <li className="cursor-pointer flex border-b pb-4 justify-between ">
          <span>Dribble</span>
          <img
            src={DribbleLogo}
            alt=""
            className="w-10 h-10 lg:w-[50px]  lg:h-[50px]"
          />
        </li>
        <li className="cursor-pointer flex border-b pb-4 justify-between ">
          <span>LinkedIn</span>
          <img
            src={LinkedIn}
            alt=""
            className="w-10 h-10 lg:w-[50px] lg:h-[50px]"
          />
        </li>
        <li className="cursor-pointer flex border-b pb-4 justify-between ">
          <span>Instagram</span>
          <img
            src={Instagram}
            alt=""
            className="w-10 h-10 lg:w-[50px] lg:h-[50px]"
          />
        </li>
        <li className="cursor-pointer flex border-b pb-4 justify-between ">
          <span>Behance</span>
          <img
            src={Behance}
            alt=""
            className="w-10 h-10 lg:w-[50px] lg:h-[50px]"
          />
        </li>
        <li className="cursor-pointer flex border-b pb-4 justify-between ">
          <span>Facebook</span>
          <img
            src={Facebook}
            alt=""
            className="w-10 h-10 lg:w-[50px] lg:h-[50px]"
          />
        </li>
      </ul>
    </div>
  );
}

export default Contact;
