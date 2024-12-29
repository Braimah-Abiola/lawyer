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
                <span>Representation of Interests in Court</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Our experienced attorneys provide robust representation in court,
              ensuring your interests are effectively advocated. We handle all
              aspects of litigation, from initial consultation to final
              resolution.
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
              We offer comprehensive corporate law services, including business
              formation, contract negotiation, compliance, and dispute
              resolution. Our goal is to support your business's legal needs at
              every stage.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>03.</span>
                <span>Real Estate and Land Law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              Our firm provides expert legal advice on real estate transactions,
              property disputes, zoning issues, and land use regulations. We
              help you navigate the complexities of real estate law with
              confidence.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h3 className="flex flex-row gap-4 md:gap-12">
                <span>04.</span>
                <span>Labour Law</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              We specialize in labour law, offering services related to
              employment contracts, workplace disputes, wrongful termination,
              and compliance with labour regulations. Protecting your rights in
              the workplace is our priority.
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
              Our family law services cover divorce, child custody, alimony, and
              adoption. We provide compassionate and effective legal support to
              help you navigate these sensitive matters.
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
              Our tax law experts offer guidance on tax planning, compliance,
              and dispute resolution. We help you manage your tax obligations
              efficiently and effectively.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </div>
  );
};

export default Faq;
