import Divider from '@/components/layout/Divider';
import { ChevronRight, MenuCloseMedium, NewWindow, Plus } from '@components/Icon';
import LinkIconButton from '@components/button/LinkIconButton';

const LinkIconButtonStory = () => {
    return (
        <>
            <LinkIconButton disabled={false} icon={<ChevronRight />} text="Recent Open Invoices" variant="base" />
            <LinkIconButton disabled={true} icon={<ChevronRight />} text="Recent Open Invoices" variant="base" />
            <LinkIconButton
                disabled={false}
                icon={<NewWindow />}
                iconPosition="start"
                text="View Invoice"
                variant="base"
            />
            <LinkIconButton
                disabled={true}
                icon={<NewWindow />}
                iconPosition="start"
                text="View Invoice"
                variant="base"
            />
            <LinkIconButton
                disabled={false}
                icon={<MenuCloseMedium />}
                iconPosition="start"
                text="Delete Email Address"
                variant="error"
            />
            <LinkIconButton
                disabled={true}
                icon={<MenuCloseMedium />}
                iconPosition="start"
                text="Delete Email Address"
                variant="error"
            />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" text="Add Account" variant="alternate" />
            <LinkIconButton disabled={true} icon={<Plus />} iconPosition="start" text="Add Account" variant="alternate" />

            <Divider isDark={true} />

            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="error" />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="alternate" />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" variant="base" />
            <LinkIconButton disabled={true} icon={<Plus />} iconPosition="start" variant="alternate" />
        </>
    );
};

export default LinkIconButtonStory;
