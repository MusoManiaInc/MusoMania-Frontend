import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader/>
        <div className="flex-grow py-28 px-12 sm:px-8 md:px-16 lg:px-80">
          {/* Privacy Policy Container */}
            <div className="flex flex-col gap-20">
              {/* First row */}
              <div className="flex justify-center">
                <h1 className="font-bold text-5xl text-center">Privacy Policy</h1>
              </div>
              {/* Second row */}
              <div className="flex flex-col gap-4">
                <p className="font-bold">Effective Date: January 23, 2025</p>
                <p>Thank you for visitng MusoMania! MusoMania ("MusoMania", "we", "us" or "our") respects your privacy. When it comes to your personal information, we believe in transparency, not surprises. That's why we've set out here what personal information we collect, what we do with it and your choices and rights.</p>
                <p>By using any of MusoMania's Services, you confirm you have agreed to the Terms of Service and read and understood this <a className="underline" href='/privacy-policy'>Privacy Policy</a> and our <a className="underline" href='/terms-of-use'>Terms of Use.</a></p>
                <h2 className="font-bold text-2xl">Information We Collect</h2>
                <p>We collect a variety of information that you provide directly to us when you use MusoMania. This may include:</p>
                <ul className="list-disc pl-4">
                  <li>Personal information such as your name, email address, and phone number (optional).</li>
                  <li>MusoMania account credentials.</li>
                  <li>Music files, sheet music, and other content you upload to the platform.</li>
                  <li>Information about your musical preferences and interests.</li>
                  <li>Information about your interactions with other users on MusoMania, such as messages and friend connections.</li>
                </ul>
                <h2 className="font-bold text-2xl">How We Use Your Information</h2>
                <p>We use the information we collect to provide and improve MusoMania's services, including:</p>
                <ul className="list-disc pl-4">
                  <li>Creating and managing your MusoMania account.</li>
                  <li>Enabling you to upload and share your music and connect with other users.</li>
                  <li>Recommending music, bandmates, and collaborators based on your preferences.</li>
                  <li>Processing payments and facilitating transactions on the platform.</li>
                  <li>Sending you important information about MusoMania, such as service updates and security notices.</li>
                  <li>Providing customer support and troubleshooting.</li>
                </ul>
                <h2 className="font-bold text-2xl">Your Choices and Rights</h2>
                <p>You have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-4">
                  <li>**Access:** You can request access to the personal information we hold about you.</li>
                  <li>**Correction:** You can request the correction of any inaccurate or incomplete information.</li>
                  <li>**Deletion:** You can request the deletion of your personal information under certain circumstances.</li>
                  <li>**Data Portability:** You can request the transfer of your personal information to another service provider.</li>
                  <li>**Withdrawal of Consent:** You can withdraw your consent to the processing of your personal information at any time.</li>
                </ul>
                <p>To exercise these rights, please contact us at <a className="underline" href='mailto:support@musomania.ca'>support@musomania.ca</a> or by mail at:</p>
                <p>MusoMania Inc.</p>
                <p>500 University Ave</p>
                <p>Orillia, ON L3V 0B9</p>
                <p>Canada</p>
                <h2 className="font-bold text-2xl">Data Security and Retention</h2>
                <p>We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
                <h2 className="font-bold text-2xl">Children's Privacy</h2>
                <p>MusoMania is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us at <a className="underline" href='mailto:support@musomania.ca'>support@musomania.ca</a> so we can take steps to delete such information.</p>
                <h2 className="font-bold text-2xl">Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on the MusoMania website prior to the change becoming effective. We encourage you to review this Privacy Policy periodically for any changes.</p>
                <h2 className="font-bold text-2xl">Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a className="underline" href='mailto:support@musomania.ca'>support@musomania.ca</a></p>
              </div>
            </div>
        </div>
      <HomeFooter/>
    </div>
  );
}
