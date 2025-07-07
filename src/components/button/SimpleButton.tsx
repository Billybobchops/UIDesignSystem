import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './SimpleButton.module.scss';

interface SimpleButtonProps {
    clickHandler: () => void;
    disabled?: boolean;
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'base' | 'alternate' | 'error';
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
    clickHandler,
    disabled = false,
    spacing,
    text,
    type = 'button',
    variant = 'base',
}) => {
    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
        >
            {text}
        </button>
    );
};

export default SimpleButton;
