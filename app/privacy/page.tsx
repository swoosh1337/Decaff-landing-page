import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p>
              Decaff is committed to protecting your privacy. This Privacy Policy explains our practices
              regarding data collection and usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
            <p>
              Decaff collects minimal data to provide the best caffeine tracking experience:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                <strong>Health Data (Optional):</strong> We may access your health data, such as heart
                rate, with your explicit permission to provide insights into how caffeine affects your
                body. This data is used only for real-time display and analysis.
              </li>
              <li>
                <strong>Local Storage:</strong> Your beverage logs, caffeine intake records, and personal
                settings are stored locally on your device and are never transmitted to external servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
            <p>
              The health data we access is:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Used solely for displaying insights and trends related to caffeine intake</li>
              <li>Never stored on external servers or shared with third parties</li>
              <li>Only accessed when you grant permission through your device&apos;s health settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage</h2>
            <p>
              All app data, including your:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Caffeine intake logs</li>
              <li>Beverage history</li>
              <li>Daily limits and custom settings</li>
              <li>Streaks and progress</li>
            </ul>
            <p className="mt-2">
              is stored locally on your device. None of this data is transmitted to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p>
              You have complete control over your data:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>You can revoke health data access at any time through your device&apos;s settings</li>
              <li>You can delete all local app data by uninstalling the app</li>
              <li>No data recovery is possible after deletion, as we do not store data on external servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <Link 
                href="mailto:tazigrigolia@gmail.com" 
                className="text-yellow-600 hover:text-yellow-700"
              >
                tazigrigolia@gmail.com
              </Link>
            </p>
          </section>

          <footer className="pt-8 mt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: December 2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

