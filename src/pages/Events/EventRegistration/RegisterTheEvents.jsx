import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventImage from "../../../assets/bgimage.jpg";
import eventList from "../../Events/ZoneEventList/Database/SrijanEvents";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import FooterT from "../../../components/Footer";
// import Button, { ButtonProps } from '@mui/material/Button';

import {
  Box,
  Typography,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Form from "react-bootstrap/Form";
import { Wrapper } from "./style";
import Loading from "./Loading.jsx";

const InputDefault = styled(TextField)({
  "& label.Mui-focused": {
    color: "#dad3a5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: " #dad3a5", // Change this color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: " #dad3a5", // Change this color
    },
    "&:hover fieldset": {
      borderColor: " #dad3a5", // Change this color
    },
    "&.Mui-focused fieldset": {
      borderColor: " #dad3a5", // Change this color
    },
  },
  "& input": {
    color: "#dad3a5", // Change the text color
  },
  "& .MuiFormLabel-root": {
    color: "#efede0", // Change the label text color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#efede0", // Change the focused label text color
  },
  "& .MuiInputBase-input::placeholder": {
    color: " #c9bc57", // Change the placeholder color
  },
});
const flexContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap", // Allow content to wrap to th next line
};

const responsiveColumn = {
  display: "flex",
  flexBasis: "100%", // Make each item take full width in a column
  padding: "5px", // Adjust spacing as needed
  justifyContent: "space-between",
};

const Member = ({
  handleMemberChange,
  memberIdx,
  memberDetails,
  el,
  isInstrument,
}) => {
  if (!memberDetails || !handleMemberChange) return null;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Grid container  sx={{p: 3 }}>
        <Grid item xs={12} sm={4} lg={4}>
          <InputDefault
            size="small"
            name="Name"
            type="text"
            required
            fullWidth
            onChange={(e) => handleMemberChange(e, memberIdx)}
            value={memberDetails[memberIdx]?.name}
            label="Full Name"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <PersonIcon fontSize="small" /> */}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <InputDefault
            size="small"
            name="College"
            type="text"
            required
            fullWidth
            onChange={(e) => handleMemberChange(e, memberIdx)}
            value={memberDetails[memberIdx]?.college}
            label="College"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <PersonIcon fontSize="small" /> */}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <InputDefault
            size="small"
            name="Email"
            type="email"
            required
            fullWidth
            onChange={(e) => handleMemberChange(e, memberIdx)}
            value={memberDetails[memberIdx]?.email}
            label="Email"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <EmailIcon fontSize="small" /> */}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <InputDefault
            size="small"
            name="PhoneNumber"
            type="number"
            onChange={(e) => handleMemberChange(e, memberIdx)}
            value={memberDetails[memberIdx]?.phone}
            required
            fullWidth
            onWheel={(event) => {
              event.preventDefault();
            }}
            label="Mobile Number"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* <LocalPhoneIcon fontSize="small" /> */}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {isInstrument && (
          <Grid item xs={12} sm={12} lg={4}>
            <InputDefault
              size="small"
              name="Instrument"
              type="text"
              onChange={(e) => handleMemberChange(e, memberIdx)}
              value={memberDetails[memberIdx]?.Instrument}
              required
              fullWidth
              onWheel={(event) => {
                event.preventDefault();
              }}
              label="Instrument"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <LocalPhoneIcon fontSize="small" /> */}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
        {/* <Grid item xs={12} sm={12}>
        <InputDefault
          size="small"
          name="admissionNumber"
          type="text"
          required
          onChange={(e) => handleMemberChange(e, memberIdx)}
          value={memberDetails[memberIdx].admissionNumber}
          fullWidth
          label="Admn. No."
          // color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            ),
            placeholder: "Enter your college adm no.",
          }}
        />
      </Grid> */}
      </Grid>
    </motion.div>
  );
};

