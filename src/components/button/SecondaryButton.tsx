import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import classes from './SecondaryButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'base' | 'alternate' | 'default' | 'error';
}

const SecondaryButton: React.FC<ButtonProps> = ({
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

export default SecondaryButton;
