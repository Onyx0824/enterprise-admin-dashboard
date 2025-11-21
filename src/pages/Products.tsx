// src/pages/Products.tsx
import { Box, Paper, Typography } from '@mui/material';
import { DataGrid, GridToolbar, type GridColDef } from '@mui/x-data-grid';
import { mockProducts } from '../utils/mockData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: '產品名稱', width: 250 },
  { field: 'category', headerName: '類別', width: 130 },
  {
    field: 'price',
    headerName: '價格',
    width: 130,
    valueFormatter: (value) => `NT$${Number(value).toLocaleString()}`,
  },
  { field: 'stock', headerName: '庫存', width: 110 },
  { field: 'status', headerName: '狀態', width: 130 },
];

export default function Products() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          產品管理
        </Typography>
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={mockProducts}
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