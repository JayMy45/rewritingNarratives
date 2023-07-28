import Image from "next/image";
import Link from "next/link";

export default function BookPage() {


    return (
        <>
            <section className="mb-10">
                <div>
                    <div className="text-center mt-5 md:mt-10 mb-5 md:mb-10">
                        <Link
                            href={"https://www.amazon.com/stores/Oleda-Sinkler/author/B0C8BMK4YF?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <h1 className="font-bold text-3xl">Books</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-10">

                        <div className="flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0">
                            {/* Rewrite the Narrative */}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/REWRITE-NARRATIVE-Oleda-Sinkler/dp/B0C7JCYKVN/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-yellow-600 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690565059/RewriteTheNarrative/BookPics/rewriteBook_drdpea.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dumping Ideas */}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/Dumping-Ideas-Journal-Oleda-Sinkler/dp/B0C6W5KCJY/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-gray-500 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690564793/RewriteTheNarrative/BookPics/DumpingYourIdeas_frkfsr.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Healing the Brokenhearted */}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/Healing-Brokenhearted-Comfort-Restoration-Emotional-ebook/dp/B0C9SWBQNF/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-gray-500 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690565078/RewriteTheNarrative/BookPics/brokenHeart_q7wswe.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row flex-wrap  space-y-3">

                            {/* Lets Go */}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto h-full">
                                <div className="flex flex-col justify-between">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/LET-GO-Embracing-Freedom-Healing-ebook/dp/B0CBY6M7DV/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-gray-500 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690565089/RewriteTheNarrative/BookPics/LetsGo_mbgknz.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mountain Moving Prayers*/}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto h-full">
                                <div className="flex flex-col justify-between">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/Mountain-Moving-Prayers-Unleashing-Power-ebook/dp/B0CB2TYNSH/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-gray-500 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690565115/RewriteTheNarrative/BookPics/Mountains_iac4jl.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Jealousy Unleashed */}
                            <div className="w-fit overflow-hidden rounded-lg mx-auto h-full">
                                <div className="flex flex-col justify-between">
                                    <div className="h-72">
                                        <Link
                                            href={"https://www.amazon.com/Jealousy-Unleashed-But-God-Blocked/dp/B0C9SHFTRQ/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="bg-gray-500 p-3"
                                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690565141/RewriteTheNarrative/BookPics/Unleased_doeonf.jpg"}
                                                alt="Picture of Name"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center font-bold text-sm">Rewrite the Narrative</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}