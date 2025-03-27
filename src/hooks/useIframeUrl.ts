import { useState, useEffect } from 'react';

/**
 * Detects if the current window is in an iframe and returns its URL.
 * Works even if the parent frame is cross-origin and uncontrolled.
 *
 * @returns {string | null} Current iframe URL if detected, otherwise `null`.
 */
export const useIframeUrl = (): string | null => {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    } // Skip in SSR

    // 1. Check if we're in an iframe (safe cross-origin detection)
    const isInIframe = (() => {
      try {
        return window.self !== window.top;
      } catch (e) {
        // If accessing `window.top` throws, we're in a cross-origin iframe
        console.error('!ERROR EXPECTED:', e);
        return true;
      }
    })();

    // 2. If in an iframe, return the current URL (always same-origin safe)
    if (isInIframe) {
      setIframeUrl(window.location.href);
    } else {
      setIframeUrl(null);
    }
  }, []);

  return iframeUrl;
};
