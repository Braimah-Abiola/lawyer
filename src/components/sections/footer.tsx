import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161616] pt-20 pb-20">
      <Wrapper>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <Link href="/">
            <div className=" relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
              <Image
                fill
                src="/logo.png"
                className=" object-contain object-center"
                alt="Logo"
              />
            </div>
          </Link>

          <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0 gap-4 md:gap-14">
            <h4 className="text-base font-medium text-white">Our Firm</h4>
            <h4 className="text-base font-medium text-white">Our Lawyers</h4>
            <h4 className="text-base font-medium text-white">Services</h4>
            <h4 className="text-base font-medium text-white">Blog</h4>
            <h4 className="text-base font-medium text-white">Faq</h4>
            <Link href="mailto:andyharrison5555@gmail.com">
              <h4 className="text-base font-medium text-white">Contact Us</h4>
            </Link>
          </div>
        </div>
        <Separator className="bg-white/10 mt-12 mb-10" />
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
          <div>
            <h4 className="text-base font-medium text-white">
              23475 Glacier View Dr, Eagle <br /> River, Alaska 99577, USA
            </h4>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0 mb-4 md:mb-0">
            <div className="w-12 h-12 aspect-square rounded-full bg-white flex items-center justify-center">
              <Image
                height={12}
                width={12}
                src="/facebook.png"
                alt="Facebook"
              />
            </div>
            <div className="w-12 h-12 aspect-square rounded-full bg-white flex items-center justify-center">
              <Image
                height={20}
                width={20}
                src="/telegram.png"
                alt="Telegram"
              />
            </div>
            <div className="w-12 h-12 aspect-square rounded-full bg-white flex items-center justify-center">
              <Image height={20} width={20} src="/twitter.png" alt="Twitter" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Link href="mailto:andyharrison5555@gmail.com">
              <h4 className="text-base font-medium text-white">
                andyharrison5555@gmail.com
              </h4>
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-20">
          <p className=" text-white/70 font-normal text-base">
            Harrison Law © 2024 All Rights Reserved
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
