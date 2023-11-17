import Link from "next/link";
import Hamburger from "./hamburger";

export default function NavBar() {

    return (
        <>
            {/* Navbar */}
            <nav className="hidden md:block h-34 mt-10 md:mt-0 md:mt-0 bg-gray-800 dark:bg-transparent">
                <div className="flex justify-between h-full items-center">
                    <div className="w-1/6 hidden md:block">

                        <div className="">
                            <img
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690519474/RewriteTheNarrative/ReWriteTheNarrative.bgRed_v6x6zc.png"
                                alt="Rewrite the Narrative Red Logo"
                                className="w-36 h-36 p-2 mx-auto"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center md:ml-10 lg:ml-24 md:w-2/6 lg:w-3/6">
                        <div className="hidden md:block mx-3 text-gray-300">
                            <Link href="/" >Home</Link>
                        </div>

                        <div className="hidden md:block mx-3">
                            <Link href="/about" >
                                <span className="hidden xl:inline text-gray-300">About Us</span>
                                <span className="inline xl:hidden text-gray-300">About</span>
                            </Link>
                        </div>

                        <div className="hidden md:block mx-3 text-gray-300">
                            <Link href="/book">Books</Link>
                        </div>

                        <div className="hidden md:block mx-3">
                            <Link href="/team" >
                                <span className="hidden xl:inline text-gray-300">Dream Team</span>
                                <span className="inline xl:hidden text-gray-300">Team</span>
                            </Link>
                        </div>

                        <div className="hidden md:block mx-3 text-gray-300">
                            <Link href="/contact" >Contact</Link>
                        </div>
                    </div>

                    <Link
                        href="events"
                        className="w-1/6 md:w-fit ml-10 lg:w-1/6 border border-red-400 flex justify-center bg-yellow-600 rounded-md lg:px-3 lg:py-2"
                    >
                        <div className="uppercase font-bold text-blue-700">
                            <h2 className="md:hidden xl:block lg:text-sm xl:text-md">Upcoming Events</h2>
                            <h2 className="lg:block xl:hidden text-md lg:text-lg">Events</h2>
                        </div>
                    </Link>


                    <div className="w-1/6 hidden md:block">
                        <div className="flex justify-between w-24 mx-auto">


                            {/* facebook link */}
                            <div>
                                <a href="https://www.facebook.com/profile.php?id=100092835397018&mibextid=LQQJ4d">
                                    <img className="bg-white rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513224/RewriteTheNarrative/Icon_Images_wwcmz7.png" alt="Facebook Logo" title="Facebook" />
                                </a>
                            </div>

                            {/* instagram link */}
                            <div>
                                <a href="https://www.instagram.com/oledasinkler_/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                                    <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513678/RewriteTheNarrative/Icon_Images_2_jdxlrj.png" alt="Instagram Logo" title="Instagram" />
                                </a>
                            </div>

                            {/* clubhouse link */}
                            <div>
                                <a href="https://www.clubhouse.com/house/rewrite-the-narrative">
                                    <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690572546/RewriteTheNarrative/clubhouseIcon_hdkraj.png" alt="Clubhouse.com Logo" title="Clubhouse" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    </div>
                </div>
            </nav>

            {/* hamburger menu */}
            <div className="flex bg-gray-800 dark:bg-transparent border-b border-gray-400 dark:border-gray-950 md:border-none">
                <Hamburger />
            </div>
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