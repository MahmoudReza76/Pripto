import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
import { tokens, themeSettings } from "../Profile/theme";
let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_eef7f") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: "100%",
          height: "630vh",
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Asia/Tehran",
          theme: "dark",
          style: "1",
          locale: "en",
          details: true,
          enable_publishing: false,
          hide_legend: true,
          withdateranges: true,
          hide_side_toolbar: false,
          studies: ["Volume@tv-basicstudies"],
          container_id: "tradingview_eef7f",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_eef7f" />
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}
