import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React, { useState } from 'react';
import classes from './CTAButton.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text: string;
    type?: 'button' | 'submit';
    variant?: 'base' | 'alternate' | 'outline';
}

const CTAButton: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    icon,
    iconPosition = 'end',
    spacing,
    text,
    type = 'button',
    variant = 'base',
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const fillColor = (() => {
        if (disabled) {
            return 'var(--invoicecloud-primary-button-disabled-color)';
        }

        if (isHovered && variant !== 'outline') {
            return 'var(--invoicecloud-utility-neutral-0)';
        }

        if (variant === 'outline') {
            if (isHovered) {
                return 'var(--invoicecloud-base-theme-3)';
            }
            return 'var(--invoicecloud-base-theme-4)';
        }
    })();

    return (
        <button
            className={clsx(classes.button, classes[variant], disabled && classes.disabled, spacing)}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon && iconPosition === 'start' && React.cloneElement(icon, { fill: fillColor })}
            {text}
            {icon && iconPosition === 'end' && React.cloneElement(icon, { fill: fillColor })}
        </button>
    );
};

export default CTAButton;
