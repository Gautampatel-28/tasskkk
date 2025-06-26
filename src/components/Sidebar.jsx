import { useState } from "react";
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
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import ExampleIcon from "@mui/icons-material/Extension";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import SyncIcon from "@mui/icons-material/Sync";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/sidebar.css";

export const drawerWidthOpen = 240;
export const drawerWidthClosed = 72;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const drawerWidth = open ? drawerWidthOpen : drawerWidthClosed;

  const toggleDrawer = () => setOpen(!open);

  const topTiles = [
    { label: "Dashboard", icon: <DashboardIcon />, key: "Dashboard" },
    { label: "Apps", icon: <AppsIcon />, key: "Apps" },
    { label: "Documentation", icon: <DescriptionIcon />, key: "Documentation" },
    { label: "Examples", icon: <ExampleIcon />, key: "Examples" },
  ];

  const navItems = [
    { label: "Sales", icon: <StorefrontIcon /> },
    { label: "Customer", icon: <PeopleIcon /> },
    {
      label: "Products",
      icon: <ShoppingCartIcon />,
      actionIcon: <AddIcon fontSize="small" />,
    },
    {
      label: "Projects",
      icon: <WorkspacesIcon />,
      actionIcon: <SyncIcon fontSize="small" />,
    },
    { label: "Invoices", icon: <ReceiptIcon /> },
    { label: "Mail", icon: <MailIcon />, badgeContent: 8 },
    { label: "Chat", icon: <ChatBubbleIcon />, chip: "Soon" },
  ];

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        className: "sidebar-drawer",
        sx: { width: drawerWidth },
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
        {open && (
          <Typography variant="h5" sx={{ color: "#fff" }}>
            ⚡Boltify
          </Typography>
        )}

        <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>
      {open ? (
        <Box className={`sidebar-search ${!open ? "collapsed" : ""}`}>
          <SearchIcon className="search-icon" />
          {open && (
            <input type="text" placeholder="Search" className="search-input" />
          )}
        </Box>
      ) : (
        <Tooltip title="Search" placement="right">
          <IconButton sx={{ color: "#fff", justifyContent: "center" }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}

      <Divider sx={{ borderColor: "#333" }} />

      <Box
        className={`sidebar-grid ${
          open ? "sidebar-grid-open" : "sidebar-grid-closed"
        }`}
      >
        {topTiles.map((item) => (
          <Tooltip
            title={!open ? item.label : ""}
            placement="right"
            key={item.key}
          >
            <Box
              onClick={() => setActive(item.key)}
              className={`sidebar-tile ${active === item.key ? "active" : ""} ${
                !open ? "sidebar-icon-only" : ""
              }`}
            >
              {item.icon}
              {open && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.label}
                </Typography>
              )}
            </Box>
          </Tooltip>
        ))}
      </Box>

      <Box className="sidebar-nav-section">
        <Typography variant="caption" sx={{ pl: 2, color: "#999" }}>
          Dashboards
        </Typography>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} className="sidebar-nav-item">
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
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
      </Box>
    </Drawer>
  );
};

export default Sidebar;
