import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar, { drawerWidthOpen, drawerWidthClosed } from './components/Sidebar';
import Dashboard from './components/Dashboard';
import "./App.css"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${isSidebarOpen ? drawerWidthOpen : drawerWidthClosed}px`,
          width: `calc(100% - ${isSidebarOpen ? drawerWidthOpen : drawerWidthClosed}px)`,
          transition: 'all 0.3s ease',
          bgcolor: '#000',
          color: 'white',
          minHeight: '100vh',
          p: 3,
        }}
      >
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
