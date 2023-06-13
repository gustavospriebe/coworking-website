import Image from "next/image";

export default function Empresas() {
    return (
        <div>
            <div>
                <div className="mt-auto py-12 lg:py-16">
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                src="https://d33wubrfki0l68.cloudfront.net/b44e3c53a7ffe89bb6ca9e49ff652e53222d5b31/4aefd/images/logos/1.svg"
                                alt="logo"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                alt="hero"
                                src="https://d33wubrfki0l68.cloudfront.net/07865c265551d7a67bdf88188ff62a07b84ffd6f/7e12f/images/placeholders/square4.svg"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                alt="hero"
                                src="https://d33wubrfki0l68.cloudfront.net/07865c265551d7a67bdf88188ff62a07b84ffd6f/7e12f/images/placeholders/square4.svg"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                alt="hero"
                                src="https://d33wubrfki0l68.cloudfront.net/07865c265551d7a67bdf88188ff62a07b84ffd6f/7e12f/images/placeholders/square4.svg"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                alt="hero"
                                src="https://d33wubrfki0l68.cloudfront.net/07865c265551d7a67bdf88188ff62a07b84ffd6f/7e12f/images/placeholders/square4.svg"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center px-8">
                            <Image
                                className="max-h-12"
                                alt="hero"
                                src="https://d33wubrfki0l68.cloudfront.net/07865c265551d7a67bdf88188ff62a07b84ffd6f/7e12f/images/placeholders/square4.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
