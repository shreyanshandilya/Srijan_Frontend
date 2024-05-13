import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Nav from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Srijanmage from "../../assets/SrijanLogo.png";
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

  const Price = {
    bronze: 1199,
    silver: 1499,
    gold: 1799,
    platinum: 1999,
    basic: 799,
    essential: 699,
  };
  const [beta, setData] = useState({
    // Package:type.toLowerCase(),
    tshirtSize: "S",
    Idproof: "",
    address: "",
    Gender: "Male",
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

    // console.log(open);
  };

  const currency = "INR";
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const amount = Price[type.toLowerCase()] * 100;

    // console.log(amount);
    const response = await toast.promise(
      fetch("https://srijan-prod.onrender.com/api/order", {
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

    // console.log(order);

    var options = {
      key: "rzp_live_hCIa25zbx0icRX",
      amount,
      currency,
      name: "Srijan",
      description: "Merchandise Payment",
      image: Srijanmage,
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        var validateRes = await fetch(
          "https://srijan-prod.onrender.com/api/user/package",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              ...body,
              tshirtSize: beta.tshirtSize,
              Gender: beta.Gender,
              address: beta.address,
              Idproof: beta.Idproof,
              pacakage: type.toLowerCase(),
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
      // console.log("Payment success event:", response);
    });

    rzp1.on("payment.failed", function (response) {
      toast.error(response.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
    // console.log(rzp1);

    rzp1.open();
    setLoading(false);
    e.preventDefault();
  };

  return (
    <div
      className="bg-[#090d06] jusitfy-center items-center mt-0 h-full w-full"
      style={{ marginTop: "5vh" }}
    >
      <Nav />
      <center>
        <div className="h-[80vh]">
          <Carousel>
            <img
              src="          https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967604/fotofreaks_iitism_1675597389_3031453081190844097_5457821429_pi6mct.jpg
              "
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="          https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967578/fotofreaks_iitism_1675597389_3031453081199233841_5457821429_e5n33e.jpg
              "
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967496/fotofreaks_iitism_1675676767_3032118946806802425_5457821429_pcq54i.jpg
              "
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </Carousel>
        </div>
      </center>
      <div className="my-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-[100px] mb-5 items-center text-3xl md:text-6xl font-bold text-[#bab9b7]"
        >
          ACCOMODATION <hr />
        </motion.div>
        <a href="https://forms.gle/Sbg9zvQ19tuwiYKz7">
          {" "}
          <div className="flex justify-center items-center gap-x-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer"
            >
              Buy
            </motion.div>
          </div>
        </a>
      </div>
      <FooterT />
    </div>
  );
}

export default Merchandise;
