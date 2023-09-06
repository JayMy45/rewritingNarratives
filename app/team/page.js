import Image from "next/image";
import { teamMembers } from "../data/team";

export default function TeamPage() {

    return (
        <>
            {/* Team Container */}
            <section className="mt-1 md:mt-5 mb-10">

                <div className="text-center ">
                    <div className="mb-16">
                        <h1 className="dream_team text-4xl md:text-3xl font-semibold">
                            Dream Team
                        </h1>
                    </div>

                    {/* Card Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20 md:px-36">

                        {/* Oleda Sinkler Card */}
                        {
                            teamMembers.map(({ id, name, image, title }) => (
                                <div key={`teamMember--${id}`} className="overflow-hidden rounded-2xl mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Image
                                                className="bg-gray-500"
                                                src={image}
                                                alt="Picture of Name"
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                        <div className="bg-slate-600 p-3">
                                            <div>
                                                <h2 className="text-center text-gray-200 font-bold">{name}</h2>
                                                <h2 className="text-center text-gray-200 text-sm font-semibold italic">{title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}