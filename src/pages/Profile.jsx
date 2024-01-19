import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Navbar from "../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import image from "../assets/BgProfile.jpg";
import { ToastContainer, toast } from "react-toastify";
import FooterT from "../components/Footer";

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      navigate("/register");
    }
  }, [localStorage.getItem("token")]);

  const [details, setDetails] = useState([]);
  const url = "https://srijan2024.onrender.com/api/getUser";
  const urlEvents =
    "https://srijan2024.onrender.com/api/profile/eventsRegistered";
  const fetchUser = useCallback(async () => {
    const response = await toast
      .promise(
        fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage["token"]}`,
          },
        }),
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          pending: "Loading Profile",

          error: "Something wrong occured",
        }
      )

      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setDetails(data);
        // console.log(ans);
        // console.log(res.json());
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <div
        className="bg-[#17160e]"
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <Navbar />
        <div className="min-h-screen p-5 sm:p-10 md:p-16">
          <div className="p-4 md:p-8 bg-[#dad3a5]/70 backdrop-blur-xl rounded-lg shadow mt-24">
            <div className="mt-20 text-center border-b border-[#0d0c06] pb-12 px-4">
              <h1 className="text-4xl md:text-6xl font-semibold text-[#0d0c06]">
                {details.Name}{" "}
                {/* <span className="font-light text-gray-500">{details.Email}</span> */}
              </h1>
              <p className="font-light text-[#0d0c06] mt-5 flex justify-center items-center gap-x-2 sm:text-base md:text-xl italic text-wrap">
                <IoMdMail className=" text-base md:text-2xl" />
                {details.Email}
              </p>
              <p className="font-light text-[#0d0c06] my-5 px-2 flex justify-center items-center gap-x-2 sm:text-base md:text-xl">
                <FaPhone className="text-base md:text-2xl" />
                {details.PhoneNumber}
              </p>
              <Link to="/">
                <button
                  className="text-[#0d0c06] text-xl mt-4 py-3 px-6 uppercase  bg-[#c9bc57]/80 hover:bg-[#c9bc57] shadow hover:shadow-lg font-medium transition  rounded-xl transform hover:-translate-y-0.5"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Logout
                </button>
              </Link>

              {/* <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">University of Computer Science</p> */}
            </div>

            <div className="mt-12 flex flex-col justify-center">
              {/* <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button> */}
              <h1 style={{ textAlign: "center", fontSize: "150%" }}>
                <strong>Your Merchandise Orders</strong>
              </h1>
              <p>
                <center>
                  If you have placed an order, and it is not reflecting here,
                  kindly mail us at srijan@iitism.ac.in with your transaction
                  details.{" "}
                </center>
              </p>
              <br></br>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {details.Merchandise != undefined &&
                  details.Merchandise.length > 0 &&
                  details.Merchandise.map((item, index) => {
                    return (
                      <>
                        <div className="max-w-sm p-6 bg-[#3c3708] backdrop-blur-xl bg-opacity-70 rounded-lg shadow">
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold flex justify-center tracking-tight text-[#dad3a5]">
                              {`Order ${index + 1}`}
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-[#efede0]">
                            <strong>Address :</strong> {item.address}
                          </p>
                          <p className="mb-3 font-normal text-[#efede0]">
                            <strong>Size :</strong> {item.tshirtSize}
                          </p>
                          <p className="mb-3 font-normal text-[#efede0]">
                            <strong>Quantity :</strong> {item.quantity}
                          </p>
                          <p className="mb-3 font-normal text-[#efede0]">
                            <strong>Specification :</strong> {item.type}
                          </p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
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
        <FooterT />
      </div>
    </>
  );
}

export default Profile;
