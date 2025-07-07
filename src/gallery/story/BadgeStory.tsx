import Badge from '@components/typography/Badge';

const BadgeStory = () => {
    return (
        <>
            <Badge content="info" variant="info" />
            <Badge content="Success" variant="success" />
            <Badge content="Error" variant="error" />
            <Badge content="Warning" variant="warning" />
            <Badge content="Neutral" variant="neutral" />
        </>
    );
};

export default BadgeStory;
