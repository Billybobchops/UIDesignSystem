import React from 'react';
import classes from './Card.module.scss';
import Heading from '@components/typography/Heading';
import LinkIconButton from '@components/button/LinkIconButton';
import { ChevronRight } from '@components/Icon';
import Paragraph from '@components/typography/Paragraph';
import type { HeadingLevel } from '@components/typography/Heading';

interface CardProps {
    clickHandler?: () => void;
    children: React.ReactNode;
    disabled: boolean;
    hasDialog?: boolean;
	headingSemanticLevel?: HeadingLevel;
	headingClassLevel?: HeadingLevel;
    linkButtonClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    linkButtonIcon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    linkButtonIconPosition?: 'start' | 'end';
    linkButtonTitle?: string;
    lineClamp?: number;
    title: string;
    titleIcon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

const Card: React.FC<CardProps> = ({
    clickHandler,
    children,
    disabled = false,
    hasDialog = false,
	headingSemanticLevel = 'h3',
	headingClassLevel = 'h3',
    linkButtonClickHandler,
    linkButtonIcon,
    linkButtonIconPosition,
    linkButtonTitle,
    lineClamp,
    title,
    titleIcon,
}) => {
    const linkButton = (
        <div className={classes.linkButtonContainer}>
            <LinkIconButton
                clickHandler={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (linkButtonClickHandler) {
                        e.stopPropagation();
                        linkButtonClickHandler(e);
                    } else if (clickHandler) {
                        clickHandler();
                    }
                }}
                disabled={disabled}
                icon={
                    linkButtonIcon ? (
                        React.cloneElement(linkButtonIcon, {
                            fill: 'currentColor',
                        })
                    ) : (
                        <ChevronRight />
                    )
                }
                iconPosition={linkButtonIconPosition ? linkButtonIconPosition : 'end'}
                text={linkButtonTitle ? linkButtonTitle : ''}
                variant='base'
            />
        </div>
    );

    const cardContent = (
        <div className={classes.card}>
            <button
                type='button'
                onClick={clickHandler}
                className={classes.cardButton}
                disabled={disabled}
			>
                <Heading semanticLevel={headingSemanticLevel} classLevel={headingClassLevel}>
                    {titleIcon ? (
                        <span aria-hidden='true' className={classes.iconStart}>
                            {React.cloneElement(titleIcon, {
                                fill: 'currentColor',
                            })}
                        </span>
                    ) : null}
                    {title}
                </Heading>

                <div
                    className={classes.cardContent}
                    style={lineClamp ? ({ '--line-clamp': lineClamp, } as React.CSSProperties) : undefined}
				>
                    <Paragraph>{children}</Paragraph>
                </div>
            </button>

            {linkButtonTitle && linkButton}
        </div>
    );

    return hasDialog ? (
        <div className={classes.hasDialogCardContent}>{cardContent}</div>
    ) : (
        cardContent
    );
};

export default Card;
