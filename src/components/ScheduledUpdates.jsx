import { Box } from '@mui/material';
import '../styles/scheduledupdates.css';

const ScheduledUpdates = () => {
  return (
    <Box className="scheduled-updates-container">
      <div className="row">
        <div className="col-md-4">
        <div className="card bg-dark text-white mb-4 small-card">
  <div className="card-header border-bottom py-2 px-3">
    <strong className="small">Scheduled Tests</strong>
  </div>
  <div className="table-responsive">
    <table className="table table-dark table-hover mb-0 small">
      <thead>
        <tr>
          <th>Application name</th>
          <th>Frequency</th>
          <th>Next date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Demo Application</strong><br />
            <a
              href="http://beaglehack.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info small"
            >
              http://beaglehack.com/
            </a>
          </td>
          <td>Every week</td>
          <td>26-Jun-2025 03:27 PM</td>
        </tr>
        <tr>
          <td>
            <strong>Demo API</strong><br />
            <a
              href="https://api.beaglehack.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info small"
            >
              https://api.beaglehack.com/
            </a>
          </td>
          <td>Every month</td>
          <td>28-Jun-2025 03:27 PM</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-white mb-4 updates-card">
            <div className="card-header border-bottom">
              <strong>Latest Updates</strong>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {[
                  {
                    title: "I don't always think about cyber security",
                    desc: "Does your organization follow a reactive approach to cyber security? An approach similar to locking the barn...",
                  },
                  {
                    title: "Integrate Beagle Security with GitHub Actions",
                    desc: "Beagle Security seamlessly integrates into your existing GitHub workflow...",
                  },
                  {
                    title: "Integrate Beagle Security with Bitbucket",
                    desc: "Integrate Beagle Security's powerful pen testing right into your Bitbucket workflow...",
                  },
                  {
                    title: "How to utilize sandboxing to enhance security",
                    desc: "From operating system-level sandboxes to browser-based isolation...",
                  },
                  {
                    title: "Black box penetration testing",
                    desc: "A black box penetration test is a pen-test that is conducted with no prior knowledge of the target...",
                  },
                ].map((item, i) => (
                  <li key={i} className="list-group-item bg-dark text-white border-bottom">
                    <strong>{item.title}</strong>
                    <p className="small text-muted mb-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark text-white mb-4 text-center">
            <div className="card-header border-bottom">
              <strong>Plan Details</strong>
            </div>
            <div className="card-body">
              <div className="mb-2">Current plan</div>
              <h4 className="text-success">Advanced</h4>
              <hr className="border-secondary" />
              <p className="mb-1">Test(s) per month</p>
              <strong>2 / 15</strong>
              <hr className="border-secondary" />
              <p className="mb-1">Expires on</p>
              <strong>26-Mar-2026</strong>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ScheduledUpdates;
