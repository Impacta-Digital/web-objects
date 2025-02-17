import { useEffect, useState } from 'react';
import Bowser from 'bowser';

type Platform = 'desktop' | 'mobile' | 'tablet' | 'tv' | 'wearable' | null;

export default function usePlatform() {
  const [platform, setPlatform] = useState<Platform>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const browser = Bowser.getParser(window.navigator.userAgent);
      setPlatform(browser.getPlatformType(true) as Platform);
    }
  }, []);

  const isDesktopOrTablet = platform === 'desktop' || platform === 'tablet';

  return { platform, isDesktopOrTablet };
}
