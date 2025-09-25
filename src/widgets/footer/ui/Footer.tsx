import logo from "@/shared/assets/footer_logo.svg";
import google from "@/shared/assets/google_play.svg";
import apple from "@/shared/assets/app_store.svg";
import { icons } from "@/shared/assets/index";
import { useNavigate } from "react-router-dom";

const [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
] = icons;

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-white dark:bg-[#111111] text-black dark:text-white py-[30px] max-h-[240px]">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
        <div className="flex flex-col">
          <img
            className="w-[55px] h-[36px] mb-[48px]"
            onClick={() => navigate("/")}
            src={logo}
            alt=""
          />
          <img className="w-[150px] h-[44px] mb-2" src={google} alt="" />
          <img className="w-[150px] h-[44px]" src={apple} alt="" />
        </div>
        <div>
          <h4 className="font-bold mb-5">About us</h4>
          <ul className=" flex flex-col gap-4 text-[#A1A1A1] ">
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon1} alt="" />
              Public offer
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              {" "}
              <img src={Icon2} alt="" />
              Advertising
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon3} alt="" />
              F.A.Q
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon4} alt="" />
              Contacts
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-5">Categories</h4>
          <ul className=" flex flex-col gap-4 text-[#A1A1A1] ">
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon5} alt="" />
              Movie
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              {" "}
              <img src={Icon6} alt="" />
              Theater
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon7} alt="" />
              Concerts
            </li>
            <li className="flex gap-2 items-center hover:text-[#C61F1F] hover:underline">
              <img src={Icon8} alt="" />
              Sport
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact us</h4>
          <p className="text-[#C61F1F] text-[20px] font-medium mb-[54px]">
            +998 (95) 897-33-38
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <h4 className="text-[16px] font-medium">Social media</h4>
            <div className="flex gap-4">
              <img src={Icon9} alt="" />
              <img src={Icon10} alt="" />
              <img src={Icon11} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
