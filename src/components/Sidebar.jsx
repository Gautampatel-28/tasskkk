import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Divider,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import ExtensionIcon from "@mui/icons-material/Extension";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleIcon from "@mui/icons-material/Chat";
import AddIcon from "@mui/icons-material/Add";
import SyncIcon from "@mui/icons-material/Sync";
import "../styles/sidebar.css";

export const drawerWidthOpen = 240;
export const drawerWidthClosed = 72;

const Sidebar = ({ open, setOpen }) => {
  const drawerWidth = open ? drawerWidthOpen : drawerWidthClosed;

  const topTiles = [
    { label: "Dashboard", icon: <DashboardIcon />, key: "Dashboard" },
    { label: "Apps", icon: <AppsIcon />, key: "Apps" },
    { label: "Documentation", icon: <DescriptionIcon />, key: "Documentation" },
    { label: "Examples", icon: <ExtensionIcon />, key: "Examples" },
  ];

  const navItems = [
    { label: "Sales", icon: <StorefrontIcon /> },
    { label: "Customer", icon: <PeopleIcon /> },
    {
      label: "Projects",
      icon: <WorkspacesIcon />,
      actionIcon: <SyncIcon fontSize="small" />,
    },
    {
      label: "Products",
      icon: <StorefrontIcon />,
      actionIcon: <AddIcon fontSize="small" />,
    },
    { label: "Invoices", icon: <ReceiptIcon /> },
    { label: "Mail", icon: <MailIcon />, badgeContent: 8 },
    { label: "Chat", icon: <ChatBubbleIcon />, chip: "Soon" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        // width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#111',
          color: 'white',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: open ? "space-between" : "center",
        }}
      >
        {open && <Typography variant="h5">⚡Boltify</Typography>}
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {open ? (
        <Box sx={{ px: 2, pb: 2 }}>
          <Box display="flex" alignItems="center">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                marginLeft: 8,
                flex: 1,
              }}
            />
          </Box>
        </Box>
      ) : (
        <Tooltip title="Search">
          <IconButton sx={{ color: "#fff", justifyContent: "center" }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}

      <Divider sx={{ borderColor: "#333" }} />

      <Box>
        {topTiles.map((item) => (
          <Tooltip title={!open ? item.label : ""} key={item.key} placement="right">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: open ? 'flex-start' : 'center',
                px: 2,
                py: 1.5,
                cursor: 'pointer',
                gap: open ? 2 : 0,
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              {item.icon}
              {open && <Typography variant="body2">{item.label}</Typography>}
            </Box>
          </Tooltip>
        ))}
      </Box>

      <Divider sx={{ borderColor: "#333" }} />

      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} sx={{ px: 2 }}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 36 }}>{item.icon}</ListItemIcon>
            {open && (
              <>
                <ListItemText primary={item.label} />
                {item.badgeContent && (
                  <Badge badgeContent={item.badgeContent} color="success" />
                )}
                {item.chip && (
                  <Chip label={item.chip} size="small" color="primary" />
                )}
                {item.actionIcon && (
                  <IconButton size="small" sx={{ color: "#aaa" }}>
                    {item.actionIcon}
                  </IconButton>
                )}
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
