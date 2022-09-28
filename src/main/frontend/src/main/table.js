import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'time', label: '수업시간', minWidth: 100 },
    { id: 'teacher', label: '담당교사', minWidth: 60 },
    {
        id: 'name',
        label: '이름',
        minWidth: 130,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: '30',
        label: '30일상담',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'mothernumber',
        label: '母휴대폰',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'step',
        label: '수업단계',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('홍길동', 'IN', 1324171354, 3287263),
    createData('김밥밥', 'CN', 1403500365, 9596961),
    createData('이루피', 'IT', 60483973, 301340),
    createData('장발장', 'US', 327167434, 9833520),
    createData('강아지', 'CA', 37602103, 9984670),
    createData('고양이', 'AU', 25475400, 7692024),
    createData('멍멍이', 'DE', 83019200, 357578),
    createData('야옹이', 'IE', 4857000, 70273),
    createData('김이박', 'MX', 126577691, 1972550),
    createData('박박이', 'JP', 126317000, 377973),
    createData('가가가', 'FR', 67022000, 640679),
    createData('나나나', 'GB', 67545757, 242495),
    createData('다다다', 'RU', 146793744, 17098246),
    createData('라라라', 'NG', 200962417, 923768),
    createData('마마마', 'BR', 210147125, 8515767),
];

function StudentTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 350 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export default StudentTable;