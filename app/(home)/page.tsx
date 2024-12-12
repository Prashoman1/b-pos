"use client";


import NavBar from "@/components/shared/NavBar";
import MainSection from "./_components/MainSection/MainSection";
import MenuBar from "./_components/MenuBar/MenuBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <MenuBar />
      <MainSection/>
    </>
  );
}
