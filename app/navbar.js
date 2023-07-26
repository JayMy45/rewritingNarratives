import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <>
            <nav className="h-20">
                <div className="flex justify-between h-full items-center">
                    <div className="w-1/6">
                        <Image
                            src=""
                        >
                        </Image>
                    </div>
                    <div className="flex flex-row justify-around mx-auto w-1/6">
                        <div className="">
                            <Link href="" >About</Link>
                        </div>

                        <div className="">
                            <Link href="" >Books</Link>
                        </div>
                        <div className="">
                            <Link href="" >Contact</Link>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="flex justify-around w-24 mx-auto">
                            <div>
                                <img className="bg-white rounded-xl w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688936610/Echelonical/Untitled_design_4_xrvhru.png" alt="linkedIn Logo" />
                            </div>
                            <div>
                                <img className="bg-gray-200 rounded-xl w-7 h-7" src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935951/Echelonical/Untitled_design_6_swt1g0.png" alt="GitHub Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}