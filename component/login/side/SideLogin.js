// import LoginSide from "../images/svg/login_side.svg";
// import LoginSide from "../images/png/login_side.png";
import Loginstyles from "../../../styles/Login.module.css";

import { useEffect } from "react";

export default function Login() {
  return (
    <div
      className={`w-1/2 h-full hidden lg:flex flex-col items-center justify-center p-20 text-center fixed left-0 top-0 h-screen ${Loginstyles.bg_green_710}`}
    >
      <img src="/images/login_side.svg" alt="login_side"></img>
      <h1 className="text-5xl uppercase text-white font-black mt-4 GrotesqueFamily">
        Planet Nullcast
      </h1>
      <p className={`text-lg mt-3 ${Loginstyles.text_gray_710}`}>
        Get the latest scoop from the world of development with the latest news,
        hacks, tricks, and more on javascript, machine learning, enterprise
        architecture and more.
      </p>
    </div>
  );
}
