import Link from "next/link";

export const metadata = {
  title: '𝟰𝟬𝟰 — Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function Custom404() {
  return (
    <div className="min-h-svh flex-size flex items-center justify-center">
       
      <div className="text-center z-10 ">
        <h1 className="md:text-[410px] text-[calc(100px+40vw)] text-[#11120d] leading-[1]  tracking-[-12px] font-Playfair mb-4">404</h1>
        <p className="text-[16px] uppercase font-Oswald font-[300] ">The Page you are looking for doesn't exist or another error occurred.</p>
        <Link
          href="/"
          className="uppercase  w-fit pb-[2px] group inline-block relative font-Oswald font-semibold text-[16px] hover:text-black"
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