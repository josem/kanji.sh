import React from 'react';
import PageLayout from '../../src/PageLayout';
import Config from '../../src/config/Config';

const TermsPage: React.FC = () => (
    <PageLayout>
        <h3>Terms &amp; Conditions</h3>
        <div>
            By using the web app (referred as &apos;app&apos; from here), these terms will
            automatically apply to you – you should make sure therefore that you read them carefully
            before using the app. The app itself, and all the trade marks, copyright, database
            rights and other intellectual property rights related to it, still belong to{' '}
            {Config.maintainer}.
        </div>
        <div>
            {Config.maintainer} is committed to ensuring that the app is as useful and efficient as
            possible. For that reason, we reserve the right to make changes to the app or to charge
            for its services, at any time and for any reason. We will never charge you for the app
            or its services without making it very clear to you exactly what you’re paying for.
        </div>
        <div>
            The app does use third party services that declare their own Terms and Conditions.
        </div>{' '}
        <div>
            Link to Terms and Conditions of third party service providers used by the app
            <ul>
                <li>
                    <a
                        href="https://firebase.google.com/terms/analytics"
                        target="_blank"
                        rel="noopener noreferrer">
                        Google Analytics for Firebase
                    </a>
                </li>
            </ul>
        </div>
        <div>
            You should be aware that there are certain things that {Config.maintainer} will not take
            responsibility for. Certain functions of the app will require the app to have an active
            internet connection. The connection can be Wi-Fi, or provided by your mobile network
            provider, but {Config.maintainer}
            cannot take responsibility for the app not working at full functionality if you don’t
            have access to Wi-Fi, and you don’t have any of your data allowance left.
        </div>
        <div>
            If you’re using the app outside of an area with Wi-Fi, you should remember that your
            terms of the agreement with your mobile network provider will still apply. As a result,
            you may be charged by your mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third party charges. In using the app,
            you’re accepting responsibility for any such charges, including roaming data charges if
            you use the app outside of your home territory (i.e. region or country) without turning
            off data roaming. If you are not the bill payer for the device on which you’re using the
            app, please be aware that we assume that you have received permission from the bill
            payer for using the app.
        </div>
        <div>
            Along the same lines, {Config.maintainer} cannot always take responsibility for the way
            you use the app i.e. You need to make sure that your device stays charged – if it runs
            out of battery and you can’t turn it on to avail the Service, {Config.maintainer}
            cannot accept responsibility.
        </div>
        <div>
            With respect to {Config.maintainer}’s responsibility for your use of the app, when
            you’re using the app, it’s important to bear in mind that although we endeavour to
            ensure that it is updated and correct at all times, we do rely on third parties to
            provide information to us so that we can make it available to you. {Config.maintainer}{' '}
            accepts no liability for any loss, direct or indirect, you experience as a result of
            relying wholly on this functionality of the app.
        </div>
        <div>
            At some point, we may wish to update the app. The app is currently available on web
            platform – the requirements for both systems(and for any additional systems we decide to
            extend the availability of the app to) may change, and you’ll need to download the
            updates if you want to keep using the app. {Config.maintainer} does not promise that it
            will always update the app so that it is relevant to you and/or works with the browser
            version that you have installed on your device. However, you promise to always accept
            updates to the application when offered to you, We may also wish to stop providing the
            app, and may terminate use of it at any time without giving notice of termination to
            you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses
            granted to you in these terms will end; (b) you must stop using the app, and (if needed)
            delete it from your device.
        </div>
        <h5>Changes to This Terms and Conditions</h5>
        <div>
            I may update our Terms and Conditions from time to time. Thus, you are advised to review
            this page periodically for any changes. I will notify you of any changes by posting the
            new Terms and Conditions on this page.
        </div>
        <div>These terms and conditions are effective as of 2020-10-01.</div>
        <h5>Contact Us</h5>
        <div>
            If you have any questions or suggestions about my Terms and Conditions, do not hesitate
            to contact me at <a href={`mailto:${Config.supportEmail}`}>{Config.supportEmail}</a>.
        </div>
    </PageLayout>
);

export default TermsPage;
