import { Box } from "@mui/material";
import { Timer1 } from "iconsax-react";
import { COLORS } from "../../theme/constant";
import CustomChip from "../CustomChip";
import { LoadingIconListItem } from "../IconListItem";
import H2 from "../Typography/H2";
import Subtitle from "../Typography/Subtitle";

const RightSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.card[1],
        px: 3,
        py: 10,
        width: "100%",
        maxWidth: { xs: "none", md: "375px" },
        borderRadius: "12px",
      }}
    >
      <CustomChip icon={<Timer1 />} text="Coming Soon" />
      <Box
        sx={{
          mt: 7,
          px: 3,
          py: 2.5,
          mb: 3,
          bgcolor: "background.paper",
          border: `1px solid ${COLORS.border[2]}`,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <LoadingIconListItem icon="🎉" />
        <LoadingIconListItem icon="✨" />
        <LoadingIconListItem icon="💥" />
      </Box>
      <H2 sx={{ textAlign: "center", mb: 1 }}>📫 Notifications</H2>
      <Subtitle sx={{ textAlign: "center", maxWidth: "307px", mx: "auto" }}>
        Receive notifcations about your rider performance, efficiency reviews
        and a lot more
      </Subtitle>
    </Box>
  );
};

export default RightSection;
