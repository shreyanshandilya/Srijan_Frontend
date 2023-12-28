import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
  ".navbar": {
    width: "auto",
    height: "65px",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    justifyContent: "center",
    alignSelf: "center",
     
    zIndex: "9999",
    backgroundColor: "black",
    boxShadow:" 0 0 10px #b5e95f47",
     
    transition: "all 0.3s ease",
    color: "#000",
     
  },
  "@media only screen and (max-width: 900px)": {
    ".navbar": {
      height: "50px",
      lineHeight: "50px",
      backgroundColor: "#000",
      margin: "1.5rem",
    },
    ".toolbar": {
      flexDirection: "row-reverse",
    },
  },
  ".nav": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "0 1rem",
    color: "#fff",
  },
  ".nav-header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "0 1rem",
    color: "#fff",
  },
  ".nav-links": {
    display: "flex",
    justifyItems: "center",
    margin: "0 1rem",
    alignItems: "center",
    color: "#fff",
  },
  ".nav-link": {
    fontFamily: `"ReFormationSansRegular", sans-serif !important`,
    color: "#fff",
    margin: "0 0.8rem",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  ".mobile-nav-links": {
    fontFamily: `"ReFormationSansRegular", sans-serif !important`,
  },
  ".white": {
    color: "white",
  },
  ".logo": {
    width: "35px",
    height: "35px",
    margin: "0 1rem",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    "@media (max-width: 600px)": {
      width: "25px",
      height: "25px",
    },
  },
  ".d-center": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".w-full": {
    width: "100%",
  },
  ".glassBg": {
    border: "1px solid red !important",
    borderRadius: "25px",
    zIndex: "9999",
    backgroundColor: "#141313c2 !important",
    boxShadow: "0 0 10px rgba(220, 220, 220, 0.716)!important",
    transition: "all 0.3s ease",
    color: "#000",
  },
  ".playStoreIcon": {
    height: "40px",
  },
  
  ".MuiButtonBase-root":{
    padding:"0",
  }
});

export default Wrapper;
