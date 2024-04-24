import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const HeroSection = () => {
  return (
    <div className="w-full h-[90dvh]">
      <Wrapper className="flex items-center justify-between w-full h-full">
        <div className="w-full flex flex-col items-center justify-end h-full">
          <div className="h-[50%] w-[80%] relative">
            <Image
              className=" object-cover object-center"
              quality={100}
              fill
              src="/hero-img-2.png"
              alt="Court image"
            />
          </div>
        </div>
        <div className="w-full  h-full py-40 flex flex-col justify-between">
          <div className="h-full w-full z-50">
            <h1 className=" font-semibold text-[#C69043] text-9xl italic">
              Andy
            </h1>

            <h1 className=" font-semibold text-[#C69043] text-9xl italic ml-20">
              Harrison
            </h1>
          </div>
          <div className="h-full">
            <p className="ml-20 w-[50%]">
              Our law firm provides high quality legal services for individuals
              and businesses. Our Team of experienced lawyers specializes in
              various areas of law and are always ready to offer professional
              assistance in solving the most complex legal issues.
            </p>
          </div>
        </div>
        <div className="w-full  h-full py-20">
          <div className="h-full w-[95%] -ml-20 relative">
            <Image
              className=" object-cover object-center"
              quality={100}
              fill
              src="/hero-img-1.png"
              alt="Hero image"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
