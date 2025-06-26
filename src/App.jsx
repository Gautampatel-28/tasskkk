import { Box } from '@mui/material';
import Sidebar, { drawerWidthOpen } from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#000', minHeight: '100vh' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidthOpen}px`,
          p: 3,
          transition: 'margin 0.3s ease',
          backgroundColor: '#000',
          color: 'white',
        }}
      >
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
