import Image from "next/image";
import Navbar from "./components/nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white xl:bg-[F2F2F2]">
      <Navbar/>
      <div className="xl:flex xl:ml-40 xl:mr-40 xl:h-[640px]">
          <div className="mt-6 xl:hidden">
            <Image
                  src="/images/image-hero-mobile.png"
                  className='w-full h-auto mt-0'
                  width={300}
                  height={300}
                  alt="hero- image"
            />
          </div>
          <div className="mx-4 xl:mx-0 text-center xl:text-start mt-10 xl:w-[55%]">
            <h1 className="font-bold text-4xl xl:text-7xl xl:w-[460px] xl:mt-20">Make remote work</h1>
            <p className="mt-6 xl:mt-12 md:mx-8 xl:mx-0 xl:w-[400px] text-slate-500">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="xl:bg-transparent bg-black  border border-black xl:text-slate-500 text-white xl:hover:text-black font-bold py-3 px-6 xl:px-8 rounded-2xl mt-6 xl:mt-12">Learn more</button>
            <div className="flex justify-between items-stretch mt-10 xl:mb-auto mb-20 xl:w-[65%] w-full xl:mt-28">
              <Image src="/images/client-databiz.svg" width={60} height={30} alt="client databiz"/>
              <Image src="/images/client-audiophile.svg" width={60} height={60} alt="client databiz" className='   mt-0'/>
              <Image src="/images/client-meet.svg" width={60} height={30} alt="client databiz"/>
              <Image src="/images/client-maker.svg" width={60} height={30} alt="client databiz"/>
            </div>
          </div>

          <div className="hidden xl:inline xl:mt-10 xl:ml-auto">
            <Image
                  src="/images/image-hero-desktop.png"
                  className=''
                  width={440}
                  height={600}
                  alt="hero- image"
            />
          </div>
      </div>
    </main>
  );
}
