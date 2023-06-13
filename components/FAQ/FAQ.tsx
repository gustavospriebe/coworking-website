import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqConfig } from "@/config/FAQ,";
import { Separator } from "../ui/separator";

export function FAQ() {
    const items = faqConfig.FAQ;

    return (
        <div className="w-full items-center px-7 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <div>
                    <p className="mb-2 font-exotwo text-green-secundary">FAQ</p>
                    <p className="font-exo text-2xl font-medium tracking-tight text-black sm:text-4xl">
                        Perguntas frequentes que recebemos
                    </p>
                    <Separator className="my-5 bg-black/20" />
                </div>
                <div className="">
                    <Accordion
                        type="single"
                        collapsible
                        className="grid w-full list-none  grid-cols-1 gap-4 text-sm sm:text-base lg:grid-cols-2 lg:gap-10"
                    >
                        {items.map((item, index) => (
                            <AccordionItem value={`${index}+1`} key={index}>
                                <AccordionTrigger className="font-exo">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="font-nunitosans">
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
