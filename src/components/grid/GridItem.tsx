import type { Spacing } from '@styles/spacing';

interface GridItemProps {
    area?: string;
    children: React.ReactNode;
    className?: string;
    columnEnd?: number | string;
    columnSpan?: number;
    columnStart?: number | string;
    rowEnd?: number | string;
    rowSpan?: number;
    rowStart?: number | string;
    spacing?: Spacing | Spacing[];
    style?: React.CSSProperties;
}

const GridItem: React.FC<
    GridItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({
    area,
    children,
    className = '',
    columnEnd,
    columnSpan,
    columnStart,
    rowEnd,
    rowSpan,
    rowStart,
    spacing,
    style = {},
    ...props
}) => {
    const itemStyle = {
        ...(columnStart && { gridColumnStart: columnStart }),
        ...(columnEnd && { gridColumnEnd: columnEnd }),
        ...(rowStart && { gridRowStart: rowStart }),
        ...(rowEnd && { gridRowEnd: rowEnd }),
        ...(columnSpan && { gridColumn: `span ${columnSpan}` }),
        ...(rowSpan && { gridRow: `span ${rowSpan}` }),
        ...(area && { gridArea: area }),
        ...style,
    };

    return (
        <div
            className={`grid-item ${className} ${spacing}`}
            style={itemStyle}
            {...props}
		>
            {children}
        </div>
    );
};

export default GridItem;
