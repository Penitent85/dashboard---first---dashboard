'use client';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is  Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 300 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const UsersPage = () => {
  return (
    <div className=' m-10 '>
      <h2 className='flex items-center justify-center font-semibold  mb-2 '>
        <DataGrid rows={rows} columns={columns} />
      </h2>
    </div>
  );
};

export default UsersPage;
