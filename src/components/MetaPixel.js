import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MetaPixel() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/metodo-americano') {
      // Prevent injecting multiple times
      if (window.fbq) return;

      // Create the script tag
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      fbq('init', '465581239901012');
      fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
}
