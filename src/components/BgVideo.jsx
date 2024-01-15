import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPreload from "../assets/VideoPreload.mp4";
function BgVideo({setLoader}) {
  const navigate = useNavigate();
  const myCallback = () => {
    setLoader(false);
    navigate("/");
  }
  return (
    <video id="myVideo" className="h-100vh w-screen h-screen object-cover absolute z-10" onEnded={() => myCallback()} autoPlay  muted>
      <source src={VideoPreload} type="video/mp4" />
    </video>
  );
}

export default BgVideo;
