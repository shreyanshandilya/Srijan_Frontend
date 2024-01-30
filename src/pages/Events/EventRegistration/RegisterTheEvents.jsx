import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import EventImage from "../../../assets/bgimage.jpg";
import eventList from "../../Events/ZoneEventList/Database/SrijanEvents";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import FooterT from "../../../components/Footer";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import Button, { ButtonProps } from '@mui/material/Button';
import image from "../../../assets/Images_for_events/bgg.png";

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
import Loading from "./Loading";
import Soon from "./Soon";

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
const InputDefault1 = styled(FormControl)({
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
      transition={{ duration: 0.5, delay: 0.1 }}
      className="sm:w-screen"
    >
      <Grid container sx={{ p: 3 }} className="gap-y-7 gap-x-5">
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
  const options = [
    "Hyperlapse Magic",
    "Paper Cutout Delight",
    "Double Trouble Drama",
    "Smooth Transitions Elegance",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };
  const { eventId, category } = useParams();
  const navigate = useNavigate();
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
      setTeamStructure({
        Sponsor: resp[0].sponsor,
        audioLink: resp[0].audio,
        Accompanist: resp[0].accompanist,
        LeaderName: resp[0].teamName,
        Instrument: resp[0].instrument,
        Genre: resp[0].genre,
        R1p:resp[0].r1p,
        ageProof:resp[0].ageProof,
      });
    } catch (e) {
      toast.error("Something went wrong! ");
    }
  };
  const initiateMembers = () => {
    setMemberDetails(() => {
      const memberArr = new Array(minSiz)
        .fill("")
        .map(() => ({ ...memberProtoType }));
      return memberArr;
    });
  };
  useEffect(() => {
    initiateMembers();
    if (!localStorage["token"]) {
      navigate("/login");
    }
  }, [minSiz]);
  useEffect(() => {
    if (eventId === 'AVALANCHE') {
      console.log("aa");
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeNCdbr7q9sbErkVIjKKlbur_0Yt8lc02Pgk0DfBzQwnQ4g_w/viewform";
    }
  }, []);
  const getEventData = () => {
    try {
      const resp = eventList.filter(
        (events) => events.EventName === `${eventId}`
      );
      setMinSiz(resp[0].Minimummembers);
      setMaxSiz(resp[0].Maximummembers);
      setImgSrcWeb(resp[0].Poster || EventImage);
      setEventName(resp[0].EventName);
      setNameofevent(resp[0].EventName);
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong! ");
    }
  };
  const url = "https://srijan-prod.onrender.com/api/getUser";
  const fetchUser = async () => {
    // console.log("aa");
    setLoading(true);
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    });
    const data = await response.json();
    setLoading(false);
    // console.log(data);
    if (data.IsEvents === false) {
      toast.error("Please Purchase a plan for registering in a event .", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/packages/true");
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
    fetchUser();
    fetchFieldValidity();
    getEventData();
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
    updatetdDetails[memberIdx][e.target.name] = e.target.value;
    setMemberDetails(updatetdDetails);
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const teamObj = {
        EventName: nameofevent,
        Teams: [
          {
            MembersList: memberDetails,
            TeamName: data.get("teamName"),
            isSponser: sponsorYesNo === "yes",
            Audio: data.get("audioLink"),
            Accompanist: data.get("Accompanist"),
            ReferralID: data.get("ReferralID"),
            Genre: selectedOptions,
            Round1Preference: data.get("Round1Preference"),
            ageProof: data.get("ageProof"),
          },
        ],
      };
      const officialUrl = "https://srijan-prod.onrender.com/api/event/register";
      const demo =
        "https://srijanlocalmonogodbbackend.onrender.com/api/event/register";
      try {
        const response = await toast.promise(
          fetch("https://srijan-prod.onrender.com/api/event/register", {
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
        // console.log(abcd);
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

  const [displayForm, setDisplayForm] = useState(false);

  // useEffect(() => {
  //   fetchUser();
  // }, []);
  if (maxSiz == 0) {
    return (
      <>
        <Navbar />
        <body
          className="flex items-center justify-center min-h-[400px]  max-w-screen"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1 className="text-4xl text-[#dad3a5] floating  font-bold">
            No registration required
          </h1>
        </body>
        <FooterT />
      </>
    );
  }
  // if(category == "cinematography") {
  //   return <Soon />
  // }
  return loading ? (
    <Loading />
  ) : (
    <div style={{ backgroundColor: "black", height: "100%" }}>
      <Wrapper>
        {/* <Navbar className="navbar-with-high-z-index" /> */}
        <div id="canvas_container2" className="min-h-screen">
          <div
            className="m-3  backdrop-blur-lg  text-white font-mono text-2xl"
            id="canvas_box2"
            style={{ opacity: "1", top: "0", padding: "0" }}
          >
            <Navbar />
            <div style={flexContainerStyle}>
              <Box className="poster w-full">
                <img
                  src={imgSrcWeb}
                  className="h-[400px] rounded-lg w-full"
                  alt="tshirt"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Box>
              {true && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-light"
                  style={{ marginTop: "2em", opacity: "1" }}
                >
                  <h5 className="mb-1 mt-5 font-semibold text-[#dad3a5] text-5xl lg:text-6xl">
                    {nameofevent || "Event's Name"}
                  </h5>
                  <Form className="m-3" onSubmit={handleSubmit}>
                    {teamStructure.LeaderName && (
                      <>
                        <div className="p-3 m-3">Team Details</div>
                        <div style={responsiveColumn}>
                          <InputDefault
                            label="Team Name"
                            placeholder="XYZ"
                            type="text"
                            fullWidth
                            name="teamName"
                            required
                          />
                        </div>
                        <Typography
                          variant="subtitle2"
                          className="padd"
                          align="center"
                          sx={{ mb: 3 }}
                        >
                          Enter Information About Your Team Members.
                        </Typography>
                      </>
                    )}
                    {!teamStructure.LeaderName && (
                      <Typography
                        variant="subtitle2"
                        className="padd"
                        align="center"
                        sx={{ mb: 3 }}
                      >
                        Enter Your Details.
                      </Typography>
                    )}

                    <Member />
                    {memberDetails.map((_, idx) => {
                      return (
                        <Box
                          key={idx}
                          className="glass-morphism"
                          sx={{
                            mb: 2,
                            p: 2,
                            borderRadius: "10px",
                          }}
                        >
                          <Typography>
                            {idx === 0 ? "Team Leader" : `Member ${idx + 1}`}
                          </Typography>
                          <Member
                            key={idx}
                            handleMemberChange={handleMemberChange}
                            memberIdx={idx}
                            memberDetails={memberDetails}
                            isInstrument={teamStructure.Instrument}
                          />
                        </Box>
                      );
                    })}

                    <div className="grid grid-cols-2 sm:gap-6 gap-1 my-6">
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Button
                          className="m-3 h-full"
                          variant="contained"
                          onClick={handleAddMember}
                          sx={{ transform: "none", left: "0" }}
                        >
                          Add Member
                        </Button>
                      </motion.div>
                      <motion.div
                        className="box "
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Button
                          className="m-3 bg-[#dad3a5]"
                          variant="contained"
                          onClick={handleRemoveMember}
                          sx={{ transform: "none", left: "0" }}
                        >
                          Remove Member
                        </Button>
                      </motion.div>
                    </div>

                    {teamStructure.Sponsor && (
                      <div className="grid grid-cols-2 m-7">
                        <div>Sponsor Check</div>
                        <div className="grid grid-cols-2 gap-5">
                          <div>
                            <input
                              type="radio"
                              name="yes"
                              id="radio-yes"
                              value="yes"
                              onChange={handleRadioChange}
                              checked={sponsorYesNo === "yes"}
                            />
                            <label htmlFor="radio-yes">Yes</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="no"
                              id="radio-no"
                              value="no"
                              onChange={handleRadioChange}
                              checked={sponsorYesNo === "no"}
                            />
                            <label htmlFor="radio-no">No</label>
                          </div>
                        </div>
                      </div>
                    )}
                    {teamStructure.Genre && (
                      <InputDefault1
                        InputDefault1
                        className="glass-morphism"
                        fullWidth
                      >
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ color: "white", borderColor: "white" }}
                        >
                          Select the genres you incorporated in your video
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          multiple
                          value={selectedOptions}
                          // value={age}
                          onChange={handleOptionChange}
                          style={{ color: "white" }}
                          label="Events Participating Name of the event(s)  you have registered for if any."
                          renderValue={(selected) => (
                            <Grid style={{ color: "white" }}>
                              {selected.join(",  ")}
                            </Grid>
                          )}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: "400px",
                                maxWidth: "150px",
                              },
                            },
                          }}
                        >
                          {options.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              <input
                                type="checkbox"
                                checked={selectedOptions.indexOf(option) > -1}
                                style={{ width: "15px", height: "15px" }}
                              />
                              <span style={{ fontSize: "1em" }}>{option}</span>
                            </MenuItem>
                          ))}
                        </Select>
                      </InputDefault1>
                    )}

                    {teamStructure.audioLink && (
                      <div className="my-5" style={responsiveColumn}>
                        <InputDefault
                          size="small"
                          label="Audio Link"
                          placeholder="XYZ"
                          type="text"
                          name="audioLink"
                          fullWidth
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {/* <DesignServicesIcon fontSize="small" /> */}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    )}
                    {teamStructure.ageProof && (
                      <div className="my-5" style={responsiveColumn}>
                        <InputDefault
                          size="small"
                          label="Age Proof Link"
                          placeholder="Paste the drive link with view access* ( Aadhar Card , Pan Card , 10th Marsksheet ) "
                          type="text"
                          name="ageProof"
                          fullWidth
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {/* <DesignServicesIcon fontSize="small" /> */}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    )}
                    {teamStructure.R1p && (
                      <div className="my-5" style={responsiveColumn}>
                        <InputDefault
                          size="small"
                          label="Topic for Round 1(Refer Rulebook for further information)"
                          placeholder="XYZ"
                          type="text"
                          name="Round1Preference"
                          fullWidth
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {/* <DesignServicesIcon fontSize="small" /> */}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    )}
                    <div className="my-5" style={responsiveColumn}>
                      <InputDefault
                        size="small"
                        label="Referral ID (Optional) "
                        placeholder="Refferral Id"
                        type="text"
                        name="ReferralID"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {/* <DesignServicesIcon fontSize="small" /> */}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    {teamStructure.Accompanist && (
                      <div className="my-5">
                        <div className="grid grid-cols-2 m-7">
                          <div>Need Accompanist ?</div>
                          <div className="grid grid-cols-2 gap-5">
                            <div>
                              <input
                                type="radio"
                                name="yes"
                                id="radio-yes"
                                value="yes"
                                onChange={handleAccompanist}
                                checked={accompanistYesNo === "yes"}
                              />
                              <label htmlFor="radio-yes">Yes</label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                name="no"
                                id="radio-no"
                                value="no"
                                onChange={handleAccompanist}
                                checked={accompanistYesNo === "no"}
                              />
                              <label htmlFor="radio-no">No</label>
                            </div>
                          </div>
                        </div>
                        {accompanistYesNo === "yes" && (
                          <div className="my-5" style={responsiveColumn}>
                            <InputDefault
                              size="small"
                              label="Accompanist"
                              placeholder="Instrument Name that Accompanist will play"
                              type="text"
                              name="Accompanist"
                              fullWidth
                              required
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    {/* <DesignServicesIcon fontSize="small" /> */}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                    <motion.div
                      className="box"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Button
                        className="m-3"
                        variant="contained"
                        type="submit"
                        sx={{ transform: "none", left: "0" }}
                      >
                        Register
                      </Button>
                    </motion.div>
                  </Form>
                </motion.div>
              )}
            </div>
          </div>
          <div></div>
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
      </Wrapper>
    </div>
  );
};
