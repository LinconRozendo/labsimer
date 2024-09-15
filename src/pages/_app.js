import React from "react";
import "@/styles/globals.css";
import HeaderBox from '@/components/HeaderBox/HeaderBox.jsx';
//import NavBarBox from '@/components/NavBarBox/NavBarBox.jsx'
import NavBar from '@/components/NavBarBox/NavBarBox.jsx';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <HeaderBox />
      <NavBar />
      <Component {...pageProps} />;
    </div>
  )
}
