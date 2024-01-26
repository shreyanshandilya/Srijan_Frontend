import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Nav from "../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer.jsx";
import { Carousel } from "flowbite-react";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import AlertDialog from "./Alert.jsx";
import useRazorpay from "react-razorpay";
import Srijanmage from "../assets/SrijanLogo.png";
import FooterT from "../components/Footer.jsx";

function Merchandise() {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();

  const [beta, setData] = useState({
 
    tshirtSize: "S",
    hoodieSize: "S",
    address: "",
    quantity: 0,
    type: "Hoodie",
  });
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState("");
  const [outside, setOutside] = useState(false);
  const handleChangeInput = (event) => {
    setData({ ...beta, [event.target.id]: event.target.value });
  };

  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const currency = "INR";
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const amount = beta.quantity * (beta.type === "Hoodie" ? 799 : beta.type === "Tshirt + Hoodie Combo" ? 1099 :399) * 100;
    // const amount = 100;
    // const amount = 100;
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
          "http://srijan-prod.onrender.com/api/order/validate",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              ...body,
              hoodieSize: beta.hoodieSize,
              tshirtSize: beta.tshirtSize,
              quantity: beta.quantity,
              addresss: beta.address,
              type: beta.type,
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
              src="https://res.cloudinary.com/dqwln5hhs/image/upload/v1706258511/WhatsApp_Image_2024-01-25_at_09.18.15_1_nfgk1u.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            <img
              src="https://res.cloudinary.com/dqwln5hhs/image/upload/v1706258526/WhatsApp_Image_2024-01-25_at_09.18.15_hoaxwu.jpg"
              alt="..."
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
            {/* <img
            src="https://res.cloudinary.com/dol5ar3iv/image/upload/v1702967509/fotofreaks_iitism_1675676767_3032118946798465237_5457821429_qldckp.jpg"
            alt="..."
          /> */}
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
          <h1 className="mb-2 text-6xl font-bold tracking-tight leading-none text-[#dad3a5] md:text-7xl titleHeading">
            Merchandise
          </h1>
          <h1 className="my-4 text-md font-semibold tracking-tight leading-none text-[#efede0] md:text-xl lg:text-2xl ">
            <br />
            INR 399 / T-Shirt
            <br />
            <br />
            INR 799 / Hoodie
            <br />
            <br />
            <div class="text-indigo-500">Special Republic Day Offer</div>
            <div class="text-white">
              (T-Shirt + Hoodie) for INR <s class="text-orange-600">1199</s>{" "}
              <span class="text-green-500">1099</span> Only
            </div>
            <br />
            Get Rs 100 off on the combo!
          </h1>

          <div className="flex flex-col space-y-4 my-10 sm:flex-row sm:justify-center sm:space-y-0">
            {localStorage.getItem("token") == null ||
            localStorage.getItem("token") == undefined ? (
              <div>
                <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-[#dad3a5] md:text-3xl lg:text-4xl ">
                  Kindly register or login to buy merchandise.
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
              <div>
                {!open && (
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer mb-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(!open);
                      setData({
                        tshirtSize: "S",
                        hoodieSize: "S",
                        address: "",
                        quantity: 1,
                        type: "Tshirt + Hoodie Combo",
                      });
                    }}
                  >
                    Buy Combo
                  </motion.div>
                )}
                <br />
                <motion.div
                  whileHover={{ y: -10 }}
                  className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer"
                  onClick={handleClick}
                >
                  {open ? "Close" : "Buy!"}
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
        {open && (
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            onSubmit={paymentHandler}
            className="max-w-sm mx-auto rounded-lg bg-[#dad3a5] shadow-xl px-5 py-5 backdrop-blur-lg"
          >
            <p>
              <strong>Guidelines for online transaction : </strong>
              <ul className="bg-[#514c08]/60 p-3 my-2 rounded-lg text-white">
                <li className="m-3">
                  As of now, kindly use your
                  <br /> UPI ID in order to pay.
                </li>
                <li>Kindly keep your transaction details with you.</li>
                <li>
                  Do not reload or go back to the page when payment is in
                  progress.
                </li>
              </ul>
              <br></br>
            </p>
            <div className="justify-center items-center mb-4">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Address
              </label>
              <input
                type="string"
                id="address"
                onChange={handleChangeInput}
                value={beta.address}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                placeholder="Your Address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tshirtSize"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Available Merchandise
              </label>
              <select
                id="type"
                onChange={handleChangeInput}
                value={beta.type}
                placeholder="Hoodie"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                required
              >
                <option value="Hoodie">Hoodie</option>
                <option value="Tshirt">Tshirt</option>
                <option value="Tshirt + Hoodie Combo">
                  Tshirt + Hoodie Combo
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="0"
                onChange={handleChangeInput}
                value={beta.quantity}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                placeholder="Eg. 1, 2, 3..."
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="tshirtSize"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select your size {beta.type=="Tshirt + Hoodie Combo"&&"(Tshirt)"}
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
            {beta.type == "Tshirt + Hoodie Combo" && (
              <div className="mb-4">
                <label
                  htmlFor="hoodieSize"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select your size (Hoodie)
                </label>
                <select
                  id="hoodieSize"
                  onChange={handleChangeInput}
                  value={beta.hoodieSize}
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
            )}

            <div className="max-w-lg mx-auto mb-2">
              <strong>
                <div className="mt-4">
                  Payable Amount: INR{" "}
                  {beta.type === "Hoodie"
                    ? 799 * beta.quantity
                    : beta.type === "Tshirt + Hoodie Combo" ? 1099*beta.quantity : 399*beta.quantity}
                </div>
              </strong>
              (For delivery outside IIT ISM, optimal delivery charges will be
              taken at the time of delivery)
            </div>
            <div className="flex mb-4" style={{ alignItems: "flex-start" }}>
              <div
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
