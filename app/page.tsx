import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Main";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className="flex flex-grow flex-col items-center justify-center p-24"> */}
      <Hero />
      {/* </main> */}
      <AboutUs />
    </>
  );
}
