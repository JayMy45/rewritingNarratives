'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";





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
            <footer>
                <div className="flex">
                    <div className="flex-grow">

                    </div>
                    <div className="flex-shrink-0 mr-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link href="http://www.jeremynmyers.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="items-center px-2 hidden md:block"
                                src={imageSrc}
                                alt="Picture of Dog"
                                width={80}
                                height={80}
                                priority={true}
                            />
                        </Link>
                    </div>
                </div>

            </footer>

        </>
    )

}