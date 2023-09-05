import Image from "next/image";
import Link from "next/link";
import { authorPage } from "../data/books";

export default function BookPage() {


    return (
        <>
            <section className="mt-1 md:mt-0 mb-10">
                <div>
                    <div className="text-center mt-5 md:mt-10 mb-5 md:mb-10">
                        <Link
                            href={""}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <h1 className="font-semibold text-2xl md:text-3xl">
                                    Available Books
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className="border-t mb-5 mx-10">
                        {
                            authorPage.map(({ name, books }) => (
                                <div key={name} className="border-b pb-7">
                                    <div className="text-center mt-5">
                                        <h1>
                                            <span className="text-3xl">
                                                <Link href="https://www.amazon.com/stores/Oleda-Sinkler/author/B0C8BMK4YF?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
                                                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold">{name}</h2>
                                                </Link>
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {books.map(({ id, title, amazonLink, image }) => (
                                            <div className="w-fit overflow-hidden mx-auto" key={id}>
                                                <div className="flex flex-col justify-between">
                                                    <div className="">
                                                        <Link
                                                            href={amazonLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Image
                                                                className=""
                                                                src={image}
                                                                alt={`Picture of ${title}`}
                                                                width={200}
                                                                height={200}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}