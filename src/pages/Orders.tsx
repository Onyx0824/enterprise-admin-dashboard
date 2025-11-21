// src/pages/Orders.tsx
import { Box, Paper, Typography, Chip } from '@mui/material';
import { DataGrid, GridToolbar, type GridColDef } from '@mui/x-data-grid';
import { mockOrders } from '../utils/mockData';

const columns: GridColDef[] = [
  { field: 'id', headerName: '訂單編號', width: 150 },
  { field: 'customer', headerName: '客戶', width: 150 },
  {
    field: 'total',
    headerName: '總金額',
    width: 140,
    valueFormatter: (value) => `NT$${Number(value).toLocaleString()}`,
  },
  { field: 'date', headerName: '日期', width: 130 },
  {
    field: 'status',
    headerName: '狀態',
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === '已完成' ? 'success' :
          params.value === '處理中' ? 'warning' :
          params.value === '已出貨' ? 'info' :
          params.value === '退貨' ? 'error' : 'default'
        }
        size="small"
      />
    ),
  },
];

export default function Orders() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          訂單管理
        </Typography>
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={mockOrders}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            pageSizeOptions={[10, 25, 50]}
          />
        </Box>
      </Paper>
    </Box>
  );
}