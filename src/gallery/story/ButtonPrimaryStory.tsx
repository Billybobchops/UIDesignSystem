import { ChevronRight, MenuCloseMedium, SearchDefault } from '@components/Icon';
import PrimaryButton from '@components/button/PrimaryButton';

const ButtonPrimaryStory = () => {
    return (
        <span
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'start',
            }}
		>
            <PrimaryButton
                disabled={false}
                icon={<SearchDefault />}
                iconPosition='start'
                text='Search Invoices'
            />
            <PrimaryButton
                disabled={false}
                icon={<SearchDefault />}
                iconPosition='start'
                text='Search Invoices'
                variant='alternate'
            />
            <PrimaryButton
                disabled={true}
                icon={<SearchDefault />}
                iconPosition='start'
                text='Search Invoices'
            />
            <PrimaryButton
                disabled={false}
                icon={<ChevronRight />}
                text='Register Now'
            />
            <PrimaryButton
                disabled={true}
                icon={<ChevronRight />}
                text='Register Now'
            />
            <PrimaryButton
                disabled={false}
                icon={<MenuCloseMedium />}
                iconPosition={'start'}
                text='Remove Email Address'
                variant='error'
            />
            <PrimaryButton
                disabled={true}
                icon={<MenuCloseMedium />}
                iconPosition={'start'}
                text='Remove Email Address'
                variant='error'
            />
        </span>
    );
};

export default ButtonPrimaryStory;
