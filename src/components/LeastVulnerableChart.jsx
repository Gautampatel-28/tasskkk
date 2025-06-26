import { Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'App 1', score: 2.0 },
  { name: 'App 2', score: 1.9 },
  { name: 'App 3', score: 2.0 },
  { name: 'App 4', score: 1.8 },
];

const LeastVulnerableChart = () => {
  return (
    <Box className="card bg-dark text-white p-3 mb-4 h-100">
      <h6 className="border-bottom pb-2 mb-3">Least Vulnerable Application</h6>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" domain={[0, 3]} />
          <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
          <Bar
            dataKey="score"
            fill="#42A5F5" 
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LeastVulnerableChart;