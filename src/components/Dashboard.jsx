import { Box } from "@mui/material";
import Topbar from "./Topbar";
import "../styles/dashboard.css";

import FolderIcon from "@mui/icons-material/Folder";
import LayersIcon from "@mui/icons-material/Layers";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Vulnerabilities from "./Vulnerabilities";
import LeastVulnerableChart from "./LeastVulnerableChart";
import TestsInProgress from "./TestsInProgress";
import LatestReports from "./LatestReports";
import ScheduledUpdates from "./ScheduledUpdates";
import Footer from "./Footer";


const Dashboard = () => {
  return (
    <Box className="dashboard-container bg-dark text-white">
      <Topbar />

      <div className="dashboard-card d-flex align-items-center justify-content-between p-4 rounded shadow-sm flex-wrap gap-3">
        <div className="info-box d-flex align-items-center gap-3">
          <FolderIcon fontSize="large" className="text-primary" />
          <div>
            <h5 className="mb-0">1</h5>
            <small>Projects</small>
          </div>
        </div>

        <div className="info-box d-flex align-items-center gap-3">
          <LayersIcon fontSize="large" className="text-info" />
          <div>
            <h5 className="mb-0">4</h5>
            <small>Applications</small>
          </div>
        </div>

        <div className="info-box d-flex align-items-center gap-3">
          <VerifiedUserIcon fontSize="large" className="text-success" />
          <div>
            <h5 className="mb-0">2 / 15</h5>
            <small>Test(s) / Billing Month</small>
          </div>
        </div>

        <div className="info-box d-flex align-items-center gap-3">
          <GppMaybeIcon fontSize="large" className="text-danger" />
          <div>
            <h5 className="mb-0 text-danger">39</h5>
            <small>Open Vulnerabilities</small>
          </div>
        </div>

        <button className="btn btn-primary d-flex align-items-center">
          <AddBoxIcon className="me-2" />
          New Application
        </button>
      </div>

      <Vulnerabilities />

      <div className="row">
        <div className="col-md-4">
          <LeastVulnerableChart />
        </div>
        <div className="col-md-4">
          <TestsInProgress />
        </div>
        <div className="col-md-4">
          <LatestReports />
        </div>
      </div>

      <div className="row">
        <ScheduledUpdates />
      </div>

      <Footer />
    </Box>
  );
};

export default Dashboard;
