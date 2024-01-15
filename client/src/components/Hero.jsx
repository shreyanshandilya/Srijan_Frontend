import React, { useRef } from "react";
// import gsap from 'gsap'
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, Element } from "react-scroll";
import Countdown from "./asset-components/Countdown";
import logo from "./Footer/srijan Light (3).png";
import Nav from "./Navbar/navbar";
import bgSponsor from "../assets/color2.jpg";
import image from "../assets/image4.png";
// import Nav from "../components/Navbar/navbar"
function Hero() {
  const sponsor = useRef(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [""],
  });
  const scrollSponsor = () => {};
  const bgAnimate = {
    hidden: {
      clipPath: "polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };

  const textAnimate1 = {
    hidden: {
      y: "50px",
      opacity: 0,
      color: "#0f0f0f",
    },
    show: {
      y: 0,
      opacity: 1,
      color: "#ffffff",
      transition: {
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,

      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 3,
      },
    },
  };

  // const scrollHandler = (sponsor) => {
  //     window.scrollTo({top:sponsor.current.offsetTop, behavior:"smooth"});
  // }
  return (
    <>
      <Element name="hero">
        <Nav refer={sponsor} />
        <motion.div
          variants={bgAnimate}
          initial="hidden"
          animate="show"
          className="max-w-screen h-screen flex justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('assets/image4.png')] bg-[#c9bc57] bg-blend-multiply"
          >
            <motion.div className="px-4 grid grid-row-3 gap-1 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <motion.h1
                variants={textAnimate1}
                initial="hidden"
                animate="show"
                className="text-6xl flex justify-center font-extrabold tracking-tight leading-none uppercase text-white md:text-5xl lg:text-6xl"
              >
                <img src={logo} width="250px" />
              </motion.h1>
              <motion.p
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="mb-5 overflow-x-hidden text-base font-normal text-[#efede0] lg:text-lg sm:px-16 py-5 lg:px-48"
              >
                An Intersection of Cultures and Communities <br />
                The Socio-Cultural Fest of IIT (ISM) Dhanbad is back!
              </motion.p>
              <motion.p
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="h-22 overflow-x-hidden text-base font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48"
              >
                <Countdown />
              </motion.p>
              <motion.span
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                className="h-auto  overflow-y-hidden my-5 overflow-x-hidden flex justify-center text-lg font-semibold text-[#fbe10e] lg:text-2xl sm:px-5 bg-opacity-50 backdrop-blur-xl"
              >
                February 2nd to 4th, 2024
              </motion.span>
              <motion.button
                variants={textAnimate2}
                initial="hidden"
                animate="show"
                type="button"
              >
                <Link
                  to="sponsor"
                  smooth={true}
                  spy={true}
                  offset={100}
                  duration={5000}
                >
                  <div id="section07" className="relative">
                    <a>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="bg-gray-900 grid grid-cols-3 gap-4 max-w-screen"></div>
        {/* <div className="max-w-screen p-5 grid md:p-10 grid-cols-1 gap-5 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img className="" src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img className="outline-none border-none " src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
          <img src=" " alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-2">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
          <img src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-2 row-span-1">
          <img className="outline-none" src="" alt="" />
        </div>
        <div className="bg-transparent break-inside-avoid rounded-lg col-span-1 row-span-1">
          <img src="" alt="" />
        </div>
      </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 py-5 bg-[#17160e]">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967638/fotofreaks_iitism_1675510867_3030727283232442698_5457821429_ntn445.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967635/fotofreaks_iitism_1675751380_3032744844446654362_5457821429_wdblrk.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967634/fotofreaks_iitism_1675510867_3030727283232278412_5457821429_bncuph.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967632/fotofreaks_iitism_1675510867_3030727283215629849_5457821429_rdiys1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967477/fotofreaks_iitism_1675751379_3032744844127884839_5457821429_clavzn.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967631/fotofreaks_iitism_1675597389_3031453081258077365_5457821429_fclfrl.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967623/fotofreaks_iitism_1675510867_3030727283148499964_5457821429_e2sk8e.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967563/fotofreaks_iitism_1675751379_3032744844136108526_5457821429_ejmxch.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967522/fotofreaks_iitism_1675676767_3032118946815236599_5457821429_g7qhtw.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140034780_5457821429_gxrzzk.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967625/fotofreaks_iitism_1675510867_3030727283140053768_5457821429_f8ul1t.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967533/fotofreaks_iitism_1675597389_3031453081182662787_5457821429_zbs9ev.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <motion.div className="md:text-8xl text-4xl font-bold bg-[#090d06] flex justify-center items-center py-10 text-[#dad3a5]">
          Coming Soon!
        </motion.div>
        <Element name="sponsor">
          <div
            id="sponsor"
            ref={sponsor}
            className="max-w-screen p-5 md:p-10  bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(" + bgSponsor + ")" }}
          >
            <h1 className="flex md:text-6xl text-[#efede0] font-bold text-2xl justify-center items-center">
              Past Sponsors
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 flex-wrap gap-x-5 gap-y-10 p-10 rounded-lg">
              <motion.div
                // initial={{ y: 20, x: -10 }}
                // whileInView={{ x: 0, y: 0 }}
                // transition={{ duration: 1 }}
                className="col-span-full flex justify-center items-center backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center"
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703859538/ccl_civw5b.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: -30 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 0.8 }}
                className="col-span-2 flex justify-center items-center p-3 md:p-5 backdrop-blur-2xl bg-opacity-60 rounded-lg bg-no-repeat bg-contain bg-center"
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703859374/adani_wmvuqc.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 20 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 0.8 }}
                className="col-span-2 flex justify-center items-center backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5  bg-no-repeat bg-contain bg-center"
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995308/bccl_w30lbh.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ y: 10 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.2 }}
                className='col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/jh_tourism_kshayx.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 10 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 1.2 }}
                className='col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/sbi_ord5zl.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 30 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 1.5 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/secl_r1vmoe.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ y: -40 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.1 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-auto bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703837517/ncl_hn2fij.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 30 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 1.8 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/essar_oil_xok7pz.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: -10 }}
                // whileInView={{ x: 0 }}
                // transition={{ duration: 1.1 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/tata_steel_s8nw20.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ y: 30 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.3 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/ongc_lcwi8k.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 30, y: 20 }}
                // whileInView={{ x: 0, y: 0 }}
                // transition={{ duration: 1.6 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/coal_india_eucoix.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 20, y: -5 }}
                // whileInView={{ x: 0, y: 0 }}
                // transition={{ duration: 0.8 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/skoda_p0wqmu.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                // initial={{ x: 10, y: -5 }}
                // whileInView={{ x: 0, y: 0 }}
                // transition={{ duration: 1 }}
                className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'
              >
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/canara_sye86r.png"
                  alt=""
                />
              </motion.div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/sail_rzbrgs.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/powergrid_ysetpi.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/mg_xuoimg.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/dehaat_io8otn.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/parklane_n7rljx.jpg"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995310/lazzy_frog_wjwudq.jpg"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703006562/coal_capital_jf6juf.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1703837361/bahamas_qlehol.jpg"
                  alt=""
                />
              </div>
              <div className='col-span-1 md:col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995309/eng_parcel_zdfb7v.png"
                  alt=""
                />
              </div>
              <div className='col-span-1 md:col-span-2 flex justify-center items-center bg-[url("")] backdrop-blur-lg bg-opacity-60 rounded-lg p-3 md:p-5 bg-no-repeat bg-contain bg-center'>
                <img
                  className="rounded"
                  src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1702995311/realme_cgy4n5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Element>
      </Element>
    </>
  );
}
export default Hero;
// export Hero
