
import React, { useEffect } from 'react';

interface AdSenseProps {
  adSlot?: string;
  adFormat?: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
}

export const AdSense: React.FC<AdSenseProps> = ({ 
  adSlot = "auto", 
  adFormat = "auto", 
  className = "",
  style = {},
  placeholder = "Advertisement"
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && window.adsbygoogle.push) {
        // @ts-ignore
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.log('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-placeholder ${className}`} style={style}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-8306818191166444"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
      <span className="text-xs opacity-60">{placeholder}</span>
    </div>
  );
};

// Banner Ad Component (728x90)
export const BannerAd: React.FC = () => (
  <AdSense 
    className="adsense-banner"
    placeholder="Banner Advertisement"
    adFormat="horizontal"
  />
);

// Sidebar Ad Component (300x250)
export const SidebarAd: React.FC = () => (
  <AdSense 
    className="adsense-sidebar"
    placeholder="Sidebar Advertisement"
    adFormat="rectangle"
  />
);

// Footer Ad Component (728x90)
export const FooterAd: React.FC = () => (
  <AdSense 
    className="adsense-footer"
    placeholder="Footer Advertisement"
    adFormat="horizontal"
  />
);
