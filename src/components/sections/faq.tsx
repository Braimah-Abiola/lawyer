import Wrapper from "../wrapper/wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="z-10 w-full" id="faq">
      <Wrapper className="flex flex-col items-center">
        <Accordion
          type="multiple"
          className="w-full max-full gap-4 flex flex-col z-50"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>01.</span>
                <span>Representation of Interests in court</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Simply reach out to us via our website or contact form to begin.
              We&apos;ll schedule a consultation to understand your goals and
              tailor a customized plan to maximize your OnlyFans success. With
              our support, you can focus on creating content while we handle the
              rest. Let&apos;s start your journey to increased earnings and a
              thriving fanbase today.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>02.</span>
                <span>Corporate Law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Using Fashva ensures expert management, saves you time, offers
              strategic guidance, aids in marketing and promotion, and enhances
              privacy and security for your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>03.</span>
                <span>Real estate and land law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Our agency offers a range of services tailored to optimize your
              OnlyFans experience. These include content creation assistance,
              audience engagement strategies, marketing and promotion support,
              account management, and ensuring privacy and security for your
              account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>04.</span>
                <span>Labour law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              The cost of our agency&apos;s services varies depending on the
              specific needs and requirements of each client. We offer
              customized solutions tailored to your goals and budget. Contact us
              for a personalized quote based on your preferences and objectives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>05.</span>
                <span>Family Law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Yes, you retain full ownership of your content when using our
              agency&apos;s services. We respect your rights as the creator and
              ensure that you maintain control over your content at all times.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>06.</span>
                <span>Tax Law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Protecting your privacy is paramount to us. We
              maintain strict confidentiality and take measures to safeguard
              your personal information and identity. Rest assured, your privacy
              is our priority when working with our agency.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </div>
  );
};

export default Faq;
