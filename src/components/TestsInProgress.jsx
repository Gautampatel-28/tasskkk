import { Box, LinearProgress } from '@mui/material';

const TestsInProgress = () => {
  return (
    <Box className="card bg-dark text-white p-3 mb-4 h-100">
      <h6 className="border-bottom pb-2 mb-3">Tests in Progress</h6>
      <div className="d-flex justify-content-between mb-2 small text-muted">
        <div>Application</div>
        <div>URL</div>
        <div>Progress</div>
        <div>Elapsed Time</div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-truncate w-25">Demo Ap...</div>
        <a href="http://beaglehack.com/" className="text-info small w-25 text-truncate">http://beaglehack.com/</a>
        <div className="w-25">
          <LinearProgress variant="determinate" value={91} color="success" />
          <small className="text-success">91%</small>
        </div>
        <div className="text-muted w-25">13D 15H:59M</div>
      </div>
    </Box>
  );
};

export default TestsInProgress;
