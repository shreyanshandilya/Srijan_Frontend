import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import EventImage from "../assets/bgimage.jpg";
import eventList from "../assets/SrijanEvents";
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

const InputDefault = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2F3C7E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8AAAE5", // Change this color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#317773", // Change this color
    },
    "&:hover fieldset": {
      borderColor: "#E2D1F9", // Change this color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ADD8E6", // Change this color
    },
  },
  "& input": {
    color: "#FFFFFF", // Change the text color
  },
  "& .MuiFormLabel-root": {
    color: "#FFFFFF", // Change the label text color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFFFFF", // Change the focused label text color
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#FFFFFF", // Change the placeholder color
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
    <Grid container spacing={2} sx={{ width: "100%", p: 3 }}>
      <Grid item xs={12} sm={4} lg={4}>
        <InputDefault
          size="small"
          name="name"
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
          name="college"
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
          name="email"
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
          name="phone"
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
  );
};

export const RegisterTheEvents = () => {
  const { eventId } = useParams();
  // console.log(eventId);
  const [loading, setLoading] = useState(true);
  const [imgSrcMob, setImgSrcMob] = useState("");
  const [imgSrcWeb, setImgSrcWeb] = useState("");
  const [eventName, setEventName] = useState("");
  const [minSiz, setMinSiz] = useState(1);
  const [maxSiz, setMaxSiz] = useState(2);
  const [teamStructure, setTeamStructure] = useState({});
  const [sponsorYesNo, setsponsorYesNo] = useState();
  const [accompanistYesNo, setaccompanistYesNo] = useState();

  // this function will be called when a radio button is checked
  const handleRadioChange = (e) => {
    setsponsorYesNo(e.target.value);
  };
  const handleAccompanist = (e) => {
    setaccompanistYesNo(e.target.value);
  };
  const fetchFieldValidity = async () => {
    // try {
    //   const resp = await customFetchJson.get(`/api/events/${eventId}`);
    //   console.log(resp.data);
    setTeamStructure({
      Sponsor: true,
      audioLink: true,
      Accompanist: true,
      LeaderName: true,
      Instrument: true,
    });
    // } catch (e) {
    //   console.log(e);
    //   toast.error(e.response.data.msg || "Something went wrong! ");
    // }
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
  // }, [minSiz]);
  const getEventData = async () => {
    // try {
    // const resp = await customFetchJson.get(`/api/showEvents/${eventId}`);
    // setMinSiz(resp.data[0].minTeamSize);
    setMinSiz(1);

    // setMaxSiz(resp.data[0].maxTeamSize);
    setMaxSiz(2);

    // setImgSrcMob(resp.data[0].posterMobile);
    setImgSrcMob(EventImage);

    // setImgSrcWeb(resp.data[0].posterWeb);
    setImgSrcWeb(EventImage);

    // setEventName(resp.data[0].name);
    setEventName("Name of The Event");

    // console.log(resp.data);
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.response.data.msg || "Something went wrong! ");
    // }
  };

  const memberProtoType = {
    name: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    branch: "",
    admissionNumber: "",
    Instrument: "",
  };
  const [memberDetails, setMemberDetails] = useState([]);

  useEffect(() => {
    // setLoading(true);
    fetchFieldValidity();
    getEventData();
    // setLoading(false);
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
    // try {
    //   setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("handleSubmit" + data);
    //   const teamObj = {
    //     teamName: data.get("teamName").trim(),
    //     teamLeader: memberDetails[0].name,
    //     eventName: eventName,
    //     problemStatementChosen: data.get("problemStatementChosen"),
    //     botWeight: data.get("botWeight"),
    //     driveLink: data.get("driveLink"),
    //     member: memberDetails,
    //     fieldOfInterest: data.get("fieldOfInterest"),
    //   };
    //   // console.log("r = ", teamObj);
    //   const resp = await customFetchJson.post(`/api/eventRegitration`, teamObj);
    //   setLoading(false);
    //   toast.success(resp.data.msg);
    //   event.target.reset();
    //   initiateMembers();
    //   // console.log(resp);
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    //   toast.error(error.response.data.msg || "Something went wrong! ");
    // }
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
    // <div style={{ backgroundColor: "black", height: "100%" }}>
    <Wrapper>
      {/* <Navbar className="navbar-with-high-z-index" /> */}
      <div id="canvas_container2" className="min-h-screen">
        <div
          className="m-3  backdrop-blur-lg  text-white font-mono text-2xl"
          id="canvas_box2"
          style={{ opacity: "1", top: "0", padding: "0" }}
        >
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
              <div
                className="text-light"
                style={{ marginTop: "2em", opacity: "1" }}
              >
                <h5 className="mb-1 mt-5 font-semibold text-[#dad3a5] text-5xl lg:text-6xl">
                  Event Name
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
                  <div className="grid grid-cols-2 sm:gap-6 gap-1">
                    <Button
                      className="m-3"
                      variant="contained"
                      onClick={handleAddMember}
                      sx={{ transform: "none", left: "0" }}
                    >
                      Add Member
                    </Button>
                    <Button
                      className="m-3"
                      variant="contained"
                      onClick={handleRemoveMember}
                      sx={{ transform: "none", left: "0" }}
                    >
                      Remove Member
                    </Button>
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

                  {teamStructure.audioLink && (
                    <div style={responsiveColumn}>
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
                  {teamStructure.Accompanist && (
                    <>
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
                        <div style={responsiveColumn}>
                          <InputDefault
                            size="small"
                            label="Accompanist"
                            placeholder="XYZ"
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
                    </>
                  )}
                  <Button
                    className="m-3"
                    variant="contained"
                    type="submit"
                    sx={{ transform: "none", left: "0" }}
                  >
                    Register
                  </Button>
                </Form>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
    // </div>
    // teamName?<div>hello</div>:<div>bye</div>
  );
};
