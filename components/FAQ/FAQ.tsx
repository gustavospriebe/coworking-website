import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqConfig } from "@/config/FAQ,";
import { Separator } from "../ui/separator";
import { SectionHeader } from "../SectionHeader";

const data = [
    {
        creationDate: "0001-01-01T00:00:00Z",
        city: "Rio de Janeiro",
        siteURL:
            "https://www.ingresso.com/filme/j-hope-in-the-box?city=rio-de-janeiro&partnership=cine-show-tubarao&ing_source=api&ing_medium=link-filme&ing_campaign=cine-show-tubarao&ing_content=j-hope-in-the-box",
        nationalSiteURL:
            "https://www.ingresso.com/filme/j-hope-in-the-box?city=rio-de-janeiro&partnership=cine-show-tubarao&ing_source=api&ing_medium=link-filme&ing_campaign=cine-show-tubarao&ing_content=j-hope-in-the-box",
    },
];

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
                                <AccordionContent className="font-nunitosans text-whiter">
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
