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
    // name: "",
    // email: "",
    // mobileNumber: "",
    // token: "",
    // outsider: false,
    tshirtSize: "S",
    address: "",
    quantity: 0,
    type: "Hoodie",
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
  // const handleImg = (event) => {
  //   setImg(event.target.files[0]);
  // };

  // const handleMerchantSubmit = async (e) => {
  //   e.preventDefault();
  //   if (loading) {
  //     return;
  //   }
  //   if (
  //     localStorage.getItem("token") == null ||
  //     localStorage.getItem("token") == undefined
  //   ) {
  //     toast.warning("Register or Sign-in to order merchandise", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //     setTimeout(() => {
  //       navigate("/register");
  //     }, 3000);
  //     return;
  //   }
  //   setLoading(true);
  //   const body = new FormData();
  //   body.append("file", img);
  //   body.append("upload_preset", "windsanctuary");

  //   await fetch("https://api.cloudinary.com/v1_1/dkdratnao/image/upload", {
  //     method: "post",
  //     body: body,
  //   })
  //     .then((res) => res.json())
  //     .then(async (body) => {
  //       const data = {
  //         imageURL: body.secure_url,
  //         tshirtSize: beta.tshirtSize[0],
  //         address: beta.address[0],
  //         quantity: beta.quantity[0],
  //         // token: token,
  //       };
  //       console.log(data);
  //       const response = await toast.promise(
  //         fetch("https://srijan2024.onrender.com/api/purchase", {
  //           method: "POST",
  //           mode: "cors",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${localStorage["token"]}`,
  //           },
  //           body: JSON.stringify(data),
  //         }),
  //         {
  //           position: toast.POSITION.BOTTOM_RIGHT,
  //           pending: "Placing Order",
  //           success: "Order Placed",
  //           error: "Order failed to process please try again",
  //         }
  //       );
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Probelem in uploading image", {
  //         position: toast.POSITION.BOTTOM_RIGHT,
  //       });
  //     });

  //   setLoading(false);
  //   setData({ tshirtSize: "", address: "", quantity: "" });
  // };

  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);

    // if (open) {
    //   animate(scope.current, { x: 10 }, { duration: 1 });
    // }
    console.log(open);
  };

  const currency = "INR";
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const amount = beta.quantity * (beta.type === "Hoodie" ? 799 : 399) * 100;

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
            <br /> INR 399 / T-Shirt <br /><br /> INR 799 / Hoodie
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
                <li>Do not reload or go back to the page when payment is in progress.</li>
              </ul>
              <br></br>
            </p>
            {/* <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={handleChangeInput}
                value={data.name}
                className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                placeholder="ABC XYZ"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                onChange={handleChangeInput}
                value={data.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block mb-2 text-sm font-medium text-[#040d10]"
              >
                Phone
              </label>
              <input
                type="text"
                id="mobileNumber"
                maxLength="10"
                onChange={handleChangeInput}
                value={data.mobileNumber}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                placeholder="8224092815"
                required
              />
            </div> */}
            <div className="justify-center items-center mb-4">
              {/* <div className="mb-1">
                <label
                  htmlFor="hostel"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Hostel
                </label>
                <input
                  type="text"
                  id="hostel"
                  onChange={handleChangeInput}
                  value={data.hostel}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="Aquamarine"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="roomNumber"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Room
                </label>
                <input
                  type="text"
                  id="roomNumber"
                  onChange={handleChangeInput}
                  value={data.roomNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="C/06/09"
                  required
                />
              </div> */}
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
                Select your size
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
            {/* <div className="mb-1">
                <label
                  htmlFor="hostel"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Hostel
                </label>
                <input
                  type="text"
                  id="hostel"
                  onChange={handleChangeInput}
                  value={data.hostel}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="Aquamarine"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="roomNumber"
                  className="block mb-1 text-sm font-medium text-[#040d10]"
                >
                  Room
                </label>
                <input
                  type="text"
                  id="roomNumber"
                  onChange={handleChangeInput}
                  value={data.roomNumber}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
                  placeholder="C/06/09"
                  required
                />
              </div> */}

            <div className="max-w-lg mx-auto mb-2">
              {/*<label
                className="block mb-2 text-sm font-medium text-[#040d10]"
                htmlFor="user_avatar"
              >
                Upload transaction
              </label>
              <input
                onChange={handleImg}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="user_avatar_help"
                placeholder="Transaction Screenshot"
                id="user_avatar"
                type="file"
                required
              />
              <div
                className="mt-1 text-xs flex justify-start text-[#040d10]"
                id="user_avatar_help"
              >
                Screenshot of your payment
              </div>*/}
              <strong>
                <div className="mt-4">
                  Payable Amount: INR{" "}
                  {beta.type === "Hoodie" ? (799 * beta.quantity) : (399 * beta.quantity)}
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
              {/* <label className="block mb-2 text-sm font-medium text-[#040d10]">
                Delivery outside IIT ISM (Rs. 50 delivery charges)
              </label> */}
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
