import Image from "next/image";
import { EventsData } from "../data/event";
import Link from "next/link";

export default function Events() {

    const activeEventsCount = EventsData.filter(event => event.active).length;

    return (
        <>
            <section className="flex justify-center items-center min-h-full">
                <div className="w-fit">
                    <div className={`h-full grid grid-cols-1 ${activeEventsCount > 1 ? 'md:grid-cols-2' : ''} gap-10 mx-auto m-5 mb-5 md:mt-12 md:mb-12`}>
                        <div className="flex flex-col h-96 w-96 rounded-lg p-2 shadow-lg shadow-gray-500">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690519474/RewriteTheNarrative/ReWriteTheNarrative.bgRed_v6x6zc.png"
                                        alt="Picture of the author"
                                        width={100}
                                        height={100}
                                        className="rounded-lg ml-2 mt-2"
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="italic mr-10">Stay tuned for updates...</p>
                                </div>
                            </div>
                            <div className="h-full w-full p-5">
                                <div className="flex flex-col h-full rounded-lg bg-gray-700 shadow-md shadow-gray-500">
                                    <div className="flex flex-col mx-auto my-auto">
                                        <h2 className="uppercase font-bold text-2xl">More to come in 2024</h2>
                                        <h3 className="italic text-xs">interested in hosting a workshop in 2024</h3>
                                        <Link href="/contact">
                                            <h3 className="italic text-xs text-indigo-400">click here</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            EventsData.map(({ location, date, time, link, image, active }) => {
                                // Create a new Date object for the event date
                                const eventDate = new Date(date);
                                // Create a new Date object for the current date
                                const currentDate = new Date();

                                // Set the time of currentDate to 00:00:00 for accurate comparison
                                currentDate.setHours(0, 0, 0, 0);

                                // Compare the eventDate with the currentDate
                                // Display the event if the eventDate is the same or before the currentDate
                                if (eventDate >= currentDate) {
                                    return (
                                        <div className="flex flex-col md:flex-row justify-center items-center w-fit rounded-md border border-yellow-700 overflow-hidden shadow-xl">
                                            <div className="hidden md:block">
                                                <Image
                                                    src={image}
                                                    alt={`Picture of event held on ${date} in ${location}`}
                                                    width={300}
                                                    height={300}
                                                    className=""
                                                />
                                            </div>
                                            <div className="md:hidden block w-96">
                                                <Image
                                                    src={image}
                                                    alt={`Picture of event held on ${date} in ${location}`}
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
                                    );
                                } else {
                                    return null;
                                }
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    )
}