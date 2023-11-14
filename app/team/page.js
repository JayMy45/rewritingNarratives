import Image from "next/image";
import { teamMembers } from "../data/team";
import Head from "next/head";

export const metadata = {
    title: 'Team | RewriteTheNarrative',
    description: 'Meet the Dream Team behind Rewrite the Narrative. Discover our team members and their roles.',
    openGraph: {
        title: 'Team | RewriteTheNarrative',
        description: 'Explore the profiles of the Dream Team members of Rewrite the Narrative.',
    },
};

const teamPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'RewriteTheNarrative Dream Team',
    'description': 'Meet the innovative and dedicated team behind RewriteTheNarrative.',
    'url': 'https://www.rewritethenarrative.com/team',
    'member': teamMembers.map(({ id, name, title, image }) => ({
        '@type': 'Person',
        'name': name,
        'jobTitle': title,
        'image': image,
        'url': `https://www.rewritethenarrative.com/team/${id}`
    }))
};


export default function TeamPage() {

    return (
        <>
            <Head>
                {/* Injecting the JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(teamPageJsonLd)}
                </script>
            </Head>

            {/* Team Container */}
            <section className="mt-5">

                <div className="text-center ">
                    <div className="mb-5 md:mb-12">
                        <h1 className="dream_team text-4xl md:text-3xl font-semibold">
                            Dream Team
                        </h1>
                    </div>

                    {/* Card Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-20 md:px-40">

                        {/* Oleda Sinkler Card */}
                        {
                            teamMembers.map(({ id, name, image, title }) => (
                                <div key={`teamMember--${id}`} className="overflow-hidden rounded-2xl mx-auto">
                                    <div className="flex flex-col justify-between">
                                        <div className="">
                                            <Image
                                                className="bg-gray-500"
                                                src={image}
                                                alt="Picture of Name"
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                        <div className="bg-slate-600 p-3">
                                            <div>
                                                <h2 className="text-center text-gray-200 font-bold">{name}</h2>
                                                <h2 className="text-center text-gray-200 text-sm font-semibold italic">{title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}