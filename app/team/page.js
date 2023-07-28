import Image from "next/image";

export default function TeamPage() {

    return (
        <>
            {/* Team Container */}
            <section className="m-5">

                <div className="text-center ">
                    <div className="mb-16">
                        <h1 className="underline text-3xl font-bold">
                            The Team
                        </h1>
                    </div>

                    {/* Card Container */}
                    <div className="flex flex-col space-y-6">


                        {/* Oleda Sinkler Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto mr-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690512467/RewriteTheNarrative/TeamPics/Oleda_Sinkler_1_aodom9.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Oleda Sinkler</h2>
                                        <h2 className="text-center text-sm italic">Founder</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Xavier Sinkler Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500 aspect-auto"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690507628/RewriteTheNarrative/TeamPics/Xavier_Sinkler_4_filcvy.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Xavier Sinkler</h2>
                                        <h2 className="text-center text-sm italic">Member</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Janeice Gilbert Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690507927/RewriteTheNarrative/TeamPics/Dr._Janeice_Gilbert_4_dfd0yb.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Janeice Gilbert </h2>
                                        <h2 className="text-center text-sm italic">Member</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deborah Kanpper Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690514892/RewriteTheNarrative/TeamPics/Deborah_Knapper_3_lcvjhp.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Deborah Knapper</h2>
                                        <h2 className="text-center text-sm italic">Member</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Ka'LaShae Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690477091/RewriteTheNarrative/TeamPics/Ka_LaShae_xnrsqw.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Ka’LaShae</h2>
                                        <h2 className="text-center text-sm italic">Member</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kimberly Dubose Card */}
                        <div className="w-fit overflow-hidden rounded-2xl mx-auto">
                            <div className="flex flex-col justify-between">
                                <div className="">
                                    <Image
                                        className="bg-gray-500 h-80"
                                        src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690477146/RewriteTheNarrative/TeamPics/Kimberly_Dubose_cp2fpg.png"}
                                        alt="Picture of Name"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="bg-slate-600 p-3">
                                    <div>
                                        <h2 className="text-center font-bold">Kimberly Dubose</h2>
                                        <h2 className="text-center text-sm italic">Member</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}