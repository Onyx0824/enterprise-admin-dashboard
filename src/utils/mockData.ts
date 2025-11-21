// src/utils/mockData.ts
export const mockUsers = [
  { id: 1, name: 'Onyx Chen', email: 'onyx@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: '張小明', email: 'ming@example.com', role: 'User', status: 'Active' },
  { id: 3, name: '李美玲', email: 'mei@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: '王大為', email: 'wei@example.com', role: 'User', status: 'Active' },
  { id: 5, name: '陳怡君', email: 'yj@example.com', role: 'Admin', status: 'Active' },
  { id: 6, name: '林志豪', email: 'chihhao@example.com', role: 'User', status: 'Active' },
  { id: 7, name: '吳雅婷', email: 'yating@example.com', role: 'Manager', status: 'Active' },
  { id: 8, name: '鄭宇軒', email: 'yuxuan@example.com', role: 'User', status: 'Inactive' },
];

export const mockProducts = [
  { id: 1, name: 'iPhone 16 Pro', category: '手機', price: 39900, stock: 89, status: '上架中' },
  { id: 2, name: 'MacBook Pro M4', category: '筆電', price: 52900, stock: 23, status: '上架中' },
  { id: 3, name: 'AirPods Pro 2', category: '耳機', price: 7990, stock: 156, status: '上架中' },
  { id: 4, name: 'iPad Air 2025', category: '平板', price: 22900, stock: 0, status: '缺貨' },
  { id: 5, name: 'Apple Watch Ultra 2', category: '手錶', price: 28900, stock: 45, status: '上架中' },
  { id: 6, name: 'Magic Keyboard', category: '配件', price: 10900, stock: 78, status: '上架中' },
];

export const mockOrders = [
  { id: 'ORD-001', customer: '張小明', total: 48700, status: '已完成', date: '2025-11-20' },
  { id: 'ORD-002', customer: '李美玲', total: 7990, status: '處理中', date: '2025-11-19' },
  { id: 'ORD-003', customer: '王大為', total: 109800, status: '已出貨', date: '2025-11-18' },
  { id: 'ORD-004', customer: '陳怡君', total: 22900, status: '已完成', date: '2025-11-17' },
  { id: 'ORD-005', customer: '林志豪', total: 57800, status: '退貨', date: '2025-11-16' },
  { id: 'ORD-006', customer: '吳雅婷', total: 39900, status: '處理中', date: '2025-11-15' },
];