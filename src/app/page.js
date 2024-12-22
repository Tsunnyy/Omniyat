'use client'

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Banner from "./pages/banner";
import Drawer from "./pages/drawer";
import Hotspot from "./pages/hotspot";
import { Overview } from "./pages/overview";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Drawer />
      <Overview />
      <Hotspot />
      <Footer />
    </>
  );
}
