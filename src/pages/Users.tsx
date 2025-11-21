// src/pages/Users.tsx   ← 取代全部 import 那一區
import { useState, useMemo } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Chip,
  Avatar,
} from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  type GridColDef,               // ← 改用 type import
  type GridRenderCellParams,      // ← 改用 type import
} from '@mui/x-data-grid';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { mockUsers } from '../utils/mockData';

export default function Users() {
  const [users, setUsers] = useState(mockUsers);

  const handleDelete = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'avatar',
        headerName: '頭像',
        width: 80,
        renderCell: (params: GridRenderCellParams) => (
          <Avatar alt={params.row.name}>{params.row.name.charAt(0)}</Avatar>
        ),
      },
      { field: 'name', headerName: '姓名', width: 150 },
      { field: 'email', headerName: '電子郵件', width: 220 },
      { field: 'role', headerName: '角色', width: 120 },
      {
        field: 'status',
        headerName: '狀態',
        width: 110,
        renderCell: (params: GridRenderCellParams) => (
          <Chip
            label={params.value}
            color={params.value === 'Active' ? 'success' : 'secondary'}
            size="small"
          />
        ),
      },
      {
        field: 'actions',
        headerName: '操作',
        width: 150,
        sortable: false,
        renderCell: (params: any) => (
          <>
            <Tooltip title="檢視"><IconButton><VisibilityIcon fontSize="small" /></IconButton></Tooltip>
            <Tooltip title="編輯"><IconButton color="primary"><EditIcon fontSize="small" /></IconButton></Tooltip>
            <Tooltip title="刪除">
              <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        ),
      },
    ],
    []
  );

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">使用者管理</Typography>
          <Button variant="contained" startIcon={<AddIcon />}>新增使用者</Button>
        </Box>

        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{ toolbar: { showQuickFilter: true } }}
            pageSizeOptions={[10, 25, 50]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </Box>
  );
}