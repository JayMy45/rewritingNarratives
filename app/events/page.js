import Image from "next/image";
import { EventsData } from "../data/event";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
    title: 'Upcoming Events | Rewrite the Narrative',
    description: 'Discover the latest events and workshops hosted by Rewrite the Narrative. Stay tuned for updates and opportunities to engage in our community activities.',
    openGraph: {
        title: 'Join Our Events - Rewrite the Narrative',
        description: 'Participate in Rewrite the Narrative’s upcoming events and workshops. Explore our schedule and RSVP for an enriching community experience.',
    },
};

const activeEventsJsonLd = {
    '@context': 'https://schema.org',
    '@type': EventsData.some(event => event.active) ? 'EventSeries' : 'Event',
    'name': 'Upcoming Events | Rewrite the Narrative',
    'description': EventsData.some(event => event.active) ?
        'Join our engaging series of upcoming events and workshops hosted by Rewrite the Narrative. Explore and RSVP to be a part of our vibrant community activities.' :
        'Currently, there are no active events. Stay tuned for updates on upcoming events and workshops at Rewrite the Narrative.',
    'event': EventsData.filter(event => event.active).map(event => ({
        '@type': 'Event',
        'name': "Rewrite the Narrative's Workshop",
        'startDate': event.date,
        'location': {
            '@type': 'Place',
            'name': event.location,
            'address': event.address
        },
        'image': event.image,
        'description': event.description || 'Join us at Rewrite the Narrative for an engaging and inspiring event.', // Default description; replace with actual event description if available
        'url': event.link
    })).concat(!EventsData.some(event => event.active) ? [{
        '@type': 'Event',
        'name': 'Check Back Soon',
        'description': 'No active events at the moment. Please check back later for updates on future events.',
        'url': 'https://www.rewritethenarrative.com/events' // Adjust with the actual URL of the events page
    }] : [])
};


export default function Events() {

    const activeEventsCount = EventsData.filter(event => event.active).length;

    return (
        <>
            <Head>
                {/* Injecting the JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(activeEventsJsonLd)}
                </script>
            </Head>

            <section className="flex justify-center items-center min-h-full">
                <div className="w-fit">
                    <div className={`h-full grid grid-cols-1 ${activeEventsCount > 1 ? 'md:grid-cols-2' : ''} gap-10 mx-auto m-5 mb-5 md:mt-12 md:mb-12`}>
                        {/* <div className="flex flex-col h-96 w-96 rounded-lg p-2 shadow-lg shadow-gray-500">
                            <div className="flex justify-between">
                                <div>
                                    <Image
                                        src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690519474/RewriteTheNarrative/ReWriteTheNarrative.bgRed_v6x6zc.png"
                                        alt="Picture of the author"
                                        width={100}
                                        height={100}
                                        className="ml-2 mt-2"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="italic mr-10">Stay tuned for updates...</p>
                                    <Image
                                        src="/rewrteNarrativePen.png"
                                        alt="Picture of Pen"
                                        width={100}
                                        height={100}
                                        className="mt-2 mr-5"
                                    />
                                </div>
                            </div>
                            <div className="h-full w-full p-5">
                                <div className="flex flex-col h-full rounded-lg bg-gray-700 shadow-md shadow-gray-500">
                                    <div className="flex flex-col mx-auto my-auto">
                                        <h2 className="uppercase font-bold text-2xl text-gray-200">More to come in 2024</h2>
                                        <h3 className="italic text-xs text-gray-200">interested in hosting a workshop?</h3>
                                        <Link href="/contact">
                                            <h3 className="italic text-xs text-indigo-400">click here</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}

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
                                if (eventDate >= currentDate && active) {
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


/* 
Thinking about implementing to show whenever there are no events to post
 <>
            <section className="flex justify-center items-center min-h-full">
                <div className="w-fit">
                    {hasUpcomingEvents ? (
                        <div className={`h-full grid grid-cols-1 ${activeEventsCount.length > 1 ? 'md:grid-cols-2' : ''} gap-10 mx-auto m-5 mb-5 md:mt-12 md:mb-12`}>
                            {upcomingActiveEvents.map(({ location, date, time, link, image, active }) => {
                                const eventDate = new Date(date);
                                const currentDate = new Date();
                                currentDate.setHours(0, 0, 0, 0);

                                if (eventDate >= currentDate && active) {
                                    return (
                                        <div key={location} className="flex flex-col md:flex-row justify-center items-center w-fit rounded-md border border-yellow-700 overflow-hidden shadow-xl">
                                            //{/* Event details 
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
                                }
                            })}
                        </div>
                    )
                        : (
                            // This message is displayed if there are no upcoming active events.
                            <div className="message">
                                <p>Stay tuned for more events to come!</p>
                            </div>
                        )}
                </div>
            </section>
        </>
*/