import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import classes from './LinkIconButton.module.scss';

interface IconButtonProps {
    ariaLabel?: string;
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    iconPosition?: 'start' | 'end';
    spacing?: Spacing | Spacing[];
    text?: string;
    type?: 'button' | 'submit';
    variant?: 'base' | 'alternate' | 'default' | 'error';
}

const IconButton: React.FC<IconButtonProps> = ({
    ariaLabel,
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
    const getFillColor = (variant: string, disabled: boolean) => {
        if (disabled) {
            return { fill: 'var(--invoicecloud-utility-neutral-60)', hoverFill: 'var(--invoicecloud-utility-neutral-60)' };
        }
        switch (variant) {
            case 'base':
                return {
                    fill: 'var(--invoicecloud-base-theme-4)',
                    hoverFill: text ? 'var(--invoicecloud-base-theme-3)' : 'var(--invoicecloud-utility-neutral-0)',
                };
            case 'alternate':
                return {
                    fill: 'var(--invoicecloud-alternate-theme-3)',
                    hoverFill: text ? 'var(--invoicecloud-alternate-theme-4)' : 'var(--invoicecloud-utility-neutral-0)',
                };
            case 'error':
                return {
                    fill: 'var(--invoicecloud-link-icon-button-error-color)',
                    hoverFill: text ? 'var(--invoicecloud-link-icon-button-error-color-hover)' : 'var(--invoicecloud-utility-neutral-0)',
                };
            default:
                return {
                    fill: 'var(--invoicecloud-utility-neutral-60)',
                    hoverFill: text ? 'var(--invoicecloud-utility-neutral-60)' : 'var(--invoicecloud-utility-neutral-0)',
                };
        }
    };
    const fillColor = isHovered ? getFillColor(variant, disabled).hoverFill : getFillColor(variant, disabled).fill;

    return (
        <button
            aria-label={ariaLabel}
            className={clsx(
                classes.button,
                classes[variant],
                !text && classes.iconOnly,
                disabled && classes.disabled,
                spacing,
            )}
            disabled={disabled}
            onClick={clickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            type={type}
        >
            {icon && iconPosition === 'start' && React.cloneElement(icon, { fill: fillColor })}
            {text && <span>{text}</span>}
            {icon && iconPosition === 'end' && React.cloneElement(icon, { fill: fillColor })}
        </button>
    );
};

export default IconButton;
