'use client'
import { Provider } from "@self.id/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Provider >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
