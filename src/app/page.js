"use client";
import Head from "next/head";
import ComponentCombine from "./Components/ComponentCombine";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <main className="Container">
        <ComponentCombine />
      </main>
    </>
  );
}
