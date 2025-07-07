import SimpleButton from '@components/button/SimpleButton';

const ButtonSimpleStory = () => {
    return (
        <>
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text='cancel'
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text='cancel'
                variant='alternate'
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                text='cancel'
                variant='error'
            />
            <SimpleButton
                clickHandler={() => {
                    console.log('test');
                }}
                disabled={true}
                text='cancel'
                variant='error'
            />
        </>
    );
};

export default ButtonSimpleStory;
