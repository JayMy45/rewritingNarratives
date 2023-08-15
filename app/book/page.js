import Image from "next/image";
import Link from "next/link";

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
                        <div className="text-center mt-5 ">
                            <h1>
                                <span className="text-3xl">
                                    <a href="https://www.amazon.com/stores/Oleda-Sinkler/author/B0C8BMK4YF?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
                                        Oleda Sinkler
                                    </a>
                                </span>
                            </h1>
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-10">

                            <div className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 mt-10">

                                {/* Power Within */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Link
                                                href={"https://www.amazon.com/dp/B0CF72PCJJ?ref_=cm_sw_r_apin_dp_2DWEQYH5XKRWV410217R"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className=""
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1692062480/RewriteTheNarrative/BookPicture/PowerWithin_vifgcs.png"}
                                                    alt="Picture of Power Within"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {/* Rewrite the Narrative */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Link
                                                href={"https://www.amazon.com/REWRITE-NARRATIVE-Oleda-Sinkler/dp/B0C7JCYKVN/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className=""
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609480/RewriteTheNarrative/BookPicture/Rewrite_The_Narrative_gwnwhn.png"}
                                                    alt="Picture of Rewrite the Narrative"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {/* Dumping Ideas */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between ">
                                        <div className="">
                                            <Link
                                                href={"https://www.amazon.com/Dumping-Ideas-Journal-Oleda-Sinkler/dp/B0C6W5KCJY/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className="bg-gray-500"
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609481/RewriteTheNarrative/BookPicture/DumpingIdeas_fq4ajn.png"}
                                                    alt="Picture of Dumping Ideas"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Healing the Brokenhearted */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between ">
                                        <div className="">
                                            <Link
                                                href={"https://www.amazon.com/Healing-Brokenhearted-Comfort-Restoration-Emotional-ebook/dp/B0C9SWBQNF/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className="bg-gray-500"
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609480/RewriteTheNarrative/BookPicture/HealingBrokenHearts_oi2owr.png"}
                                                    alt="Picture of Healing the Brokenhearted"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row flex-wrap  space-y-3">

                                {/* Lets Go */}
                                <div className="w-fit overflow-hidden mx-auto shadow-xl">
                                    <Link
                                        href={"https://www.amazon.com/LET-GO-Embracing-Freedom-Healing-ebook/dp/B0CBY6M7DV/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className=""
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609481/RewriteTheNarrative/BookPicture/LetGo_r6cgni.png"}
                                            alt="Picture of Lets Go"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>

                                {/* Mountain Moving Prayers*/}
                                <div className="w-fit overflow-hidden mx-auto shadow-xl">
                                    <Link
                                        href={"https://www.amazon.com/Mountain-Moving-Prayers-Unleashing-Power-ebook/dp/B0CB2TYNSH/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className=""
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609480/RewriteTheNarrative/BookPicture/MountainMover_etkl9c.png"}
                                            alt="Picture of Mountain Moving Prayers"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>

                                {/* Jealousy Unleashed */}
                                <div className="w-fit overflow-hidden mx-auto shadow-xl">
                                    <Link
                                        href={"https://www.amazon.com/Jealousy-Unleashed-But-God-Blocked/dp/B0C9SHFTRQ/?_encoding=UTF8&pd_rd_w=6Nkbe&content-id=amzn1.sym.ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_p=ed85217c-14c9-4aa0-b248-e47393e2ce12&pf_rd_r=145-6045852-0224312&pd_rd_wg=e33QA&pd_rd_r=cd590a9e-0763-4601-bbed-f8135b09d919&ref_=aufs_ap_sc_dsk"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className=""
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609480/RewriteTheNarrative/BookPicture/JealousUnleashed_o8ppx7.png"}
                                            alt="Picture of Jealousy Unleashed"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="border-t mb-10 mx-10">
                        <div className="text-center mt-5">
                            <h1>
                                <span className="text-3xl">
                                    <a href="https://www.amazon.com/dp/B0C7F76B6Y?ref_=cm_sw_r_apin_dp_MBQS5VKD48SDZV6J9C2G">
                                        Ka’LaShae
                                    </a>
                                </span>
                            </h1>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-10">
                            <div className="flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0 mt-10">

                                {/* Anointed Prayers */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Link
                                                href={"https://www.amazon.com/dp/B0C7F76B6Y?ref_=cm_sw_r_apin_dp_MBQS5VKD48SDZV6J9C2G"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className=""
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609480/RewriteTheNarrative/BookPicture/AnointedPrayers_imkdyi.png"}
                                                    alt="Picture of Anointed Prayers"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t mx-10">
                        <div className="text-center mt-5 ">
                            <h1>
                                <span className="text-3xl">
                                    <a href="https://www.amazon.com/stores/Dr.-JaNeice-Sanders-Gilbert/author/B0C9ZLYPSL?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
                                        Dr. JaNeice Gilbert
                                    </a>
                                </span>
                            </h1>
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-10">

                            <div className="flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0 mt-10">

                                {/* TrueLove */}
                                <div className="w-fit overflow-hidden mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Link
                                                href={""}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    className=""
                                                    src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690609481/RewriteTheNarrative/BookPicture/TheOtherSide_fbiwoh.png"}
                                                    alt="Picture of True Love"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
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