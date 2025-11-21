// src/pages/Dashboard.tsx
import { Box, Typography, Card, CardContent } from '@mui/material';
import { People, Inventory, ShoppingCart, TrendingUp } from '@mui/icons-material';

export default function Dashboard() {
  const stats = [
    { title: '總使用者', value: '1,234', icon: <People sx={{ fontSize: 40, color: '#1976d2' }} /> },
    { title: '總產品', value: '567', icon: <Inventory sx={{ fontSize: 40, color: '#2e7d32' }} /> },
    { title: '總訂單', value: '8,901', icon: <ShoppingCart sx={{ fontSize: 40, color: '#d32f2f' }} /> },
    { title: '營收成長', value: '+23%', icon: <TrendingUp sx={{ fontSize: 40, color: '#ed6c02' }} /> },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        歡迎回到 Onyx 企業後台 ✨
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          margin: -1.5, // 抵消子 Box 的 padding
        }}
      >
        {stats.map((stat) => (
          <Box
            key={stat.title}
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 24px)', md: '1 1 calc(25% - 24px)' },
              minWidth: 250,
            }}
          >
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {stat.icon}
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    {stat.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
