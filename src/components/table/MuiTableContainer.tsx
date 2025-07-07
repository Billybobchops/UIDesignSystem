import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import type { SxProps, Theme } from '@mui/material/styles';

interface MuiTableContainerProps {
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
}

const MuiTableContainer: React.FC<MuiTableContainerProps> = ({ children, sx = {} }) => {
    const baseStyles: SxProps<Theme> = {
        borderCollapse: 'separate',
        marginBottom: 'var(--invoicecloud-table-margin-bottom)',
        minWidth: 'var(--invoicecloud-table-min-width)',
        width: 'var(--invoicecloud-table-width)',

        '& .MuiTableBody-root > .MuiTableRow-root': {
            backgroundColor: 'var(--invoicecloud-table-background-color)',

            '&:not(.nested-row):nth-of-type(odd)': {
                backgroundColor: 'var(--invoicecloud-table-background-color-odd)',
            },
        },
        '& .MuiTableRow-root:not(.nested-row) .MuiTableCell-root': {
            padding: 'var(--invoicecloud-table-row-padding)',
        },
        '& .MuiTableRow-root.nested-row .nested-row .MuiTableCell-root': {
            padding: 'var(--invoicecloud-table-row-padding)',
        },
        '& .MuiTableHead-root .MuiTableRow-root': {
            boxShadow: '0 1px 0 0 var(--invoicecloud-table-active-row-border-color)',
            position: 'relative',
            zIndex: 1,
        },
        '& .MuiTableRow-root:not(.nested-row, .MuiTableRow-head, .MuiTableRow-footer):hover': {
            boxShadow: '0 1px 0 0 var(--invoicecloud-table-active-row-border-color), 0 -1px 0 0 var(--invoicecloud-table-active-row-border-color)',
            position: 'relative',
            zIndex: 1,
        },
        '& .MuiTableCell-root.MuiTableCell-footer.MuiTablePagination-root': {
            padding: '0 !important',
        },
    };

    return (
        <TableContainer sx={sx}>
            <Table sx={{ ...baseStyles, ...sx }}>{children}</Table>
        </TableContainer>
    );
};

export default MuiTableContainer;
