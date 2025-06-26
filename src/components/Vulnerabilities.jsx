// import { Box } from '@mui/material';
import '../styles/vulnerabilities.css';
import { Chip } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import "../styles/vulnerabilities.css"

const pieData = [
  { name: 'Fixed', value: 127, color: '#8BC34A' },
  { name: 'New', value: 13, color: '#FFC107' },
  { name: 'Not Fixed', value: 17, color: '#F44336' },
  { name: 'Reopened', value: 9, color: '#0D47A1' },
];

const Vulnerabilities = () => {
  return (
    <div className="vulnerability-section bg-dark text-white px-3">
      <div className="row">
        <div className="col-lg-8">
          <div className="card bg-dark text-white border-secondary">
            <div className="card-header border-bottom">
              <strong>Most Vulnerable Application</strong>
            </div>
            <div className="table-responsive">
              <table className="table table-dark table-hover mb-0 text-white">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Last Test Date</th>
                    <th>Critical</th>
                    <th>High</th>
                    <th>Medium</th>
                    <th>Low</th>
                    <th>Info</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'Demo Application',
                      url: 'http://beaglehack.com/',
                      date: '06-Jun-2025',
                      critical: 9,
                      high: 1,
                      medium: 1,
                      low: 2,
                      info: 6,
                    },
                    {
                      name: 'Demo API 2',
                      url: 'https://api-2.beaglehack.com/',
                      date: '11-Dec-2024',
                      critical: 4,
                      high: 2,
                      medium: 0,
                      low: 0,
                      info: 0,
                    },
                    {
                      name: 'Demo API',
                      url: 'https://api.beaglehack.com/',
                      date: '29-Apr-2025',
                      critical: 2,
                      high: 1,
                      medium: 0,
                      low: 0,
                      info: 0,
                    },
                    {
                      name: 'Demo Web Application',
                      url: 'https://web-2.beaglehack.com/',
                      date: '11-Dec-2024',
                      critical: 2,
                      high: 0,
                      medium: 6,
                      low: 0,
                      info: 3,
                    },
                  ].map((app, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{app.name}</strong>
                        <br />
                        <a href={app.url} className="text-info small" target="_blank" rel="noreferrer">
                          {app.url}
                        </a>
                      </td>
                      <td>{app.date}</td>
                      <td>{app.critical}</td>
                      <td>{app.high}</td>
                      <td>{app.medium}</td>
                      <td>{app.low}</td>
                      <td>{app.info}</td>
                      <td>
                        <Chip label="Critical" color="error" size="small" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card bg-dark text-white border-secondary text-center">
            <div className="card-header border-bottom">
              <strong>Catalog</strong>
            </div>
            <div className="card-body">
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <h3>39</h3>
              <small>vulnerabilities</small>

              <div className="mt-3 text-start ps-3">
                {pieData.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-1">
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: item.color,
                        display: 'inline-block',
                        marginRight: '8px',
                        borderRadius: '2px',
                      }}
                    ></span>
                    <span className="small">{`${item.value} - ${item.name}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vulnerabilities;
