"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import * as z from "zod";
import { SectionHeader } from "../SectionHeader";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Nome precisa ter ao menos 3 caracteres.",
    }),
    email: z.string().email(),
    whatsapp: z.string().refine(validator.isMobilePhone, {
        message: "Número de telefone inválido.",
    }),
    message: z.string().min(10, {
        message: "Sua mensagem precisa ter ao menos 10 caracteres.",
    }),
});

export function Contact() {
    const [isSend, setIsSend] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            whatsapp: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSend(!isSend);
    }

    return (
        <div
            id="contato"
            className="w-full px-7 py-16 md:px-12 lg:px-16 lg:py-24 "
        >
            <div className=" mx-auto w-full max-w-7xl">
                <SectionHeader
                    sectionName="Contato"
                    sectionHeader="Entre em contato, conheça a Almaz"
                    colorHeader="text-black"
                    colorSeparator="bg-whiter/20"
                />
                <div className="">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3 font-exotwo"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nome"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="whatsapp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Whatsapp</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Whatsapp"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mensagem</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Escreva sua mensagem aqui"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className={cn(
                                    buttonVariants({ size: "default" }),
                                    "text-principal mx-auto block w-1/2 gap-2 bg-green-principal font-exo hover:bg-green-principal/70"
                                )}
                                type="submit"
                                id="btn-form"
                            >
                                Enviar
                            </Button>
                            {isSend && (
                                <p className="flex w-full items-center justify-center gap-2 font-nunitosans">
                                    <Check /> <span>Enviado</span>
                                </p>
                            )}
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
