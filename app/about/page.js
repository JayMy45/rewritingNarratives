import Head from "next/head";
import Image from "next/image";

// JSON-LD structured data for About Us page
const aboutUsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'About Us | Rewrite the Narrative Workshops',
    'description': 'The purpose of the Rewrite the Narrative Workshops is to empower individuals to transform their lives by reshaping their personal narratives. These workshops help participants align their thoughts and words with their true aspirations, enabling them to understand how to fulfill their deepest desires. By exploring how to discover and follow God\'s Blueprint for their lives, participants can overcome their current circumstances and past experiences to reach their desired destination.',
    'url': 'https://www.rewritethenarrative.com',
    'mainEntity': {
        '@type': 'Organization',
        'name': 'Rewrite the Narrative',
        'description': 'The purpose of the Rewrite the Narrative is to empower individuals to transform their lives by reshaping their personal narratives. Through workshops that aid in helping participants align their thoughts and words with their true aspirations.  We aim to enable participants with the understand of how to fulfill their deepest desires. By exploring how to discover and follow God\'s Blueprint for their lives, participants can overcome their current circumstances and past experiences to reach their desired destination.',
        'foundingDate': '2023',
        'founder': {
            '@type': 'Person',
            'name': 'Oleda Sinkler'
        }
    }
};

// SEO Metadata
export const metadata = {
    title: 'About Us | Rewrite the Narrative',
    description: 'The purpose of the Rewrite the Narrative is to empower individuals to transform their lives by reshaping their personal narratives. Through workshops that aid in helping participants align their thoughts and words with their true aspirations.  We aim to enable participants with the understand of how to fulfill their deepest desires. By exploring how to discover and follow God\'s Blueprint for their lives, participants can overcome their current circumstances and past experiences to reach their desired destination.',
    openGraph: {
        title: 'About Us | Rewrite the Narrative',
        description: 'The purpose of the Rewrite the Narrative is to empower individuals to transform their lives by reshaping their personal narratives. Through workshops that aid in helping participants align their thoughts and words with their true aspirations.  We aim to enable participants with the understand of how to fulfill their deepest desires. By exploring how to discover and follow God\'s Blueprint for their lives, participants can overcome their current circumstances and past experiences to reach their desired destination.',
    },
};

export default function AboutPage() {
    return (
        <>
            <Head>
                {/* Injecting the JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(aboutUsJsonLd)}
                </script>
            </Head>

            <section className="mt-1 mb-1 md:mt-5 md:mb-5 max-w-4xl mx-auto">
                <div className="flex flex-col bg-slate-800 bg-opacity-70 lg:flex lg:shadow-lg lg:rounded-lg">
                    <div className="px-7 md:px-12 pt-12">
                        <h2 className="dream_team mb-5 text-2xl text-gray-300 font-bold md:text-3xl text-center">About Us</h2>
                        <p className="mt-7 text-slate-200">
                            The purpose of the Rewrite the Narrative Workshops is to empower individuals to transform their lives by reshaping their personal narratives. These workshops help participants align their thoughts and words with their true aspirations, enabling them to understand how to fulfill their deepest desires. By exploring how to discover and follow God's Blueprint for their lives, participants can overcome their current circumstances and past experiences to reach their desired destination.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Image
                            src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690614697/RewriteTheNarrative/Conference/rewriteConference3_k7mcpj.png"}
                            alt="Picture of Name"
                            layout="responsive"
                            width={1200}
                            height={600}
                        />
                    </div>
                    <div>
                        <p className="mt-8 text-slate-200 px-7 md:px-12">
                            In these workshops, you will gain valuable skills, tools, and insights, boosting your confidence as you embark on a journey of self-discovery and growth. With a focus on mental, physical, spiritual, and emotional aspects, you will be equipped to take charge of your life and rewrite your narrative. By embracing the wisdom shared in these workshops, you can bring about profound and positive changes, setting yourself on a path to the life you truly desire.
                        </p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <div className="">
                            <Image
                                src={"https://res.cloudinary.com/dp04hh5pz/image/upload/v1690615818/RewriteTheNarrative/Conference/rewriteConference2_fmwfw8.png"}
                                alt="Picture of Name"
                                width={1200}
                                height={600}
                                className=""
                            />
                        </div>
                    </div>
                    <p className="text-slate-200 px-7 md:px-12 mt-8">
                        If the idea of participating in a Rewrite the Narrative workshop resonates with you, feel free to reach out to us via email, and we'll be thrilled to get things started. All it requires is the strength, courage, and confidence to acknowledge that this workshop is exactly what you need. While we don't offer one-on-one sessions, we are more than happy to arrange a workshop for a group of 10 or more individuals. Together, we can embark on a transformative journey, empowering each participant to rewrite their narrative and embrace positive change in their lives.
                    </p>
                    <div className="p-10 mb-4">
                        <a href="contact" className="p-2 border-2 rounded-md text-slate-100 hover:bg-blue-700">
                            Inquire About a Workshops
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
