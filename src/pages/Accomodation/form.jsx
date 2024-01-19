import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Nav from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer.jsx";
import { Carousel } from "flowbite-react";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
// import AlertDialog from "./Alert.jsx";
import useRazorpay from "react-razorpay";
// import Srijanmage from "../assets/SrijanLogo.png";
import FooterT from "../../components/Footer.jsx";
import { useParams } from "react-router-dom";
function Merchandise() {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const { type } = useParams();
  const Price={
    "bronze":1199,
    "silver":1499,
    "gold":1799,
    "platinum":1999
  }
  const [beta, setData] = useState({
    Email:"",
    Package:type,
    tshirtSize: "S",
    Idproof:"",
   
    Gender: "",
    
  });
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  const [loading, setLoading] = useState(false);
  // const [img, setImg] = useState("");
  const [token, setToken] = useState("");

  // const token = localStorage["token"];

  const [outside, setOutside] = useState(false);
  const handleChangeInput = (event) => {
    setData({ ...beta, [event.target.id]: event.target.value });
    // console.log(beta);
  };
  
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);

    
    console.log(open);
  };

  const currency = "INR";
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const amount = Price[type];

    console.log(amount);
    const response = await toast.promise(
      fetch("https://srijan2024.onrender.com/api/order", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          amount,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage["token"]}`,
        },
      }),
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        pending: "Placing Order",

        error: "Order failed to process please try again",
      }
    );

    if (!response) {
      toast.error("Probelem in Processing Payment", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    const order = await response.json();

    console.log(order);

    var options = {
      key: "rzp_live_hCIa25zbx0icRX",
      amount,
      currency,
      name: "Srijan",
      description: "Merchandise Payment",
      image: Srijanmage, // add srih=jan image
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        var validateRes = await fetch(
          "https://srijan2024.onrender.com/api/order/validate",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              ...body,
              tshirtSize: beta.tshirtSize,
              quantity: beta.quantity,
              addresss: beta.address,
              type : beta.type,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage["token"]}`,
            },
          }
        );
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#000",
      },
    };
    let rzp1 = new Razorpay(options);

    rzp1.on("payment.success", function (response) {
      toast.success("Order Placed", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log("Payment success event:", response);
    });

    rzp1.on("payment.failed", function (response) {
      toast.error(response.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
    console.log(rzp1);

    rzp1.open();
    setLoading(false);
    e.preventDefault();
    setData({
      tshirtSize: "S",
      address: "",
      quantity: 0,
      type: "Hoodie",
    });
  };

  return (
    <div
      className="bg-[#090d06] jusitfy-center items-center mt-0 h-full w-full"
      style={{ marginTop: "5vh" }}
    >
      <Nav />
      <center>
        <div className="h-[60vh]">
          <Carousel>
          <img
              src="https://res.cloudinary.com/dkdratnao/image/upload/v1705433458/hoodieimg_tr5fia.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/dkdratnao/image/upload/v1705303858/Slide_16_9_-_2_efjkce.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />

            <img
              src="https://res.cloudinary.com/dkdratnao/image/upload/v1705303857/Slide_16_9_-_3_ijz7nd.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/dkdratnao/image/upload/v1705303854/Slide_16_9_-_1_iljfez.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/ds6u0jd3x/image/upload/v1705477984/HoMan/subemislrjntbvxc3omj.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/ds6u0jd3x/image/upload/v1705477951/HoMan/mbtrx9mzmp1xppy1jnkp.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          
          </Carousel>
        </div>
      </center>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center flex flex-col sm:flex-row justify-center items-center lg:py-16">
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ duration: 1 }}
        >
          <h1 className="mb-2 text-4xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-5xl lg:text-6xl ">
          {`${type.toLocaleUpperCase()} Package`}
          </h1>
          <h1 className="my-2 text-2xl font-semibold tracking-tight leading-none text-[#efede0] md:text-3xl lg:text-4xl ">
           <br/> INR {Price[type]} only <br/> 
          </h1>

          <div className="flex flex-col space-y-4 my-10 sm:flex-row sm:justify-center sm:space-y-0">
            {localStorage.getItem("token") == null ||
            localStorage.getItem("token") == undefined ? (
              <div>
                <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-[#dad3a5] md:text-3xl lg:text-4xl ">
                  Kindly register or login to buy Packages for the event.
                </h1>
                <div className="flex justify-center items-center gap-x-6">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </motion.div>
                </div>
              </div>
            ) : (
               
          <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={paymentHandler}
          className=" mx-auto rounded-lg bg-[#dad3a5] shadow-xl px-5 py-5 backdrop-blur-lg"
        >
          <p>
            <strong>Guidelines for online transaction : </strong>
            <ul className="bg-[#514c08]/60 p-3 my-2 rounded-lg text-white">
              <li className="m-3">
                As of now, kindly use your
                <br /> UPI ID in order to pay.
              </li>
              <li>Kindly keep your transaction details with you.</li>
              <li>Do not reload or go back to the page when payment is in progress.</li>
            </ul>
            <br></br>
          </p>
          
          <div className="justify-center items-center mb-4">
           
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-[#040d10]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChangeInput}
              value={beta.Email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tshirtSize"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <select
              id="type"
              onChange={handleChangeInput}
              value={beta.Gender}
              placeholder="Gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          

         {(type=="platinum"||type=="gold")&&<div className="mb-4">
            <label
              htmlFor="tshirtSize"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select your size for Merchandise
            </label>
            <select
              id="tshirtSize"
              onChange={handleChangeInput}
              value={beta.tshirtSize}
              placeholder="Eg. S, M"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              required
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
         }

          <div className="max-w-lg mx-auto mb-2">
            
            <strong>
              <div className="mt-4">
                Payable Amount: INR{" "}
                {Price[type]}
              </div>
            </strong>
            (For delivery outside IIT ISM, optimal delivery charges will be taken at the time of delivery)
          </div>
          <div className="flex mb-4" style={{ alignItems: "flex-start" }}>
            <div
              // type="checkbox"
              // onClick={() => {
              //   setOutside(!outside);
              // }}
              style={{
                margin: "4px",
                color: "#020508",
                backgroundColor: "#020508",
              }}
            />{" "}
            
            Once an order has been placed, you can view them in the profile
            section. Please keep your transaction details with you.
          </div>

          <button
            type="submit"
            className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {loading ? "Placing Order" : "Submit"}
          </button>
        </motion.form>
            )}
          </div>
        </motion.div>
         
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <FooterT />
    </div>
  );
}

export default Merchandise;
