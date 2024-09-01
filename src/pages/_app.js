import React from "react";
import "@/styles/globals.css";
import HeaderBox from '@/components/HeaderBox/HeaderBox.jsx';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <HeaderBox />
      <Component {...pageProps} />;
    </div>
  )
}
