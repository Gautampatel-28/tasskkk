import { Card, CardContent, Typography, Box } from '@mui/material';

const SalesCard = ({ logo, color, amount, label, change }) => {
  return (
    <Card sx={{ bgcolor: '#1e1e2f', color: 'white', m: 1 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Box component="span" sx={{ fontSize: 40 }}>{logo}</Box>
          <Box>
            <Typography variant="h6" sx={{ color: color }}>{amount}</Typography>
            <Typography variant="body2">{label}</Typography>
            <Typography variant="caption" sx={{ color: change > 0 ? 'lightgreen' : 'red' }}>
              {change > 0 ? `↑ ${change}%` : `↓ ${Math.abs(change)}%`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
