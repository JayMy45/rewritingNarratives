import Image from "next/image";
import { EventsData } from "../data/event";

export default function Events() {

    const activeEventsCount = EventsData.filter(event => event.active).length;

    return (
        <>
            <section className="flex justify-center items-center min-h-full">
                <div className="w-fit">
                    <div className={`h-full grid grid-cols-1 ${activeEventsCount > 1 ? 'md:grid-cols-2' : ''} gap-10 mx-auto m-5 mb-5 md:mt-12 md:mb-12`}>
                        {
                            EventsData.map(({ location, date, time, link, image, active }) => (
                                active
                                    ? <div className="flex flex-col md:flex-row justify-center items-center w-fit rounded-md border border-yellow-700 overflow-hidden shadow-xl">
                                        <div className="hidden md:block">
                                            <Image
                                                src={image}
                                                alt={`Picture of event held on on ${date} in ${location}`}
                                                width={300}
                                                height={300}
                                                className=""
                                            />
                                        </div>
                                        <div className="md:hidden block w-96">
                                            <Image
                                                src={image}
                                                alt={`Picture of event held on on ${date} in ${location}`}
                                                width={300}
                                                height={300}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col h-full bg-stone-500 w-full md:w-80 p-3">
                                            <div className="hidden md:block p-5 text-slate-200">
                                                <div className="w-fit mt-10">
                                                    <h2 className="font-semibold text-gray-200">Location:</h2>
                                                    <h3 className="mb-5">{location}</h3>

                                                    <h2 className="font-semibold text-gray-200">Date:</h2>
                                                    <h3 className="mb-5">{date}</h3>

                                                    <h2 className="font-semibold text-gray-200">Time:</h2>
                                                    <h3>{time}</h3>

                                                </div>
                                            </div>
                                            <div className="border-2 w-fit h-fit px-3 py-1 mx-auto rounded-lg bg-green-700 md:mt-10">
                                                <a href={link} className="text-slate-300 font-bold">
                                                    Click here to RSVP
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            ))}

                    </div>
                </div>
            </section>
        </>
    )
}