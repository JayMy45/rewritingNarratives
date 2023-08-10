import Image from "next/image";

export default function TeamPage() {

    return (
        <>
            {/* Team Container */}
            <section className="mt-1 md:mt-5 mb-10">

                <div className="text-center ">
                    <div className="mb-16">
                        <h1 className="dream_team text-xl md:text-3xl font-semibold">
                            Dream Team
                        </h1>
                    </div>

                    {/* Card Container */}
                    <div className="flex flex-col  md:mx-28">

                        <div className="flex flex-col md:flex-row justify-between md:mb-10 ">
                            {/* Oleda Sinkler Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mr-auto mb-10 md:mb-0">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603125/RewriteTheNarrative/Square%20Pics/Oleda_o3uxts.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Oleda Sinkler</h2>
                                            <h2 className="text-center text-gray-200 text-sm font-semibold italic">Founder</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Xavier Sinkler Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mb-10 md:mb-0">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500 aspect-auto"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603126/RewriteTheNarrative/Square%20Pics/Xavier_ibvlog.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Xavier Sinkler</h2>
                                            <h2 className="text-center text-gray-200 text-sm italic">Member</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Janeice Gilbert Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mb-10 md:mb-0">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603126/RewriteTheNarrative/Square%20Pics/Janeice_aovenz.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Janeice Gilbert </h2>
                                            <h2 className="text-center text-gray-200 text-sm italic">Member</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between">
                            {/* Deborah Kanpper Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mb-10 md:mb-0">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603127/RewriteTheNarrative/Square%20Pics/Deborah_nzd3vb.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Deborah Knapper</h2>
                                            <h2 className="text-center text-gray-200 text-sm italic">Member</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Ka'LaShae Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mb-10 md:mb-0 ">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603612/RewriteTheNarrative/Square%20Pics/squarePicture_of_the_Team_fch8nk.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Ka’LaShae</h2>
                                            <h2 className="text-center text-gray-200 text-sm italic">Member</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Kimberly Dubose Card */}
                            <div className="w-fit overflow-hidden rounded-2xl mx-auto mb-10 md:mb-0">
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <Image
                                            className="bg-gray-500"
                                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690603126/RewriteTheNarrative/Square%20Pics/Kim_mahusw.png"}
                                            alt="Picture of Name"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="bg-slate-600 p-3">
                                        <div>
                                            <h2 className="text-center text-gray-200 font-bold">Kimberly Dubose</h2>
                                            <h2 className="text-center text-gray-200 text-sm italic">Member</h2>
                                        </div>
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