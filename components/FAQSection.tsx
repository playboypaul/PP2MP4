
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What file formats are supported?",
    answer: "Currently, we support .pptx (PowerPoint) files up to 50MB in size. We're working on adding support for .ppt, .odp, and other presentation formats in future updates."
  },
  {
    question: "How long does the conversion process take?",
    answer: "Processing time depends on the number of slides and complexity of your presentation. Typically, it takes 2-5 minutes per slide. A 10-slide presentation usually completes within 15-20 minutes."
  },
  {
    question: "What video qualities and formats are available?",
    answer: "We offer multiple output options: 720p, 1080p, and 4K resolutions; aspect ratios of 16:9, 4:3, 1:1, and 9:16; frame rates of 24fps, 30fps, and 60fps. All videos are exported in MP4 format for maximum compatibility."
  },
  {
    question: "Can I customize the Hollywood style effects?",
    answer: "Absolutely! Choose from Action, Drama, Sci-Fi, Thriller, Romance, Comedy, and more genres. You can also add custom keywords to guide the AI's creative direction and select specific images from your slides."
  },
  {
    question: "Is my presentation data secure and private?",
    answer: "Yes, security is our top priority. All files are processed with end-to-end encryption, and we automatically delete your presentations and generated videos from our servers after 24 hours. We never store or share your content."
  },
  {
    question: "Do I need to create an account to use the service?",
    answer: "No account required! Simply upload your PowerPoint file and start converting immediately. However, creating an account allows you to save your preferences and access conversion history."
  },
  {
    question: "Can I download individual slide videos or the complete presentation?",
    answer: "Both options are available. You can download each slide as a separate MP4 file or combine all slides into one complete presentation video with smooth transitions between slides."
  },
  {
    question: "What happens if my presentation has animations or transitions?",
    answer: "Our AI analyzes existing animations and transitions, then recreates them with enhanced cinematic effects. Complex animations are interpreted and transformed into Hollywood-style visual sequences."
  },
  {
    question: "Are there any usage limits or restrictions?",
    answer: "Free users can convert up to 3 presentations per day with a maximum of 20 slides each. Premium users enjoy unlimited conversions, priority processing, and access to exclusive Hollywood effects."
  },
  {
    question: "Can I use the generated videos commercially?",
    answer: "Yes, all generated videos are yours to use for any purpose, including commercial presentations, marketing materials, and social media content. You retain full rights to your converted videos."
  }
];

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="bg-gray-800 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 hover:bg-gray-600 transition-colors duration-200 flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <span className="font-semibold text-gray-200">{item.question}</span>
              <span className="text-blue-400 text-xl">
                {openItems.has(index) ? '−' : '+'}
              </span>
            </button>
            {openItems.has(index) && (
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-blue-900 to-teal-900 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Still Have Questions?</h3>
        <p className="text-gray-300 mb-4">
          Our support team is here to help you create amazing videos from your presentations.
        </p>
        <a 
          href="mailto:powerpoint2mp4@gmail.com" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Contact Support
        </a>
      </div>
    </section>
  );
};
