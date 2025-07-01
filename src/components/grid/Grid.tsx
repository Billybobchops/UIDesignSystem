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
    gap = 'var(--spacing-xs)',
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
        '--grid-columns': formatGridValue(columns),
        '--grid-rows': formatGridValue(rows),
        '--grid-gap': gap,
        '--grid-col-gap': columnGap || gap,
        '--grid-row-gap': rowGap || gap,
        '--grid-align-items': alignItems,
        '--grid-justify-items': justifyItems,
        '--grid-align-content': alignContent,
        '--grid-justify-content': justifyContent,
    } as React.CSSProperties;

    // Handle responsive breakpoints
    const responsiveVariables: Record<string, string> = {};
    // biome-ignore lint: forEach is fine
    Object.entries(responsive).forEach(([breakpoint, config]) => {
        responsiveVariables[`--grid-columns-${breakpoint}`] = formatGridValue(
            config.columns
        );

        if (config.rows) {
            responsiveVariables[`--grid-rows-${breakpoint}`] = formatGridValue(
                config.rows
            );
        }
        if (config.gap) {
            responsiveVariables[`--grid-gap-${breakpoint}`] = config.gap;
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
