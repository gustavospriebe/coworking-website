import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqConfig } from "@/config/FAQ";
import { SectionHeader } from "../SectionHeader";

export function FAQ() {
    const items = faqConfig.FAQ;

    return (
        <div className="w-full bg-bg-black px-7 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <div>
                    <SectionHeader
                        sectionName="FAQ"
                        sectionHeader="Perguntas frequentes que recebemos"
                        colorHeader="text-white"
                        colorSeparator="bg-white/20"
                    />
                </div>
                <div className="">
                    <Accordion
                        type="single"
                        collapsible
                        className="grid w-full list-none  grid-cols-1 gap-4 text-sm sm:text-base lg:grid-cols-2 lg:gap-10"
                    >
                        {items.map((item, index) => (
                            <AccordionItem value={`${index}+1`} key={index}>
                                <AccordionTrigger className="font-exo text-whiter">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="font-nunitosans text-whiter/80">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
