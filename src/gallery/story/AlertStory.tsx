import Alert from '@components/feedback/Alert';

const AlertStory = () => {
    return (
        <>
            <Alert isDismissable={true} variant='info'>
                Please enter a valid Phone Number to receive TEXT notifications.
            </Alert>
            <Alert isDismissable={false} variant='info'>
                Note about product or how to use it. We can use this to call out
                new features or offer general knowledge.
            </Alert>
            <Alert isDismissable={true} variant='success'>
                Please enter a valid Phone Number to receive TEXT notifications.
            </Alert>
            <Alert isDismissable={false} variant='success'>
                Please enter a valid Phone Number to receive TEXT notifications.
            </Alert>
            <Alert isDismissable={true} variant='error'>
                Please enter a valid Phone Number to receive TEXT notifications.
            </Alert>
            <Alert isDismissable={false} variant='error'>
                Please enter a valid Phone Number to receive TEXT notifications.
            </Alert>
            <Alert isDismissable={true} variant='warning'>
                Note: Signing up for AutoPay will automatically enroll you in
                Paperless Billing as well.
            </Alert>
            <Alert isDismissable={false} variant='warning'>
                Note about product or how to use it. We can use this to call out
                new features or offer general knowledge.
            </Alert>
        </>
    );
};

export default AlertStory;
