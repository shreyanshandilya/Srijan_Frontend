import React, { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Nav from "../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer.jsx";
import { Carousel } from "flowbite-react";
import { animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import AlertDialog from "./Alert.jsx";
import useRazorpay from "react-razorpay";
import Srijanmage from "../assets/SrijanLogo.png";
import FooterT from "../components/Footer.jsx";
import { Link } from "react-router-dom";
function Merchandise() {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [outside, setOutside] = useState(false);
  const [beta, setData] = useState({
    tshirtSize: "S",
    address: "",
    quantity: 0,
    type: "Hoodie",
  });
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
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
  //         fetch("https://srijan24-backend-mu.vercel.app/api/purchase", {
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
  };

  const currency = "INR";
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const amount = beta.quantity * (beta.type === "Hoodie" ? 799 : beta.type === "Tshirt + Hoodie Combo" ? 1099 : 399) * 100;

    // console.log(amount);
    const response = await toast.promise(
      fetch("https://srijan24-backend-mu.vercel.app/api/order", {
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
          "https://srijan24-backend-mu.vercel.app/api/order/validate",
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
    });

    rzp1.on("payment.failed", function (response) {
      toast.error(response.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

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
          </h1>
          <div className="text-white font-bold text-2xl">
            <div className="my-5">Special Offer</div>
            <div>
              2 Hoodies at <span className="text-blue-400">1498</span>
            </div>
            <div>
              4 T-Shirts at <span className="text-blue-400">1396</span>
            </div>
          </div>
          <motion.a
            href="https://forms.gle/VUK1fWcdLyXqNyxa9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center my-4"
          >
            <motion.button
              whileHover={{ y: -5 }}
              type="button"
              className="  backdrop-blur-lg bg-[#dad3a5] hover:bg-transparent font-medium rounded-lg text-sm px-3 text-center inline-flex items-center  text-[#090d06] hover:text-[#c9bc57] me-2 my-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              </svg>
              <p className="p-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                Buy Via Google Form
              </p>
            </motion.button>
          </motion.a>

          <div className="text-2xl font-sans font-bold">or</div>
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
                  <>
                    <motion.button
                      whileHover={{ y: -10 }}
                      className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-[#090d06] rounded-lg bg-[#dad3a5] hover:drop-shadow-md focus:ring-4 focus:ring-blue-300 cursor-pointer mb-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(!open);
                        setData({
                          tshirtSize: "S",
                          address: "",
                          quantity: 1,
                          type: "Tshirt + Hoodie Combo",
                        });
                      }}
                    >
                      <Link to="/merchant/offer">Buy Offer</Link>
                    </motion.button>
                  </>
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
                <li>
                  Note that you will get the merchandise after the fest if you
                  order now.
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
                Select your size{" "}
                {beta.type == "Tshirt + Hoodie Combo" && "(Tshirt)"}
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

            <div className="max-w-lg mx-auto mb-2">
              <strong>
                <div className="mt-4">
                  Payable Amount: INR{" "}
                  {beta.type === "Hoodie" ? (799 * beta.quantity) : beta.type === "Tshirt + Hoodie Combo" ? (1099*beta.quantity) : (399 * beta.quantity)}
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
