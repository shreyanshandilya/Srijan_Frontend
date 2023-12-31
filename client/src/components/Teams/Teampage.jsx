import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.jsx";

export const Teampage = ()=>{
    return (
        <>
      <div className="h-auto bg-black p-7 flex justify-center">
        <h1 className="pt-20 flex justify-center mb-8 text-2xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-2xl lg:text-2xl">
          Convener
        </h1>
      </div>
  
      <sectionTeam className=" text-[#c9bc57]">
        <h1>Photos!</h1>
      </sectionTeam>
  
      <sectionTeam className="red">
        <h1 className="pt-20 flex justify-center mb-8 text-2xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-2xl lg:text-2xl">
          Co-Convener
        </h1>
        <h1>Photos!</h1>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </sectionTeam>
  
      <div className="">
        <h1 className="flex justify-center mb-8 text-2xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-2xl lg:text-2xl">
          Core-Team
        </h1>
        <div className="text-white">
        <div
        className="teams"
        style={{
          paddingTop: "80px",
          display: "flex",
          flexWrap: "wrap",
        //   background: "#0d0c06",
        }}
      >
        {teams.map((person, index) => (
          <AvatarCard key={index} {...person} />
        ))}
      </div>{" "}
        </div>
      </div>
  
      <div className="spacer layer2 flip"></div>
  
      <sectionTeam className="pink">
        <div className="blob-content">
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] flex justify-center mb-8 text-2xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-2xl lg:text-2xl">
          Developers
        </h1>
        <p>Photos</p>
        </div>
      </sectionTeam>
  
      <div className="spacer layer2 "></div>
      </>
    )
}