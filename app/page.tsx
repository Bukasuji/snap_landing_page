import Image from "next/image";
import Navbar from "./components/nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <div className="border mt-6">
        <Image
              src="/images/image-hero-mobile.png"
              className='w-full h-auto mt-0'
              width={300}
              height={300}
              alt="hero- image"
        />
      </div>
      <div className="mx-4 text-center border mt-10">
        <h1 className="font-bold text-4xl">Make remote work</h1>
        <p className="mt-6">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className="bg-black text-white font-bold py-3 px-5 rounded-2xl mt-6">Learn more</button>
        <div className="flex justify-between items-stretch mt-10 mb-20 w-full">
          <Image src="/images/client-databiz.svg" width={60} height={30} alt="client databiz"/>
          <Image src="/images/client-audiophile.svg" width={60} height={60} alt="client databiz"/>
          <Image src="/images/client-meet.svg" width={60} height={30} alt="client databiz"/>
          <Image src="/images/client-maker.svg" width={60} height={30} alt="client databiz"/>
        </div>
      </div>
    </main>
  );
}
