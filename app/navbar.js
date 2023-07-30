import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <nav className="h-34 mt-10 md:mt-0 md:mt-0 bg-gray-800 dark:bg-transparent">
                <div className="flex justify-between h-full items-center">
                    <div className="w-1/6 hidden md:block">

                        <div className="">
                            {/* <span className="">
                                <img
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690422041/RewriteTheNarrative/ReWrte_the_Narrative_6_yyho2e.png"
                                alt="Rewrite the Narrative Logo"
                                className="w-36 h-36 p-2 mx-auto"
                            />
                            </span>
                            <span className=""> */}
                            <img
                                src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690519474/RewriteTheNarrative/ReWriteTheNarrative.bgRed_v6x6zc.png"
                                alt="Rewrite the Narrative Red Logo"
                                className="w-36 h-36 p-2 mx-auto"
                            />
                            {/* </span> */}
                        </div>
                    </div>

                    <div className="flex flex-row justify-center mx-auto w-2/6">
                        <div className="mx-3 text-gray-300">
                            <Link href="/" >Home</Link>
                        </div>

                        <div className="mx-3">
                            <Link href="/about" >
                                <span className="hidden lg:inline text-gray-300">About Us</span>
                                <span className="inline lg:hidden text-gray-300">About</span>
                            </Link>
                        </div>

                        <div className="mx-3 text-gray-300">
                            <Link href="/book">Books</Link>
                        </div>

                        <div className="mx-3">
                            <Link href="/team" >
                                <span className="hidden lg:inline text-gray-300">Dream Team</span>
                                <span className="inline lg:hidden">Team</span>
                            </Link>
                        </div>

                        <div className="mx-3 text-gray-300">
                            <Link href="/contact" >Contact</Link>
                        </div>
                    </div>
                    <div className="w-1/6 hidden md:block">
                        <div className="flex justify-between w-24 mx-auto">
                            <div>
                                <a href="https://www.facebook.com/profile.php?id=100092835397018&mibextid=LQQJ4d">
                                    <img className="bg-white rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513224/RewriteTheNarrative/Icon_Images_wwcmz7.png" alt="Facebook Logo" title="Facebook" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/oledasinkler_/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                                    <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513678/RewriteTheNarrative/Icon_Images_2_jdxlrj.png" alt="Instagram Logo" title="Instagram" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.clubhouse.com/house/rewrite-the-narrative">
                                    <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690572546/RewriteTheNarrative/clubhouseIcon_hdkraj.png" alt="Clubhouse.com Logo" title="Clubhouse" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}