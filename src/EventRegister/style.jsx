import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)({
  ".background": {
    height: "100%",
  },
  "#canvas_container2": {
    overflowX: "hidden",
    width: "100%",
    height: "100%",
    // marginTop: "5%",
    userSelect: "none",
    position: "relative",
    textAlign: "center",
    zIndex: "5",
    backgroundColor: "#090D06"
    // bg-[#544b08]
    // backgroundImage : "url('https://res.cloudinary.com/dkdratnao/image/upload/v1705427074/ismGraffity_usbkdd.jpg')",
  },
  ".poster": {
    minHeight: "300px",
    // border: "1px solid red",
  },
  ".hostel": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".m-4": {
    marginTop: "20px",
  },
  ".padd": {
    paddingTop: "20px",
  },
  ".tshirt-carousel": {
    marginTop: "5em",
    width: "40%",
  },

  ".tshirt-carousel div": {
    maxHeight: "600px",
  },

  ".tshirt-carousel-img img": {
    maxHeight: "370px !important",
  },

  "@media screen and (max-width: 980px)": {
    ".tshirt-carousel": {
      marginTop: "1em",
      width: "90%",
    },
  },
  ".custom-file-upload": {
    border: "1px solid #317773",
    borderRadius: "4px",
    padding: "1em",
    /* width: 48%; */
    width: "100%",
    overflow: "hidden",
  },

  ".custom-file-upload:hover": {
    borderColor: "white",
  },
  ".text-light": {
    width: "70%",
  },
  ".navbar": {
    zIndex: "0",
  },
  "@media screen and (max-width: 800px)": {
    "#canvas_container2": {
      marginTop: "20%",
    },
    ".poster": {
      minHeight: "100px",
    },
    ".text-light": {
      width: "95%",
    },
  },
});