export const RegisterTheEvents = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // console.log(eventId);
  // useEffect(()=>{
  //   console.log(eventList);
  // },[])
  const [loading, setLoading] = useState(true);
  const [imgSrcMob, setImgSrcMob] = useState("");
  const [imgSrcWeb, setImgSrcWeb] = useState("");
  const [eventName, setEventName] = useState("");
  const [minSiz, setMinSiz] = useState(1);
  const [maxSiz, setMaxSiz] = useState(2);
  const [teamStructure, setTeamStructure] = useState({});
  const [sponsorYesNo, setsponsorYesNo] = useState();
  const [accompanistYesNo, setaccompanistYesNo] = useState();
  const [nameofevent, setNameofevent] = useState();

  // this function will be called when a radio button is checked
  const handleRadioChange = (e) => {
    setsponsorYesNo(e.target.value);
  };
  const handleAccompanist = (e) => {
    setaccompanistYesNo(e.target.value);
  };
  const fetchFieldValidity = () => {
    try {
      const resp = eventList.filter(
        (events) => events.EventName === `${eventId}`
      );
      // console.log(resp);
      setTeamStructure({
        Sponsor: resp[0].sponsor,
        audioLink: resp[0].audio,
        Accompanist: resp[0].accompanist,
        LeaderName: resp[0].teamName,
        Instrument: false,
      });
    } catch (e) {
      // console.log(e);
      toast.error("Something went wrong! ");
    }
  };
  const initiateMembers = () => {
    setMemberDetails(() => {
      // console.log(minSiz);
      const memberArr = new Array(minSiz)
        .fill("")
        .map(() => ({ ...memberProtoType }));
      return memberArr;
    });
  };
  // useEffect(() => {
  //   initiateMembers();
  //   if (!localStorage["token"]) {
  //     navigate("/login");
  //   }
  // }, [minSiz]);
  const getEventData = () => {
    try {
      const resp = eventList.filter(
        (events) => events.EventName === `${eventId}`
      );
      // setMinSiz(resp.data[0].minTeamSize);
      setMinSiz(resp[0].Minimummembers);

      // setMaxSiz(resp.data[0].maxTeamSize);
      setMaxSiz(resp[0].Maximummembers);

      // setImgSrcMob(resp.data[0].posterMobile);
      // setImgSrcMob(EventImage);

      // setImgSrcWeb(resp.data[0].posterWeb);
      setImgSrcWeb(resp[0].Poster || EventImage);

      // setEventName(resp.data[0].name);
      setEventName(resp[0].EventName);

      setNameofevent(resp[0].EventName);

      // console.log(resp.data);
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong! ");
    }
  };

  const memberProtoType = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    College: "",
    Instrument: "",
  };
  const [memberDetails, setMemberDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchFieldValidity();
    getEventData();
    setLoading(false);
  }, []);
  const handleAddMember = () => {
    if (memberDetails.length + 1 > maxSiz) {
      toast.error("Maximum team size reached !");
      return;
    }
    setMemberDetails((prevDetails) => {
      return [...prevDetails, memberProtoType];
    });
  };
  const handleRemoveMember = () => {
    if (memberDetails.length === minSiz) {
      toast.error("Minimum team size");
      return;
    }
    setMemberDetails((prevDetails) => prevDetails.slice(0, -1));
  };

  const handleMemberChange = (e, memberIdx) => {
    const updatetdDetails = [...memberDetails];
    // console.log(memberIdx);
    updatetdDetails[memberIdx][e.target.name] = e.target.value;
    // console.log(updatetdDetails);
    setMemberDetails(updatetdDetails);
  };
  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log(data);
      // console.log("handleSubmit" + data);
      const teamObj = {
        EventName: nameofevent,
        Teams: [
          {
            MembersList: memberDetails,
            TeamName: data.get("teamName"),
            isSponser: sponsorYesNo === "yes",
            Audio: data.get("audioLink"),
            Accompanist: data.get("Accompanist"),
          },
        ],
      };
      console.log("r = ", teamObj);
      const officialUrl = "https://srijan-prod.onrender.com/api/event/register";
      const demo =
        "https://srijanlocalmonogodbbackend.onrender.com/api/event/register";
      try {
        const response = await toast.promise(
          fetch("https://srijanlocalmonogodbbackend.onrender.com/api/event/register", {
            method: "post",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify(teamObj),
          }),
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            pending: "Loading",

            error: "Invalid or expired OTP",
          }
        );

        const abcd = await response.json();
        console.log(abcd);
        if (abcd.status) {
          event.target.reset();
          initiateMembers();
          toast.success(abcd.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else {
          toast.error(abcd.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      } catch (error) {
        console.log(error);
      }

      // const resp = await customFetchJson.post(/api/eventRegitration, teamObj);
      // setLoading(false);
      // toast.success(resp.data.msg);
      // event.target.reset();
      // initiateMembers();
      // console.log(resp);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const [width, setWidth] = useState();

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    // Initialize the width
    updateWidth();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // if (loading) return <Loader />; // Not working

  return (
    <Loading />
    // <div style={{ backgroundColor: "black", height: "100%" }}>

    // <Wrapper>
    //   {/* <Navbar className="navbar-with-high-z-index" /> */}
    //   <div id="canvas_container2" className="min-h-screen">
    //     <div
    //       className="m-3  backdrop-blur-lg  text-white font-mono text-2xl"
    //       id="canvas_box2"
    //       style={{ opacity: "1", top: "0", padding: "0" }}
    //     >
    //       <Navbar />
    //       <div style={flexContainerStyle}>
    //         <Box className="poster w-full">
    //           <img
    //             src={imgSrcWeb}
    //             className="h-[400px] rounded-lg w-full"
    //             alt="tshirt"
    //             style={{ objectFit: "cover", objectPosition: "center" }}
    //           />
    //         </Box>
    //         {true && (
    //           <motion.div
    //             initial={{ y: 20, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{ duration: 1, delay: 0.5 }}
    //             className="text-light"
    //             style={{ marginTop: "2em", opacity: "1" }}
    //           >
    //             <h5 className="mb-1 mt-5 font-semibold text-[#dad3a5] text-5xl lg:text-6xl">
    //               {nameofevent || "Event's Name"}
    //             </h5>
    //             <Form className="m-3" onSubmit={handleSubmit}>
    //               {teamStructure.LeaderName && (
    //                 <>
    //                   <div className="p-3 m-3">Team Details</div>
    //                   <div style={responsiveColumn}>
    //                     <InputDefault
    //                       label="Team Name"
    //                       placeholder="XYZ"
    //                       type="text"
    //                       fullWidth
    //                       name="teamName"
    //                       required
    //                     />
    //                   </div>
    //                   <Typography
    //                     variant="subtitle2"
    //                     className="padd"
    //                     align="center"
    //                     sx={{ mb: 3 }}
    //                   >
    //                     Enter Information About Your Team Members.
    //                   </Typography>
    //                 </>
    //               )}
    //               {!teamStructure.LeaderName && (
    //                 <Typography
    //                   variant="subtitle2"
    //                   className="padd"
    //                   align="center"
    //                   sx={{ mb: 3 }}
    //                 >
    //                   Enter Your Details.
    //                 </Typography>
    //               )}

    //               <Member />
    //               {memberDetails.map((_, idx) => {
    //                 return (
    //                   <Box
    //                     key={idx}
    //                     className="glass-morphism"
    //                     sx={{
    //                       mb: 2,
    //                       p: 2,
    //                       borderRadius: "10px",
    //                     }}
    //                   >
    //                     <Typography>
    //                       {idx === 0 ? "Team Leader" : `Member ${idx + 1}`}
    //                     </Typography>
    //                     <Member
    //                       key={idx}
    //                       handleMemberChange={handleMemberChange}
    //                       memberIdx={idx}
    //                       memberDetails={memberDetails}
    //                       isInstrument={teamStructure.Instrument}
    //                     />
    //                   </Box>
    //                 );
    //               })}

    //               <div className="grid grid-cols-2 sm:gap-6 gap-1 my-6">
    //                 <motion.div
    //                   className="box"
    //                   whileHover={{ scale: 1.1 }}
    //                   transition={{
    //                     type: "spring",
    //                     stiffness: 400,
    //                     damping: 10,
    //                   }}
    //                 >
    //                   <Button
    //                     className="m-3"
    //                     variant="contained"
    //                     onClick={handleAddMember}
    //                     sx={{ transform: "none", left: "0" }}
    //                   >
    //                     Add Member
    //                   </Button>
    //                 </motion.div>
    //                 <motion.div
    //                   className="box "
    //                   whileHover={{ scale: 1.1 }}
    //                   transition={{
    //                     type: "spring",
    //                     stiffness: 400,
    //                     damping: 10,
    //                   }}
    //                 >
    //                   <Button
    //                     className="m-3 bg-[#dad3a5]"
    //                     variant="contained"
    //                     onClick={handleRemoveMember}
    //                     sx={{ transform: "none", left: "0" }}
    //                   >
    //                     Remove Member
    //                   </Button>
    //                 </motion.div>
    //               </div>

    //               {teamStructure.Sponsor && (
    //                 <div className="grid grid-cols-2 m-7">
    //                   <div>Sponsor Check</div>
    //                   <div className="grid grid-cols-2 gap-5">
    //                     <div>
    //                       <input
    //                         type="radio"
    //                         name="yes"
    //                         id="radio-yes"
    //                         value="yes"
    //                         onChange={handleRadioChange}
    //                         checked={sponsorYesNo === "yes"}
    //                       />
    //                       <label htmlFor="radio-yes">Yes</label>
    //                     </div>
    //                     <div>
    //                       <input
    //                         type="radio"
    //                         name="no"
    //                         id="radio-no"
    //                         value="no"
    //                         onChange={handleRadioChange}
    //                         checked={sponsorYesNo === "no"}
    //                       />
    //                       <label htmlFor="radio-no">No</label>
    //                     </div>
    //                   </div>
    //                 </div>
    //               )}

    //               {teamStructure.audioLink && (
    //                 <div className="my-5" style={responsiveColumn}>
    //                   <InputDefault
    //                     size="small"
    //                     label="Audio Link"
    //                     placeholder="XYZ"
    //                     type="text"
    //                     name="audioLink"
    //                     fullWidth
    //                     required
    //                     InputProps={{
    //                       startAdornment: (
    //                         <InputAdornment position="start">
    //                           {/* <DesignServicesIcon fontSize="small" /> */}
    //                         </InputAdornment>
    //                       ),
    //                     }}
    //                   />
    //                 </div>
    //               )}
    //               {teamStructure.Accompanist && (
    //                 <div className="my-5">
    //                   <div className="grid grid-cols-2 m-7">
    //                     <div>Need Accompanist ?</div>
    //                     <div className="grid grid-cols-2 gap-5">
    //                       <div>
    //                         <input
    //                           type="radio"
    //                           name="yes"
    //                           id="radio-yes"
    //                           value="yes"
    //                           onChange={handleAccompanist}
    //                           checked={accompanistYesNo === "yes"}
    //                         />
    //                         <label htmlFor="radio-yes">Yes</label>
    //                       </div>
    //                       <div>
    //                         <input
    //                           type="radio"
    //                           name="no"
    //                           id="radio-no"
    //                           value="no"
    //                           onChange={handleAccompanist}
    //                           checked={accompanistYesNo === "no"}
    //                         />
    //                         <label htmlFor="radio-no">No</label>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   {accompanistYesNo === "yes" && (
    //                     <div className="my-5" style={responsiveColumn}>
    //                       <InputDefault
    //                         size="small"
    //                         label="Accompanist"
    //                         placeholder="XYZ"
    //                         type="text"
    //                         name="Accompanist"
    //                         fullWidth
    //                         required
    //                         InputProps={{
    //                           startAdornment: (
    //                             <InputAdornment position="start">
    //                               {/* <DesignServicesIcon fontSize="small" /> */}
    //                             </InputAdornment>
    //                           ),
    //                         }}
    //                       />
    //                     </div>
    //                   )}
    //                 </div>
    //               )}
    //               <motion.div
    //                 className="box"
    //                 whileHover={{ scale: 1.1 }}
    //                 transition={{
    //                   type: "spring",
    //                   stiffness: 400,
    //                   damping: 10,
    //                 }}
    //               >
    //                 <Button
    //                   className="m-3"
    //                   variant="contained"
    //                   type="submit"
    //                   sx={{ transform: "none", left: "0" }}
    //                 >
    //                   Register
    //                 </Button>
    //               </motion.div>
    //             </Form>
    //           </motion.div>
    //         )}
    //       </div>
    //     </div>
    //     <div></div>
    //   </div>
    //   <ToastContainer
    //     position="bottom-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="dark"
    //   />
    //   <FooterT />
    // </Wrapper>
    // </div>
    // teamName?<div>hello</div>:<div>bye</div>
  );
};
