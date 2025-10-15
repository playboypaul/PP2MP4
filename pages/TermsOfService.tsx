
import React from 'react';

interface TermsOfServiceProps {
  onNavigateHome?: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">Last updated: August 27, 2025</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using the PowerPoint to MP4 Converter service ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              PowerPoint to MP4 Converter is an AI-powered platform that transforms PowerPoint presentations into video format with Hollywood-style effects. Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Conversion of .pptx files to MP4 video format</li>
              <li>AI-powered video generation with cinematic effects</li>
              <li>Multiple output formats and quality options</li>
              <li>Secure file processing and automatic deletion</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">3. User Responsibilities</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Content Ownership:</strong> You must own or have the legal right to use all content in your uploaded presentations, including text, images, and other media.</p>
              <p><strong>Prohibited Content:</strong> You may not upload presentations containing illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content.</p>
              <p><strong>File Size Limits:</strong> Uploaded files must not exceed 50MB in size.</p>
              <p><strong>Usage Limits:</strong> Free users are limited to 3 conversions per day with a maximum of 20 slides per presentation.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You retain all rights to your original content. By using our service, you grant us a temporary license to process your files for the sole purpose of providing the conversion service. Generated videos remain your property, and you may use them for any lawful purpose, including commercial use.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">5. Privacy and Data Security</h2>
            <div className="text-gray-300 space-y-4">
              <p><strong>Data Processing:</strong> Your files are processed securely using end-to-end encryption.</p>
              <p><strong>Automatic Deletion:</strong> All uploaded files and generated videos are automatically deleted from our servers within 24 hours of processing.</p>
              <p><strong>No Data Storage:</strong> We do not permanently store your presentations or personal data beyond the processing period.</p>
              <p><strong>Third-Party Services:</strong> We use Google's Gemini AI for video generation, subject to Google's privacy policies.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">6. Service Availability</h2>
            <p className="text-gray-300 leading-relaxed">
              We strive to maintain high service availability but do not guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify, suspend, or discontinue the service at any time without prior notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              The service is provided "as is" without warranties of any kind. We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, including but not limited to data loss, business interruption, or loss of profits.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend access to the service immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">10. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:powerpoint2mp4@gmail.com" className="text-blue-400 hover:text-blue-300">
                powerpoint2mp4@gmail.com
              </a>
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or the use of the service shall be resolved through binding arbitration.
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
