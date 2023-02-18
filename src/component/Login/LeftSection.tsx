import { Box, Typography } from "@mui/material";
import Logo from "../../component/Logo";
import H1 from "../../component/Typography/H1";
import Subtitle from "../../component/Typography/Subtitle";
import IconListItem from "../../component/IconListItem";

import { ICON_LIST_CONTENT } from "./constants";

const LeftSection = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "none", md: "400px", lg: "620px" },
        width: "100%",
        backgroundColor: "background.paper",
        my: 5.5,
      }}
    >
      <Logo sx={{ ml: { xs: 3, lg: 8.125 } }} />
      <Box sx={{ ml: { xs: 4.5, lg: 10 }, mr: { xs: 3.5, lg: 7.25 } }}>
        <H1>Hi there, see what’s new</H1>
        <Subtitle>
          Here’s how Foodcourt helps you manage your daily operations and ensure
          your riders are efficient
        </Subtitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 6.75,
          ml: { xs: 3.5, lg: 8.75 },
          mr: { xs: 3.5, lg: 11 },
          gap: 3.75,
        }}
      >
        {ICON_LIST_CONTENT.map((props, index) => (
          <IconListItem {...props} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default LeftSection;
