// pages/privacy.tsx
export default function PrivacyPolicy() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-black font-sans">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy for Intersection App</h1>
  
        <p className="mb-6">At Intersection, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our app. By using Intersection, you agree to the terms outlined in this policy.</p>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Data:</strong> Name, email, and other info you provide.</li>
          <li><strong>Location Data:</strong> Collected to provide real-time driving services.</li>
          <li><strong>Usage Data:</strong> How you use the app, features accessed, interaction patterns.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Providing Services:</strong> Real-time driving features like signals and speed alerts.</li>
          <li><strong>Improving the App:</strong> Troubleshooting, analytics, and performance tracking.</li>
          <li><strong>Customer Support:</strong> Handling issues and requests via contact info.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">3. Data Security</h2>
        <p className="mb-6">We use encryption and secure storage practices to protect your data from unauthorized access, alteration, or disclosure.</p>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">4. Data Sharing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Service Providers:</strong> Trusted third parties assisting with operations.</li>
          <li><strong>Legal Requirements:</strong> Only when required by law or valid requests.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">5. Location Data</h2>
        <p className="mb-6">Location is processed in real time and not stored long-term. Disabling location may limit app functionality.</p>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">6. Third-Party Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cloud Services (e.g., Google Cloud, AWS)</li>
          <li>Analytics (e.g., Google Analytics)</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">7. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Access, Correction, Deletion:</strong> You can request to view, correct, or delete your data.</li>
          <li><strong>Opting Out:</strong> You can change preferences in-app.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">8. Changes to This Policy</h2>
        <p className="mb-6">We’ll notify users of changes and update the policy on this page.</p>
  
        <h2 className="text-xl font-semibold mt-10 mb-2">9. Contact Us</h2>
        <p>Email: <a className="text-blue-600 underline" href="mailto:support@intersectionapp.com">support@intersectionapp.com</a></p>
        <p>Address: [Insert your business address]</p>
      </main>
    );
  }
  