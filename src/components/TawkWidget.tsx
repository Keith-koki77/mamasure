"use client";

import Script from "next/script";

const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

export default function TawkWidget() {
  // Render nothing if the IDs are missing, so the site never breaks
  if (!PROPERTY_ID || !WIDGET_ID) return null;

  return (
    <Script
      src={`https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}