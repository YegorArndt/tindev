"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";

import { Link } from "./components/ui";
import logo from "public/logo.png";
import "../styles/globals.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <header className="bg-base h-[5.7rem] mb-5">
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="flex-center gap-2 text-[3rem]">
          <Image src={logo.src} alt="Logo" width={40} height={40} />
          Tindev
        </Link>
        <Link
          to="/"
          text="Log in"
          className="btn-contained bg-green text-white rounded-[2rem] btn-lg"
        />
      </div>
    </header>
  );
}

export default function RootLayout({ children }: Layout) {
  const [theme, setTheme] = useState("light");

  return (
    <html lang="en">
      <Head>
        <title>Tindev</title>
        <meta
          name="description"
          content="Best tool to find a job effortlessly"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className + " " + theme}>
        <Header />
        {children}
      </body>
    </html>
  );
}
