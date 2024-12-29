import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import Faq from "./faq";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="w-full py-20 mt-20">
      <Wrapper className="flex flex-col md:flex-row items-start justify-between w-full">
        <div className="w-full md:w-1/2">
          <p className="w-[50%] uppercase text-black/80 text-xl">About</p>
        </div>
        <div className="w-full">
          <h2 className="text-black uppercase font-medium text-5xl md:text-7xl w-full mt-4 md:mt-0 md:w-[80%]">
            Dedicated to Delivering Exceptional Legal Services
          </h2>

          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full h-[600px] flex flex-col mt-8">
              <div className="h-[600px] w-full md:w-[95%] relative">
                <Image
                  className="object-cover object-center"
                  quality={100}
                  fill
                  src="/about-1.png"
                  alt="About image"
                />
              </div>
              <p className="mt-4 text-lg">
                At our firm, we pride ourselves on offering comprehensive legal
                services tailored to meet the unique needs of each client. Our
                areas of expertise include legal counseling, court
                representation, arbitration, mediation, and consumer protection.
              </p>
            </div>
            <div className="w-full h-[600px] flex flex-col mt-2 md:mt-8 justify-between">
              <div className="h-full">
                <p className="text-lg">
                  Our team of experienced attorneys is committed to providing
                  personalized and effective legal solutions. We work diligently
                  to ensure that our clients receive the highest level of
                  service and representation.
                </p>
              </div>
              <div className="h-full flex flex-col md:justify-end">
                <div className="h-[320px] w-full md:w-[95%] relative">
                  <Image
                    className="object-cover object-center"
                    quality={100}
                    fill
                    src="/about-2.png"
                    alt="About image"
                  />
                </div>

                <p className="mt-4 text-lg">
                  Whether you need assistance with legal counseling, court
                  representation, arbitration, mediation, or consumer
                  protection, our firm is here to help. Contact us today to
                  learn more about how we can assist you with your legal needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex flex-col md:flex-row items-start justify-between w-full mt-40">
        <div className=" w-full md:w-1/2">
          <p className="w-[50%] uppercase text-black/80 text-xl">Advantages</p>
        </div>
        <div className="w-full">
          <h2 className=" text-black uppercase font-medium text-5xl md:text-7xl w-full mt-4 md:mt-0 md:w-[80%]">
            Four reasons <br /> to hire us
          </h2>
        </div>
      </Wrapper>
      <Wrapper className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5">
        <div className="w-full bg-[#e9e9e9] py-6 px-6">
          <h4 className="uppercase text-xl text-black font-medium">
            Expertise and Dedication
          </h4>
          <p className="text-black/70 text-lg font-normal mt-4">10 Years</p>
          <p className="text-black text-lg font-normal mt-14">
            With a decade of experience, our law firm is dedicated to providing
            top-notch legal services. Our team of seasoned attorneys is
            well-versed in various legal fields and committed to staying updated
            with the latest legal developments.
          </p>
        </div>
        <div className="w-full bg-[#e9e9e9] py-6 px-6">
          <h4 className="uppercase text-xl text-black font-medium">
            Client-Centered Approach
          </h4>
          <p className="text-black/70 text-lg font-normal mt-4">
            Personalized Service
          </p>
          <p className="text-black text-lg font-normal mt-14">
            We prioritize our clients&apos; needs, offering personalized legal
            solutions tailored to each unique situation. Our commitment to
            client satisfaction drives us to deliver exceptional service and
            representation.
          </p>
        </div>
        <div className="w-full bg-[#e9e9e9] py-6 px-6 -mb-[45rem]">
          <h4 className="uppercase text-xl text-black font-medium">
            Proven Track Record
          </h4>
          <p className="text-black/70 text-lg font-normal mt-4">
            Successful Outcomes
          </p>
          <p className="text-black text-lg font-normal mt-14">
            Our firm boasts a proven track record of successful case outcomes.
            We leverage our extensive experience and legal acumen to achieve the
            best possible results for our clients.
          </p>
        </div>
        <div className="w-full bg-[#e9e9e9] py-6 px-6">
          <h4 className="uppercase text-xl text-black font-medium">
            Comprehensive Services
          </h4>
          <p className="text-black/70 text-lg font-normal mt-4">
            Wide Range of Expertise
          </p>
          <p className="text-black text-lg font-normal mt-14">
            From legal counseling to court representation, arbitration, and
            mediation, our firm offers a comprehensive range of legal services.
            We are equipped to handle diverse legal needs with professionalism
            and expertise.
          </p>
        </div>
      </Wrapper>
      <div className="hidden md:block">
        <Wrapper className="flex items-center justify-end md:mt-8">
          <Link href="mailto:andyharrison5555@gmail.com">
            <div className="w-[20rem] h-[20rem] aspect-square rounded-full bg-[#C69043] flex items-center justify-center hover:bg-[#C69043]/80 cursor-pointer ease-in-out transition-all duration-500">
              <p className=" text-white font-normal text-xl">Email Us</p>
            </div>
          </Link>
        </Wrapper>
      </div>

      <Wrapper className="flex flex-col md:flex-row items-start justify-between w-full mt-[30rem] md:mt-40">
        <div className=" w-full md:w-1/2">
          <p className="w-[50%] uppercase text-black/80 text-xl">Services</p>
        </div>
        <div className="w-full">
          <h2 className=" text-black uppercase font-medium text-5xl md:text-7xl w-full mt-4 md:mt-0 md:w-[80%]">
            A wide range of legal services to solve any legal issues
          </h2>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col md:flex-row h-fit mt-20 items-center justify-between">
        <div className="h-[400px] w-full md:w-[40%] relative -mt-10 md:-mt-0 mb-4 md:mb-0">
          <Image
            className=" object-cover object-center"
            quality={100}
            fill
            src="/service.png"
            alt="Service image"
          />
        </div>
        <Faq />
      </Wrapper>

      <Wrapper className="flex flex-col md:flex-row items-start justify-between w-full mt-40">
        <div className="w-1/2">
          <p className="w-[50%] uppercase text-black/80 text-xl">
            We are trusted
          </p>
        </div>
        <div className="w-full"></div>
      </Wrapper>
      <Wrapper className="flex flex-col md:flex-row justify-between w-full items-start gap-5 mt-8">
        <div className="w-full h-[320px] bg-[#e9e9e9] py-6 px-6 flex items-center justify-center">
          <div className="h-1/2 w-[80%] relative">
            <Image
              className=" object-contain object-center"
              quality={100}
              fill
              src="/1.png"
              alt="Partners"
            />
          </div>
        </div>
        <div className="w-full h-[280px] bg-[#e9e9e9] py-6 px-6 flex items-center justify-center">
          <div className="h-1/2 w-[80%] relative">
            <Image
              className=" object-contain object-center"
              quality={100}
              fill
              src="/2.png"
              alt="Partners"
            />
          </div>
        </div>
        <div className="w-full h-[240px] bg-[#e9e9e9] py-6 px-6 flex items-center justify-center">
          <div className="h-1/2 w-[80%] relative">
            <Image
              className=" object-contain object-center"
              quality={100}
              fill
              src="/3.png"
              alt="Partners"
            />
          </div>
        </div>
        <div className="w-full h-[280px] bg-[#e9e9e9] py-6 px-6 flex items-center justify-center">
          <div className="h-1/2 w-[80%] relative">
            <Image
              className=" object-contain object-center"
              quality={100}
              fill
              src="/4.png"
              alt="Partners"
            />
          </div>
        </div>
        <div className="w-full h-[320px] bg-[#e9e9e9] py-6 px-6 flex items-center justify-center">
          <div className="h-1/2 w-[80%] relative">
            <Image
              className=" object-contain object-center"
              quality={100}
              fill
              src="/5.png"
              alt="Partners"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col md:flex-row items-start justify-between w-full mt-40">
        <div className=" w-full md:w-1/2">
          <p className="w-[50%] uppercase text-black/80 text-xl">Testimonial</p>
        </div>
        <div className="w-full mt-4">
          <h3 className=" uppercase text-3xl font-normal text-black">
            &apos;I am very satisfied with the work of the lawyers from Harrison
            Law firm. They provided me with highly qualified legal support in
            solving my complicated court problem. the whole process was very
            thorough, the lawyers were attentive to my questions and always
            answered them promptly.&apos;
          </h3>

          <div className="w-full mt-10 flex flex-col md:flex-row md:justify-between gap-10">
            <div className=" h-[600px] md:h-[720px] w-full md:w-[80%] relative">
              <Image
                className=" object-cover object-center"
                quality={100}
                fill
                src="/client.jpg"
                alt="Client image"
              />
            </div>
            <div className="w-full">
              <h4 className="w-[50%] uppercase text-black font-medium text-2xl">
                Bill Klein
              </h4>
              <p className=" text-black/70 font-normal text-xl">
                CEO of Global Deliveries
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutSection;
