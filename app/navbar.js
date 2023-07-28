import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <nav className="h-34 mt-7 md:mt-0">
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
                        <div className="mx-3">
                            <Link href="/" >Home</Link>
                        </div>

                        {/* <div className="mx-3">
                            <Link href="/about" >
                                <span className="hidden lg:inline">About Us</span>
                                <span className="inline lg:hidden">About</span>
                            </Link>
                        </div> */}

                        <div className="mx-3">
                            <Link href="/book" >Books</Link>
                        </div>

                        <div className="mx-3">
                            <Link href="/team" >
                                <span className="hidden lg:inline">Meet the Team</span>
                                <span className="inline lg:hidden">Team</span>
                            </Link>
                        </div>

                        <div className="mx-3">
                            <Link href="/contact" >Contact</Link>
                        </div>
                    </div>
                    <div className="w-1/6 hidden md:block">
                        <div className="flex justify-around w-24 mx-auto">
                            <div>
                                <a href="">
                                    <img className="bg-white rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513224/RewriteTheNarrative/Icon_Images_wwcmz7.png" alt="Facebook Logo" />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img className="bg-gray-200 rounded-lg w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690513678/RewriteTheNarrative/Icon_Images_2_jdxlrj.png" alt="Instagram Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}