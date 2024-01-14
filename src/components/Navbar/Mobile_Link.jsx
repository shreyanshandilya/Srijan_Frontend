import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const MobileLink = ({ url, text, noBorder, ...otherProps }) => {
  return (
    <ListItem
      disablePadding
      sx={{ borderBottom: `1px solid ${noBorder ? "transparent" : "white"}` }}
    >
      <ListItemButton
        sx={{
          textAlign: "center",
          "&:hover": { color: "#f7f75d" },
        }}
        component={Link}
        className="mobile-nav-links"
        to={url}
        {...otherProps}
      >
        <ListItemText
          primaryTypographyProps={{
            fontSize: "1.5em",
            fontFamily: `"ReFormationSansRegular", sans-serif !important`,
          }}
          primary={text}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MobileLink;
