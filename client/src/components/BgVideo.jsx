// import React from "react";
// import VideoPreload from "../assets/VideoPreload.mp4"
// function BgVideo () {
//     return (
//         <div className="">
//             <div>
//                 <video src={VideoPreload} autoPlay loop muted />
//                 {/* <div className="h-screen w-screen"></div> */}
//             </div>
//         </div>
//     )
// }
// export default BgVideo;
import React from "react";
import VideoPreload from "../assets/VideoPreload.mp4";
function BgVideo({setLoad}) {
  const myCallback = () => setLoad(false);
  return (
    <video id="myVideo" className="h-100vh w-screen h-screen object-cover absolute z-10" onEnded={() => myCallback()} autoPlay  muted>
      <source src={VideoPreload} type="video/mp4" />
    </video>
  );
}

export default BgVideo;
