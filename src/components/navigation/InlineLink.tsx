import clsx from 'clsx';
import classes from './InlineLink.module.scss';

interface LinkProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: string;
    variant?: 'base' | 'default';
}

const InlineLink: React.FC<LinkProps> = ({
    children,
    onClick,
    href = '#',
    target = '_blank',
    variant = 'base',
}) => {
    return (
        <a
            className={clsx(classes.link, classes[variant])}
            href={href}
            onClick={onClick}
            target={target}
		>
            {children}
        </a>
    );
};

export default InlineLink;
