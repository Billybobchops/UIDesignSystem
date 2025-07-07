import Divider from '@components/layout/Divider';
import Paragraph from '@components/typography/Paragraph';

const DividerStory = () => {
    return (
        <>
            <Paragraph>This is a dark divider!</Paragraph>
            <Divider isDark={true} />
            <Paragraph>This is a light divider!</Paragraph>
            <Divider isDark={false} />
        </>
    );
};

export default DividerStory;
