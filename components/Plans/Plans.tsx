export function Plans() {
    return (
        <div className="flex flex-wrap p-12">
            <div className="m-7 basis-[300px]">
                <div className="relative w-full font-bold">
                    <div className="group block h-[400px] w-full rounded-md border-2 border-black bg-white p-[30px] text-black no-underline transition duration-300 hover:-translate-x-7 hover:-translate-y-7 hover:border-green-principal">
                        <div className="group-hover:hidden">
                            <h2 className="mt-[200px] text-2xl">
                                Hot Tub Time 
                            </h2>
                        </div>
                        <div className="group-hover:block hidden">
                            <h2 className="my-5">Hot Tub Time Machine</h2>
                            <p className="font-normal">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam at est orci. Nam
                                molestie pellentesque mi nec lacinia. Cras
                                volutpat arcu sit amet elit sodales, nec
                                volutpat velit bibendum.
                            </p>
                            <p className="my-5 font-bold text-green-secundary">
                                Click to see project
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 -z-[1] h-full w-full rounded-md border-2 border-dashed border-black"></div>
                </div>
            </div>
        </div>
    );
}
