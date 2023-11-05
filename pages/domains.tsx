// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;
declare global {
  interface Window {
    TradingView: any; // You can specify a more specific type if available
  }
}
export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<() => void | null>(null);

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_597fa') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "FX:USDJPY",
            timezone: "Asia/Kuwait",
            theme: "dark",
            style: "9",
            locale: "en",
            enable_publishing: true,
            backgroundColor: "rgba(0, 0, 0, 1)",
            gridColor: "rgba(0, 0, 0, 1)",
            withdateranges: true,
            range: "6M",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            watchlist: ["FX:GBPJPY","FX:GBPAUD","FX:EURAUD","OANDA:NZDJPY","FX:AUDJPY","FX:AUDNZD","FX:GBPNZD","OANDA:EURNZD"],
            details: true,
            hotlist: true,
            calendar: true,
            studies: ["STD;MA%1Cross"],
            container_id: "tradingview_597fa"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container' style={{ height: "300%", width: "100%" }}>
      <div id='tradingview_597fa' style={{ height: "calc(100%)", width: "100%" }} />
    </div>
  );
}
