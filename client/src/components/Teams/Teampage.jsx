import AvatarCard from "./avatar_card";
import { teams } from "./teams_data.jsx";

export const Teampage = () => {
  return (
    <>
      <div className="pt-7 flex justify-center">
        <h1 className="flex justify-center text-2xl mt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-4xl">
          Convener
        </h1>
      </div>
      <sectionTeam>
        <div class="max-w-sm border border-gray-200 mb-11 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="inner-box bg-[#dad3a5]">
              <div class="image-box">
                <div className="flex justify-center p-5">
                  <img
                    class="rounded-[100%]"
                    src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703957539/prof_convener_mojstc.jpg"
                    alt=""
                  />
                </div>
                <div class="p-5">
                  <a>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Prof. Sanjoy Mandal
                    </h5>
                  </a>
                  <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                    Dept of Electrical Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </sectionTeam>

      <sectionTeam className="bg-[#dad3a5]">
        <h1 className="pt-20 flex justify-center mb-8 text-2xl mt-10 font-bold tracking-tight leading-none text-[#202731] md:text-4xl">
          Co-Convener
        </h1>
        <div className="md:flex">
          <div class="max-w-sm border border-gray-200 mb-11 rounded-lg shadow bg-[#202731]">
            <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box bg-[#202731]">
                <div class="image-box w-[280px]">
                  <div className="flex justify-center p-5">
                    <img
                      class="rounded-[100%]"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704404941/Co-convenor_xoepnr.png"
                      alt=""
                    />
                  </div>
                  <div class="p-5">
                    <a>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#dad3a5] dark:text-white">
                      Prof. Arijit Baral
                      </h5>
                    </a>
                    <p class="mb-3 font-semibold text-[#69644e] dark:text-gray-400">
                      Dept of Electrical Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm border border-gray-200 mb-11 rounded-lg shadow bg-[#202731]">
            <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box bg-[#202731]">
                <div class="image-box w-[280px]">
                  <div className="flex justify-center p-5">
                    <img
                      class="rounded-[100%]"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704403824/Co-convenor2_qp0smn.png"
                      alt=""
                    />
                  </div>
                  <div class="p-5">
                    <a>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#dad3a5] dark:text-white">
                      Prof. Suresh K Yatirajula
                      </h5>
                    </a>
                    <p class="mb-3 font-semibold text-[#69644e] dark:text-gray-400">
                    Dept of Chemical Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </sectionTeam>

      <div className="bg-[#202731]">
        <h1 className="flex justify-center mb-8 text-2xl pt-10 font-bold tracking-tight leading-none text-[#dad3a5] md:text-4xl">
          Core-Team
        </h1>
        <div className="text-white">
          <div className="teams flex-wrap flex pt-[80px] w-full">
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
  );
};
