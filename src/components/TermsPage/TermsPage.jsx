import React from 'react';
import { Analytics } from '../../services';
import './TermsPage.scss';

const TermsPage = () => {
  // Record terms page visit
  Analytics.pageview('/terms');

  return (
    <section className="section-panel">
      <h1 className="section-title">Terms &amp; Conditions</h1>
      <div className="terms-card">
        <h3>Acceptance of Terms</h3>
        <p>
          By accessing or using this website in any way, you accept and agree to be bound by the
          terms and provisions of this agreement. If you do not agree with any of these terms,
          please do NOT use this site.
        </p>
        <h3>Accuracy of Information</h3>
        <p>
          The contents contained in Breedie can contain errors. We do not guarantee its accuracy and
          thus cannot be held responsible for any problems or damage that can occur as a result of
          making use of such material and content.
        </p>
        <h3>User Conduct</h3>
        <p>
          Breedie hosts a public forum in which people can share openly via its post, likes, and
          comments features. Although we endorse and invite you to share opinions, questions and
          comments in an open and constructive way, Breedie must NOT be used to distribute spam
          messages, spread malicious links or post commercial advertisements. Similarly, they should
          NOT contain obscene, indecent, defamatory, or offensive language of any kind. As a user,
          you are expected to flag as &apos;inappropiate&apos; any comment or post you feel does not
          follow such terms. We reserve the right to delete any comments that don&apos;t follow such
          rules.
        </p>
        <p>
          Additionally, you agree not to use or provide software or services that interact or
          interoperate with Breedie (e.g. for downloading, posting, emailing, flagging, uploading,
          search, or mobile use, unless they are general purpose web browsers and email clients).
          Scripts, robots, scrapers, spiders, crawlers, etc. are completely prohibited, as are
          unsolicited, misleading, unlawful and/or spam postings/email.
        </p>
        <h3>Disclaimer</h3>
        <p>
          The features on Breedie are provided &quot;as is&quot; and &quot;as available&quot;. We
          are not liable for any harm resulting from user content, user conduct (e.g. illegal
          conduct), your use, or our representations. We make no warranty, expressed or implied, and
          hereby disclaim all warranties, including but without timited to conditions of
          merchantability, non-infringement of intellectual property or other violation of rights.
          We, in general, make no representation concerning accuracy, likely results, or reliability
          of the use of the materials on our website or otherwise relating to such materials, or on
          any sites linked to this site.
        </p>
        <p>
          The comments on the page do NOT reflect the views or opinions of Breedie; they are the
          views and opinions of those and solely those users from which the comment or post
          originated from. Therefore, Breedie is not responsible and cannot be held liable for the
          contents of any comment on the website at any time.
        </p>
        <p>
          Breedie is not responsible for any spam or damage received as a result of posting your
          email publicly on the web. You are solely responsible for any repercusions this may have.
          We recommend you practice extreme caution when contacting and/or being contacted by others
          (possibly strangers) regarding any action you take within the website. Breedie is not
          liable for any indirect, special, incidental, consequential or punitive damages, or any
          loss (e.g. of profit, revenue, data, or goodwill).
        </p>
        <h3>Cookies and Google Services</h3>
        <p>
          Our website uses cookies to provide a better user experience across sessions, like saving
          some user details for better user experience. We also use the Google Analytics API in
          order to measure website traffic, getting feedback of the website&apos;s usability and to
          better cater our audience. The aformentioned service might also use cookies: we have no
          control over these. If you prefer not to use cookies, make an effort to turn them off on
          your browser.
        </p>
        <h3>Governing Law</h3>
        <p>
          This agreement is governed in accordance with the laws of the State of Puerto Rico in the
          United States. General Terms and Conditions applicable to Use of a Web Site.
        </p>
        <h3>Changes and Modifications to Terms of Use</h3>
        <p>
          ElProfeShop reserves the right to modify these Terms of Use at any time without prior
          notification. Therefore, we ask you to check and review these Terms on a regular basis.
          These terms were last updated July 2<sup>nd</sup>, 2020.
        </p>
        <h3>Complaints and Contact</h3>
        <p>
          If you have any questions, concerns, or queries about these Terms of Use, or if you have
          good-faith belief that material on the website infringes one of your copyrights, please
          notify us at <a href="mailto:support@vhernandez.me">support@vhernandez.me</a>. We would be
          happy to help.
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
