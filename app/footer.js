
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import rewrteNarrativePen from '../public/rewrteNarrativePen.png';
import GrayHouston from '../public/GrayHouston.png';
import inHoustonColor from '../public/inHoustonColor.png';





export default function Footer() {

    const defaultImageSrc = GrayHouston;
    const hoverImageSrc = inHoustonColor;


    const [imageSrc, setImageSrc] = useState(defaultImageSrc);


    const handleMouseEnter = () => {
        setImageSrc(hoverImageSrc);
    };

    const handleMouseLeave = () => {
        setImageSrc(defaultImageSrc);
    };

    return (
        <>
            <footer className="bg-gray-800 dark:bg-transparent md:mt-5 h-fit pt-3 md:pt-5">
                <div className="flex flex-col md:flex-row md:h-full items-center pb-2">
                    <div className="">
                        <div className="my-auto h-full flex hidden md:block">
                            <div className="flex flex-col items-center h-full ml-10 mt-9">
                                <Image
                                    className="items-center"
                                    src={rewrteNarrativePen}
                                    alt="Picture of Pen"
                                    width={150}
                                    height={100}
                                    priority={true}
                                />
                                <h1 className="text-xs text-yellow-300">#RewriteTheNarrative</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex-row md:pr-14">
                        <div className="flex flex-row justify-around items-center pb-2 md:pb-0">
                            <div className="md:mt-7 hidden md:block">
                                <h5 className="italic font-bold text-slate-100 ml-12">"Empowering Individuals to Transform"</h5>
                            </div>
                            <div className="flex flex-row md:flex-col justify-evenly text-center md:mt-7 space-x-2 md:space-x-0  md:pl-4">
                                <div>
                                    <div className="text-slate-100 dark:text-gray-200 underline text-sm hidden md:block">
                                        <h2 className="block lg:hidden">Social</h2>
                                        <h2 className="hidden lg:block">Social Media</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                        <a href="https://www.facebook.com/profile.php?id=100092835397018&mibextid=LQQJ4d">
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                        <a href="https://www.instagram.com/oledasinkler_/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                                <div>

                                    <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                        <a href="https://www.clubhouse.com/house/rewrite-the-narrative">
                                            ClubHouse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow pb-1 md:pb-0">
                        <div className="flex flex-row md:flex-col justify-evenly text-center lg:border-l md:mt-6 md:mr-10 lg:mr-20 space-x-2 md:space-x-0">

                            <div className="">
                                <div className="text-slate-100 dark:text-gray-200 underline text-sm hidden md:block">Information</div>
                            </div>
                            <div>
                                <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                    <a href="/">
                                        Home
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                    <a href="contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="text-slate-100 dark:text-gray-200 text-xs italic">
                                    <a href="contact">
                                        About
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-fit mt-2 block md:hidden border border-red-800 bg-yellow-700 rounded-sm px-1 py-1">
                        <div className="uppercase font-bold text-blue-800">
                            <Link href="events" >
                                <h2 className="text-xs  mx-auto">Events</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0 bg-gray-800 dark:bg-transparent">
                    <div className="flex items-center pb-3 md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs bg-cyan-950 md:bg-transparent rounded-xl text-zinc-300 md:text-slate-400 px-1">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <div className="flex-shrink-0 mr-0 p-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link href="http://www.jeremynmyers.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="items-center hidden md:block"
                                src={imageSrc}
                                alt="Picture of Dog"
                                width={25}
                                height={25}
                                priority={true}
                            />
                        </Link>
                    </div>
                </div>
            </footer>


        </>
    )

}