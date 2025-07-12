import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-gray-600 mb-8">Last updated: July 12, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By downloading, installing, or using the Decaff application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="mb-4">
          Decaff is a mobile application that helps users:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Track daily caffeine intake from beverages</li>
          <li>Monitor caffeine metabolism and timing</li>
          <li>Analyze sleep patterns and caffeine correlation</li>
          <li>Scan barcodes to identify beverage caffeine content</li>
          <li>Receive AI-powered personalized health insights</li>
          <li>Get smart notifications for optimal caffeine timing</li>
          <li>Access advanced analytics through premium subscription</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
        <p className="mb-4">
          To access premium features of the App, you don&apos;t need to create an account. You agree to:
        </p>
       
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment Terms</h2>
        <h3 className="text-xl font-medium mb-2">Free Trial</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>3-day free trial with full access to premium features</li>
          <li>Access to basic caffeine tracking</li>
          <li>No credit card required for trial</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">Paid Subscription</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Weekly Plan: $0.99 per week</li>
          <li>AI-powered health analysis and insights</li>
          <li>Unlimited caffeine tracking and barcode scanning</li>
          <li>Advanced weekly analytics and reports</li>
          <li>Smart notification system</li>
          <li>Subscriptions automatically renew unless cancelled</li>
          <li>Payment processed through Apple App Store</li>
          <li>Cancellation must be done through your App Store account settings</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Health Information and Data</h2>
        <h3 className="text-xl font-medium mb-2">Your Health Data</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>You retain ownership of your caffeine intake and health data</li>
          <li>You grant us license to process your data to provide personalized insights</li>
          <li>Health data is integrated with Apple HealthKit where available</li>
          <li>You are responsible for the accuracy of manually entered data</li>
          <li>We do not provide medical advice - consult healthcare professionals for health concerns</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">AI Analysis</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>AI-generated insights are for informational purposes only</li>
          <li>Results should not replace professional medical advice</li>
          <li>Individual responses to caffeine may vary</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">Data Retention and AI Processing</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Decaff does not retain your raw caffeine intake or sleep pattern data.</li>
          <li>Your data is sent to our AI provider (currently Deepseek) for analysis of sleep patterns and caffeine intake patterns.</li>
          <li>Please note that our AI provider may retain your data according to their own data retention policies. We encourage you to review Deepseek&apos;s privacy policy for more information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
        <p className="mb-4">
          You agree not to use the App for:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Sharing inaccurate health information that could harm others</li>
          <li>Impersonating others or creating deceptive health profiles</li>
          <li>Violating the privacy or rights of others</li>
          <li>Reverse engineering or attempting to extract our algorithms</li>
          <li>Circumventing payment systems or subscription requirements</li>
          <li>Automated use of barcode scanning or data collection</li>
          <li>Using the service for commercial caffeine tracking without permission</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Service Availability</h2>
        <p className="mb-4">
          We strive to provide continuous service but cannot guarantee uninterrupted access. We reserve the right to:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Modify or discontinue features with reasonable notice</li>
          <li>Perform maintenance that may temporarily affect service</li>
          <li>Update caffeine database and product information</li>
          <li>Limit API usage to prevent abuse</li>
          <li>Suspend accounts that violate these Terms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
        <p className="mb-4">
          Your privacy is important to us. Our collection and use of personal health information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with applicable health data protection regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations</h2>
        <h3 className="text-xl font-medium mb-2">Health Disclaimer</h3>
        <p className="mb-4">
          The App is provided for informational purposes only and is not intended to diagnose, treat, cure, or prevent any medical condition. Caffeine affects individuals differently. Consult with healthcare professionals regarding your caffeine consumption and health.
        </p>
        <h3 className="text-xl font-medium mb-2">Service Disclaimer</h3>
        <p className="mb-4">
          The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy of caffeine content data from third-party sources or barcode databases.
        </p>
        <h3 className="text-xl font-medium mb-2">Limitation of Liability</h3>
        <p className="mb-4">
          To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including but not limited to health-related decisions based on App data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
        <p className="mb-4">
          Either party may terminate these Terms at any time. Upon termination:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Your right to use the App ceases immediately</li>
          <li>Your account and associated health data may be deleted</li>
          <li>Subscription benefits end (no refunds for partial periods)</li>
          <li>Certain provisions of these Terms shall survive termination</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms from time to time. We will notify users of material changes through the App or other reasonable means. Continued use after changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
        <p className="mb-4">
          If you have questions about these Terms, please contact us at:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Email: legal@decaff.com</li>
          <li>Support: support@decaff.com</li>
          <li>Website: https://decaff-landing-page-1ptw.vercel.app</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
        <p className="mb-4">
          If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
        </p>
      </section>

      <p className="text-center text-blue-500 hover:underline">
        <Link href="/">Return to Home</Link>
      </p>
    </div>
  );
};

export default TermsOfService;
