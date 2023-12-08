"use client";
import ComponentCombine from "./Components/ComponentCombine";
import Header from "./Components/Header/Header";

export default function Home() {

  return (
    <>
      <Header />
      <main className="Container">
        <ComponentCombine />
      </main>
    </>
  );
}
