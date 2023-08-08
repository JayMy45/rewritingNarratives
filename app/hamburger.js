'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai";


export default function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);


    return (
        <>
            <div className="flex items-center cursor-pointer md:hidden mx-auto my-5 mr-5">
                <AiOutlineMenu
                    onClick={handleToggle}
                    size={30}
                    className=""
                />
            </div>
            <div className={navbarOpen
                ? "fixed left-0 top-0 w-[75%] h-screen bg-slate-800 p-7 ease-in duration-500"
                : "fixed left-[-100%]  w-[75%] h-screen top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleToggle} className="cursor-pointer">
                        <AiOutlineClose
                            size={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link href="about">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <Link href="testimonial">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer">
                                Testimonial
                            </li>
                        </Link>
                        <Link href="contact">
                            <li
                                onClick={() => setNavbarOpen(false)
                                }
                                className="py-4 cursor-pointer">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row justify-around pt-10 items-center">

                        <AiOutlineInstagram
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineFacebook
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineTwitter
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setNavbarOpen(false)
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}