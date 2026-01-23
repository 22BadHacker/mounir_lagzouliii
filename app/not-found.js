import Link from "next/link";
import Logo from '@/public/Logo/Mounir_Lagzouli_1.svg'
import LogoRed from '@/public/Logo/Mounir_Lagzouli_gray.svg'
import Image from 'next/image'
import Header from "@/components/Header";

export const metadata = {
  title: '𝟰𝟬𝟰 — Page Not Found',
  description: 'The page you are looking for does not exist.',
};

const HeaderLogo = () => (
  <Link href="/" className="h-[18px] fixed   link-wrapper">
    <Image 
      alt="Mounir Lagzouli" 
      src={Logo} 
      width={100} 
      height={100} 
      className="w-[170px]  relative top-[0px] link-text "
      priority
    />
    <Image 
      alt="Mounir Lagzouli" 
      src={LogoRed} 
      width={100} 
      height={100} 
      className="w-[170px]  pb-[4px] link-text-clone"
      priority
    />
  </Link>
)

export default function Custom404() {
  return (
    <div className="min-h-svh px-5 sm:px-6 py-[20px] relative  flex items-center justify-center">
      {/* <div className="fixed top-[31px] left-5">
        <HeaderLogo />
      </div> */}
      <Header />

      <div className="text-center z-10 ">
        <h1 className="md:text-[410px] w-full text-center text-[54vw] sm:text-[calc(100px+40vw)] text-[#11120d] leading-[1]  tracking-[-12px] font-Playfair mb-4">404</h1>
        <p className="sm:text-[16px] text-sm uppercase font-Oswald font-[300] ">The Page you are looking for does not exist or another error occurred.</p>
        <Link
          href="/"
          className="uppercase pt-1 sm:pt-0  w-fit pb-[2px] group inline-block relative font-Oswald font-semibold sm:text-[16px] text-sm hover:text-black"
        >
          Return home

         <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-100 origin-right group-hover:scale-x-0 transition-transform duration-600 ease-in-out cursor-pointer" />
      
      {/* After line - grows after delay, stays visible */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:delay-600 delay-0 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}