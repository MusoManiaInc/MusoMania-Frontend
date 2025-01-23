import HomeFooter from "@/components/footer/home-footer";
import HomeHeader from "@/components/navbar/home-header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeHeader />
        <div className="flex-grow py-28 px-12 sm:px-8 md:px-16 lg:px-80">
          {/* Terms of Service Container */}
            <div className="flex flex-col gap-20">
              {/* First row */}
              <div className="flex justify-center">
                <h1 className="font-bold text-5xl text-center">Terms of Service</h1>
              </div>
              {/* Second row */}
              <div className="flex flex-col gap-4">
                <p className="font-bold">Welcome to MusoMania ("MusoMania", "we", "us" or "our").</p>
                <p>These Terms of Service ("Terms", "Terms of Service") govern your access to and use of the MusoMania website, mobile application, and other related services (collectively, the "Service") operated by MusoMania, Inc. ("MusoMania", "us", "we", or "our").</p>
                <p>Please read these Terms carefully before accessing or using the Service. By accessing or using any part of the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access or use the Service.</p>
                <h2 className="font-bold text-2xl">Who Can Use the Service</h2>
                <p>You must be at least 13 years old to access or use the Service. By accessing or using the Service, you represent and warrant that you are at least 13 years old and of legal capacity to enter into a binding agreement.</p>
                <h2 className="font-bold text-2xl">Your Account</h2>
                <p>To access some features of the Service, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activity that occurs under your account. You agree to immediately notify MusoMania of any unauthorized use of your account or any other security breaches.</p>
                <h2 className="font-bold text-2xl">User Content</h2>
                <p>You may upload, post, or submit content, such as music, sheet music, comments, and other materials ("User Content") to the Service. You retain all ownership rights to your User Content. However, by submitting User Content to the Service, you grant MusoMania a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, publish, distribute, and translate your User Content for the purpose of providing and improving the Service.</p>
                <p>You are responsible for all of your User Content and any harm resulting from it. You agree not to submit User Content that is illegal, obscene, threatening, defamatory, invasive of privacy, or infringes on the intellectual property rights of others. MusoMania reserves the right to remove or disable access to any User Content at any time without notice.</p>
                <h2 className="font-bold text-2xl">Intellectual Property</h2>
                <p>The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by MusoMania, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                <h2 className="font-bold text-2xl">Termination</h2>
                <p>MusoMania may terminate or suspend your access to and use of the Service at any time, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms.</p>
                <h2 className="font-bold text-2xl">Disclaimer</h2>
                <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. MUSOMANIA MAKES NO WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, FREE OF ERRORS, OR SECURE. YOU UNDERSTAND THAT YOU DOWNLOAD FROM, OR OTHERWISE OBTAIN CONTENT OR SERVICES THROUGH, THE SERVICE AT YOUR OWN RISK. YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOADS OR YOUR USE OF THE SERVICE.</p>
                <h2 className="font-bold text-2xl">Limitation of Liability</h2>
                <p>IN NO EVENT WILL MUSOMANIA, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, DIRECTORS, CONTRACTORS, OR REPRESENTATIVES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF MUSOMANIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING FROM OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE OR ANY CONTENT ON THE SERVICE.</p>
                <h2 className="font-bold text-2xl">Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions.</p>
                <h2 className="font-bold text-2xl">Entire Agreement</h2>
                <p>These Terms constitute the entire agreement between you and MusoMania with respect to the Service and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and MusoMania with respect to the Service.</p>
                <h2 className="font-bold text-2xl">Updates to the Terms</h2>
                <p>We may update these Terms from time to time. If we make material changes, we will notify you by email or by posting a notice on the MusoMania website prior to the change becoming effective. We encourage you to review these Terms periodically for any changes.</p>
                <h2 className="font-bold text-2xl">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <a className="underline" href='mailto:support@musomania.ca'>support@musomania.ca</a></p>
              </div>
            </div>
        </div>
      <HomeFooter />
    </div>
  );
}