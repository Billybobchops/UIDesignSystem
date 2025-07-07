import { FirstPage, LastPage, NextPage, PreviousPage } from '@components/Icon';
import { Pagination, PaginationItem } from '@mui/material';

export interface TablePaginationNumeralsProps {
    currentPage: number;
    totalRows: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

const TablePaginationNumerals: React.FC<TablePaginationNumeralsProps> = ({
    currentPage,
    totalRows,
    rowsPerPage,
    onPageChange,
}) => {
    const pageCount = Math.ceil(totalRows / rowsPerPage);

    if (pageCount <= 1) return null;

    return (
        <Pagination
            page={currentPage + 1}
            count={pageCount}
            onChange={(_, page) => onPageChange(page)}
            shape="rounded"
            showFirstButton
            showLastButton
            renderItem={item => (
                <PaginationItem
                    slots={{ previous: PreviousPage, next: NextPage, first: FirstPage, last: LastPage }}
                    {...item}
                />
            )}
            siblingCount={1} // Number of pages to show on each side of current page
            boundaryCount={1} // Number of pages to show at start/end
            sx={{
                '& .MuiPagination-ul': {
                    flexFlow: 'row',
                    flexWrap: 'nowrap',
                },
                '& .MuiButtonBase-root': {
                    color: 'var(--table-pagination-numeral-color)',
                    borderRadius: 'var(--table-pagination-numeral-border-radius)',
                    fontWeight: 'var(--table-pagination-numeral-font-weight)',
                    fontSize: 'var(--table-pagination-numeral-font-size)',

                    '&.Mui-selected': {
                        backgroundColor: 'var(--table-pagination-numeral-selected-background-color)',
                        borderRadius: 'var(--table-pagination-numeral-border-radius)',
                        color: 'var(--table-pagination-numeral-selected-color)',

                        '&:hover': {
                            backgroundColor: 'var(--table-pagination-numeral-selected-background-color)',
                        },
                    },
                },
            }}
        />
    );
};

export default TablePaginationNumerals;
