import AvatarCard from "./avatar_card";
import teams from "./Teams_D.jsx";

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
          <div className="grid grid-cols-2">
            <div class="max-w-sm border border-gray-200 mb-11 mx-4 rounded-lg shadow bg-[#202731]">
              <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="inner-box bg-[#202731]">
                  <div class="image-box w-[280px] h-[450px]">
                    <div className="flex justify-center p-5">
                      <img
                        class="rounded-[100%]"
                        width={"200px"}
                        height={"200px"}
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
            <div class="max-w-sm border border-gray-200 mx-4 mb-11 rounded-lg shadow bg-[#202731]">
              <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="inner-box bg-[#202731]">
                  <div class="image-box w-[280px] h-[450px]">
                    <div className="flex justify-center p-5">
                      <img
                        class="rounded-[100%]"
                        width={"200px"}
                        height={"200px"}
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
        </div>
        <div>
          <h1 className="pt-20 flex justify-center mb-8 text-2xl mt-10 font-bold tracking-tight leading-none text-[#202731] md:text-4xl">Treasurer</h1>
          <div class="max-w-sm border border-gray-200 mx-4 mb-11 rounded-lg shadow bg-[#202731]">
            <div class="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div class="inner-box bg-[#202731]">
                <div class="image-box w-[280px] h-[450px]">
                  <div className="flex justify-center p-5">
                    <img
                      class="rounded-[100%]"
                      width={"200px"}
                      height={"200px"}
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704473056/madhulika_gupta_ye3xav.jpg"
                      alt=""
                    />
                  </div>
                  <div class="p-5">
                    <a>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#dad3a5] dark:text-white">
                        Prof. Madhulika Gupta
                      </h5>
                    </a>
                    <p class="mb-3 font-semibold text-[#69644e] dark:text-gray-400">
                      Dept of Chemistry and Chemical Biology
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
          <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] flex justify-center mb-8 text-2xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-4xl">
            Developers
          </h1>
          <div class="typebody">
            <div class="content">
              <div className="team grid md:grid-cols-2 grid-cols-1">
                <div class="member co-frontend">
                  <div class="thumb ">
                    <img
                      className="object-cover"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704435839/harshphoto_kzyxkq.jpg"
                    />
                  </div>
                  <div class="description">
                    <h3>Harsh Singh</h3>
                    <p>
                      <br />
                      <br />
                      <a
                        className="m-4"
                        href="https://www.instagram.com/hharsha_s/"
                      >
                        @instagram
                      </a>
                      <a href="https://www.linkedin.com/in/harsh-singh-69523a193/">
                        @linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div class="member co-frontend">
                  <div class="thumb">
                    <img
                      className="object-cover"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704435839/ratul_bhpxc1.jpg"
                    />
                  </div>
                  <div class="description">
                    <h3>Ratul Saha</h3>
                    <p className="">
                      <br />
                      <br />
                      <a
                        className="m-4"
                        href="https://www.instagram.com/inhumane_bloke/"
                      >
                        @instagram
                      </a>
                      <a href="https://www.linkedin.com/in/ratul-saha-047066254/">
                        @linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div class="member co-frontend ">
                  <div class="thumb">
                    <img
                      className="object-cover"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704435839/manav_if1tvj.jpg"
                    />
                  </div>
                  <div class="description">
                    <h3>Manav Sharma</h3>
                    <p className="">
                      <br />
                      <br />
                      <a
                        className="m-4"
                        href="https://www.instagram.com/mysticalmanav?igsh=OGQ5ZDc2ODk2ZA=="
                      >
                        @instagram
                      </a>
                      <a href="https://www.linkedin.com/in/manav-sharma-263092250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        @linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div class="member co-backend">
                  <div class="thumb">
                    <img
                      className="object-cover"
                      src="https://res.cloudinary.com/dkdratnao/image/upload/v1704435839/siddhart_opbrxo.jpg"
                    />
                  </div>
                  <div class="description">
                    <h3>Siddharth Aggarwal </h3>
                    <p className="">
                      <br />
                      <br />
                      <a
                        className="m-4"
                        href="https://www.instagram.com/siddharth_aggarwal25?igsh=MXNxdmcxc245dzNmag=="
                      >
                        @instagram
                      </a>
                      <a href="https://www.linkedin.com/in/siddharth-aggarwal-474aa4255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        @linkedin
                      </a>
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <div class="member co-backend">
                    <div class="thumb">
                      <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dkdratnao/image/upload/v1704435839/prakkharSri_yxwzbx.jpg"
                      />
                    </div>
                    <div class="description">
                      <h3>Prakhar Srivastava</h3>
                      <p className="">
                        <br />
                        <br />
                        <a
                          className="m-4"
                          href="https://www.instagram.com/prakhar_227?igsh=MWF1Z2N5cHVld3gxMw=="
                        >
                          @instagram
                        </a>
                        <a href="https://www.linkedin.com/in/prakhar-srivastava-556651255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          @linkedin
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </sectionTeam>

      <div className="spacer layer2 "></div>
    </>
  );
};
