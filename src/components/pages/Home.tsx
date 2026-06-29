import Hero from "../sections/Hero";
import Navbar from "../layout/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
        <main className="pt-20">
      <Hero />
      </main>
    </>
  );
}