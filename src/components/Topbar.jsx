import {
  Box,
  Typography,
  Avatar,
  Badge,
  IconButton
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        bgcolor: "#111",
        borderBottom: "1px solid #222",
        color: "#fff"
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        {/* Account Box */}
        <Box
          sx={{
            backgroundColor: "#1a1a1a",
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: "#aaa", display: "block", lineHeight: 1 }}>
            My account
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>Elena Catherine</Typography>
            <Box component="span" sx={{ fontSize: 14 }}>▼</Box>
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>Home</Typography>
          <Typography sx={{ color: "#aaa", fontSize: 14 }}>Projects</Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Badge
          badgeContent="9+"
          color="primary"
          overlap="circular"
          sx={{ mr: 1 }}
        >
          <IconButton sx={{ bgcolor: "#222", width: 40, height: 40, color: "#fff" }}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
        <Avatar
          alt="Elena Catherine"
          src="https://randomuser.me/api/portraits/women/75.jpg"
          sx={{ width: 40, height: 40 }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
