
import React from 'react';

interface PrivacyPolicyProps {
  onNavigateHome?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last updated: August 27, 2025</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Information We Collect</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Files You Upload:</strong> We temporarily process your PowerPoint presentations (.pptx files) to provide our conversion service.</p>
              <p><strong>Usage Data:</strong> We collect basic usage statistics such as file size, number of slides, and processing time for service improvement.</p>
              <p><strong>Technical Data:</strong> We may collect IP addresses, browser type, and device information for security and optimization purposes.</p>
              <p><strong>No Personal Information:</strong> We do not require or collect personal information such as names, email addresses, or account details for basic service usage.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. How We Use Your Information</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Service Provision:</strong> Your uploaded files are processed solely to convert PowerPoint presentations into MP4 videos.</p>
              <p><strong>AI Processing:</strong> We use Google's Gemini AI service to generate videos from your presentation content.</p>
              <p><strong>Service Improvement:</strong> Anonymous usage statistics help us improve our service quality and performance.</p>
              <p><strong>Security:</strong> Technical data helps us prevent abuse and maintain service security.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. Data Storage and Retention</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Temporary Processing:</strong> Your files are stored temporarily on secure servers during the conversion process.</p>
              <p><strong>Automatic Deletion:</strong> All uploaded presentations and generated videos are automatically deleted from our servers within 24 hours.</p>
              <p><strong>No Long-term Storage:</strong> We do not maintain permanent copies of your content or personal data.</p>
              <p><strong>Secure Processing:</strong> All data is processed using industry-standard encryption and security measures.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Third-Party Services</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Google Gemini AI:</strong> We use Google's Gemini AI service for video generation. Your content may be processed by Google's systems subject to their privacy policy.</p>
              <p><strong>Google AdSense:</strong> We use Google AdSense for advertising, which may collect data for ad personalization according to Google's privacy policy.</p>
              <p><strong>Cloud Infrastructure:</strong> Our service runs on secure cloud infrastructure providers who maintain strict data protection standards.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Data Sharing and Disclosure</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>No Sale of Data:</strong> We never sell, rent, or trade your personal information or content to third parties.</p>
              <p><strong>Service Providers:</strong> We may share data with trusted service providers (like Google AI) solely for service provision.</p>
              <p><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety.</p>
              <p><strong>Business Transfers:</strong> In the event of a merger or acquisition, user data may be transferred as part of business assets.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Your Rights and Choices</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Content Control:</strong> You maintain full ownership and control of your uploaded presentations and generated videos.</p>
              <p><strong>Data Deletion:</strong> Since we automatically delete all data within 24 hours, no manual deletion request is necessary.</p>
              <p><strong>Service Opt-out:</strong> You can stop using our service at any time without any data retention concerns.</p>
              <p><strong>Contact Rights:</strong> You can contact us with any privacy-related questions or concerns.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Security Measures</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Encryption:</strong> All data transmission and storage uses industry-standard encryption protocols.</p>
              <p><strong>Access Controls:</strong> Strict access controls limit who can access processing systems and data.</p>
              <p><strong>Regular Audits:</strong> We conduct regular security audits and updates to maintain protection standards.</p>
              <p><strong>Incident Response:</strong> We have procedures in place to respond quickly to any security incidents.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibent text-blue-400 mb-4">8. Cookies and Tracking</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Essential Cookies:</strong> We use necessary cookies for basic website functionality and security.</p>
              <p><strong>Analytics:</strong> We may use analytics cookies to understand how users interact with our service.</p>
              <p><strong>Advertising:</strong> Google AdSense may use cookies for ad personalization and measurement.</p>
              <p><strong>Cookie Control:</strong> You can control cookie settings through your browser preferences.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Our service may process data in various countries where our service providers operate. We ensure that all international data transfers comply with applicable privacy laws and maintain appropriate security safeguards.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it immediately.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">11. Changes to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">12. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <br />
              <a href="mailto:powerpoint2mp4@gmail.com" className="text-blue-400 hover:text-blue-300">
                powerpoint2mp4@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-4">
              We are committed to protecting your privacy and will respond to all inquiries within 48 hours.
            </p>
          </section>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={onNavigateHome}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Converter
          </button>
        </div>
      </div>
    </div>
  );
};
