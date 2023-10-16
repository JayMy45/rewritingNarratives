import ContactForm from "./form";

export default function siContactPage() {

    return (
        <>
            <div className="mt-1 md:mt-0">
                <div
                    className=" h-fit rounded-xl flex flex-col justify-center items-center"

                >
                    <div className="p-0 text-center">
                        <h1 className="text-slate-300 font-bold text-4xl md:text-6xl mt-6 mb-10 md:mb-5">Sign In</h1>
                    </div>
                    <div className="flex flex-col justify-center md:flex-row w-full md:w-1/2">
                        <div className="md:w-96 lg:w-96 xl:w-1/2 p-3 rounded-sm bg-gradient-to-r from-red-900 via-red-800 to-red-900">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}