import ContactForm from "./form";

export const metadata = {
    title: 'Contact Us | Rewrite the Narrative',
    description: 'Get in touch with Rewrite the Narrative. Reach out to us with your queries, suggestions, or feedback.',
    openGraph: {
        title: 'Contact Rewrite the Narrative',
        description: 'Connect with Rewrite the Narrative for any inquiries or support. Your questions and feedback are important to us.',
    },
};


export default function ContactPage() {

    return (
        <>
            <div className="mt-1 md:mt-5">
                <div
                    className="py-7 h-full relative m-3 lg:mx-12 rounded-xl flex flex-col justify-center items-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dp04hh5pz/image/upload/v1688935601/Echelonical/32308810-8F92-435E-84EE-56022BE04D69_1_201_a_yvpaak.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="p-0 md:px-5 text-center">
                        <h1 className="text-slate-300 font-bold text-4xl md:text-6xl mt-6 md:mt-10">Contact Us</h1>
                    </div>
                    <div className="flex flex-col md:flex-row w-screen">
                        <div className="w-full p-10">
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}