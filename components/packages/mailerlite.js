import MailerLite from 'react-mailerlite-form'

const MailerLiteSubscribe = () => {
    return (
        <>
            <MailerLite
                code={123456}
                trackerId="vc2g234g2lewklfl23j4234"
                header={(<div>Some Instructions</div>)}
                submitButtonContent="Submit"
                submittingButtonContent="Submitting..."
                submissionComplete={(<div>Success!</div>)}
                emailPlaceholder="Enter your email..."
            />
        </>
    );
}

export default MailerLiteSubscribe;