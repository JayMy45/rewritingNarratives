'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import rewrteNarrativePen from '../public/rewrteNarrativePen.png';





export default function Footer() {

    const defaultImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060410/Echelonical/houston.grayscale_e1u8yo.png';
    const hoverImageSrc = 'https://res.cloudinary.com/dp04hh5pz/image/upload/v1688060773/Echelonical/houston.color.bronz_n5fzub.png'; // Add URL of the image you want to show on hover


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
                <div className="flex flex-col md:flex-row h-full items-center">
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
                                <h5 className="text-xs text-yellow-300">#RewriteTheNarrative</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex-row md:pr-14">
                        <div className="flex flex-row justify-around items-center">
                            <div className="md:mt-7 hidden md:block">
                                <h5 className="italic font-bold text-slate-100 ml-12">"Empowering Individuals to Transform"</h5>
                            </div>
                            <div className="flex flex-row md:flex-col justify-evenly text-center p-2 md:mt-7 space-x-2 md:space-x-0">
                                <div>
                                    <div className="text-gray-300 underline text-sm hidden md:block">Social Media</div>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/profile.php?id=100092835397018&mibextid=LQQJ4d">
                                        <div className="text-gray-300 text-xs italic">Facebook</div>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/oledasinkler_/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                                        <div className="text-gray-300 text-xs italic">Instagram</div>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.clubhouse.com/house/rewrite-the-narrative">
                                        <div className="text-gray-300 text-xs italic">ClubHouse</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-row md:flex-col justify-evenly text-center p-2  md:border-l md:mt-6 md:mr-20 space-x-2 md:space-x-0">

                            <div className="">
                                <div className="text-gray-300 underline text-sm hidden md:block">Information</div>
                            </div>
                            <div>
                                <a href="/">
                                    <div className="text-gray-300 text-xs italic">Home</div>
                                </a>
                            </div>
                            <div>
                                <a href="contact">
                                    <div className="text-gray-300 text-xs italic">Contact</div>
                                </a>
                            </div>
                            <div>
                                <a href="contact">
                                    <div className="text-gray-300 text-xs italic">About</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="flex items-center pb-3 md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs bg-cyan-950 md:bg-transparent rounded-lg text-zinc-600 md:text-slate-400 px-1">JayMyDesign<span className="text-yellow-500">*</span></h4>
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
                                width={35}
                                height={35}
                                priority={true}
                            />
                        </Link>
                    </div>
                </div>
            </footer>


        </>
    )

}