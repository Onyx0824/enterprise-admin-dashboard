// src/pages/Dashboard.tsx
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
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

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid
            key={stat.title}
            xs={12}
            sm={6}
            md={3}
            // 完全不使用 item 屬性 + 不使用 component 屬性
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
