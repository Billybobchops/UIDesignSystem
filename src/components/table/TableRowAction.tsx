import { TableChevronCollapsed, TableChevronExpanded } from '@components/Icon';
import Checkbox from '@components/form/Checkbox';
import VisuallyHidden from '../accessibility/VisuallyHidden';
import MuiTableCell from './MuiTableCell';
import classes from './TableRowAction.module.scss';

interface TableRowActionProps {
    onClick: () => void;
    isOpen?: boolean;
    isActive?: boolean;
    type: 'chevron' | 'checkbox';
}

const TableRowAction: React.FC<TableRowActionProps> = ({ onClick, isOpen, isActive = false, type }) => {
    const accessibleText = type === 'chevron' ? (isOpen ? 'Collapse' : 'Expand') : 'Select all rows';

    return (
        <MuiTableCell
            sx={{
                padding: '0 !important',
                backgroundColor: isOpen ? 'var(--invoicecloud-invoice-cloud-table-dynamic-active-row-action-background-color)' : 'none',
                boxShadow: isOpen ? '0 1px 0 0 var(--invoicecloud-invoice-cloud-table-active-row-border-color)' : 'none',
                position: isOpen ? 'relative' : 'static',
                minWidth: '50px',
                width: '5%',
            }}
        >
            <button
                className={classes.button}
                onClick={type === 'chevron' ? onClick : undefined}
                type="button"
                aria-expanded={type === 'chevron' ? isOpen : undefined}
            >
                {type === 'chevron' ? (
                    isOpen ? (
                        <TableChevronExpanded fill={'var(--invoicecloud-invoice-cloud-table-chevron-color)'} />
                    ) : (
                        <TableChevronCollapsed fill={'var(--invoicecloud-invoice-cloud-table-chevron-color)'} />
                    )
                ) : (
                    <Checkbox checked={isActive} onChange={onClick} spacing={'u-m-none'} />
                )}
                <VisuallyHidden>{accessibleText}</VisuallyHidden>
            </button>
        </MuiTableCell>
    );
};

export default TableRowAction;
