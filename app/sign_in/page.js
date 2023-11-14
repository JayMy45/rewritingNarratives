import ContactForm from "./form";

export const metadata = {
    title: 'Sign In | Contact Us - Rewrite the Narrative',
    description: 'Access your account and get in touch with us at Rewrite the Narrative. Sign in to your account or contact us for support and inquiries.',
    openGraph: {
        title: 'Sign In and Contact - Rewrite the Narrative',
        description: 'Securely sign in to your Rewrite the Narrative account or reach out to us for any support and queries.',
    },
};


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