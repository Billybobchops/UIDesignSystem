import type { Spacing } from '@styles/spacing';

type GridValue = number | string;

interface ResponsiveConfig {
    columns: GridValue;
    rows?: GridValue;
    gap?: string;
}

interface ResponsiveBreakpoints {
    sm?: ResponsiveConfig;
    md?: ResponsiveConfig;
    lg?: ResponsiveConfig;
}

interface GridProps {
    children: React.ReactNode;
    columns: GridValue;
    rows?: GridValue;
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignContent?:
        | 'start'
        | 'end'
        | 'center'
        | 'stretch'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    justifyContent?:
        | 'start'
        | 'end'
        | 'center'
        | 'stretch'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
    className?: string;
	spacing?: Spacing | Spacing[];
    style?: React.CSSProperties;
    responsive?: ResponsiveBreakpoints;
}

const Grid: React.FC<GridProps> = ({
    children,
    columns,
    rows = 'auto',
    gap = 'var(--invoicecloud-spacing-xs)',
    columnGap,
    rowGap,
    alignItems = 'stretch',
    justifyItems = 'stretch',
    alignContent = 'start',
    justifyContent = 'start',
    className = '',
	spacing,
    style = {},
    responsive = {},
}) => {
    // Convert numeric values to repeat() syntax, leave strings as-is
    const formatGridValue = (value: GridValue): string => {
        if (typeof value === 'number') {
            return `repeat(${value}, 1fr)`;
        }
        return value;
    };

    // Build CSS custom properties
    const cssVariables: React.CSSProperties = {
        '--invoicecloud-grid-columns': formatGridValue(columns),
        '--invoicecloud-grid-rows': formatGridValue(rows),
        '--invoicecloud-grid-gap': gap,
        '--invoicecloud-grid-col-gap': columnGap || gap,
        '--invoicecloud-grid-row-gap': rowGap || gap,
        '--invoicecloud-grid-align-items': alignItems,
        '--invoicecloud-grid-justify-items': justifyItems,
        '--invoicecloud-grid-align-content': alignContent,
        '--invoicecloud-grid-justify-content': justifyContent,
    } as React.CSSProperties;

    // Handle responsive breakpoints
    const responsiveVariables: Record<string, string> = {};
    // biome-ignore lint: forEach is fine
    Object.entries(responsive).forEach(([breakpoint, config]) => {
        responsiveVariables[`--invoicecloud-grid-columns-${breakpoint}`] = formatGridValue(
            config.columns
        );

        if (config.rows) {
            responsiveVariables[`--invoicecloud-grid-rows-${breakpoint}`] = formatGridValue(
                config.rows
            );
        }
        if (config.gap) {
            responsiveVariables[`--invoicecloud-grid-gap-${breakpoint}`] = config.gap;
        }
    });

    const gridStyle = {
        ...cssVariables,
        ...responsiveVariables,
        ...style,
    };

    return (
        <div className={`grid-component ${className} ${spacing}`} style={gridStyle}>
            {children}
        </div>
    );
};

export default Grid;
