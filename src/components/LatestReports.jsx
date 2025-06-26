import { Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

const reports = [
  { name: 'Demo Application', url: 'http://beaglehack.com/', date: '06-Jun-2025' },
  { name: 'Demo API', url: 'https://api.beaglehack.com/', date: '29-May-2025' },
  { name: 'Demo Web Application', url: 'https://web-2.beaglehack.com/', date: '12-Dec-2024' },
  { name: 'Demo API 2', url: 'https://api-2.beaglehack.com/', date: '11-Dec-2024' },
];

const LatestReports = () => {
  return (
    <Box className="card bg-dark text-white p-3 mb-4 h-100">
      <h6 className="border-bottom pb-2 mb-3">Latest Reports</h6>
      {reports.map((item, idx) => (
        <div key={idx} className="d-flex justify-content-between align-items-start mb-2">
          <div className="d-flex align-items-center gap-2">
            <DescriptionIcon className="text-primary" />
            <div className="d-flex flex-column">
              <span className="fw-semibold">{item.name}</span>
              <a href={item.url} className="text-info small text-truncate" target="_blank" rel="noreferrer">
                {item.url}
              </a>
            </div>
          </div>
          <span className="text-muted small">{item.date}</span>
        </div>
      ))}
    </Box>
  );
};

export default LatestReports;
