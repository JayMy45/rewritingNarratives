import Image from "next/image";
import Link from "next/link";
import { authorPage } from "../data/books";
import Head from "next/head";

// SEO Metadata
export const metadata = {
    title: 'Books | RewriteTheNarrative',
    description: 'List of books written by various team members of Rewrite the Narrative.',
    openGraph: {
        title: 'Books | RewriteTheNarrative',
        description: 'List of books written by various team members of Rewrite the Narrative.',
    },
};

// JSON-LD structured data for About Us page
const bookPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Available Books | BookList',
    'description': 'Explore a wide range of books from multiple authors at BookList.',
    'url': 'https://www.booklist.com/books',
    'mainEntity': authorPage.map(author => ({
        '@type': 'Person',
        'name': author.name,
        'url': `https://www.booklist.com/books/${author.id}`,
        'workExample': author.books.map(book => ({
            '@type': 'Book',
            'name': book.title,
            'image': book.image,
            'url': book.amazonLink,
            'author': {
                '@type': 'Person',
                'name': author.name
            }
        }))
    }))
};


export default function BookPage() {


    return (
        <>
            <Head>
                {/* Injecting the JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify(bookPageJsonLd)}
                </script>
            </Head>

            <section className="mt-1 md:mt-0 mb-10">
                <div>
                    <div className="text-center mt-5 md:mt-10 mb-5 md:mb-10">
                        <Link
                            href={""}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <h1 className="font-semibold text-2xl md:text-3xl">
                                    Available Books
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className="border-t mb-5 mx-10">
                        {
                            authorPage.map(({ name, books }) => (
                                <div key={name} className="border-b pb-7">
                                    <div className="text-center mt-5">
                                        <h1>
                                            <span className="text-3xl">
                                                <Link href="https://www.amazon.com/stores/Oleda-Sinkler/author/B0C8BMK4YF?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
                                                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold">{name}</h2>
                                                </Link>
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {books.map(({ id, title, amazonLink, image, active }) => (
                                            active
                                                ? <div className="w-fit overflow-hidden mx-auto mb-7" key={id}>
                                                    <div className="flex flex-col justify-between">
                                                        <div className="">
                                                            <Link
                                                                href={amazonLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <Image
                                                                    className=""
                                                                    src={image}
                                                                    alt={`Picture of ${title}`}
                                                                    width={200}
                                                                    height={200}
                                                                />
                                                                <h2 className="text-center pt-3 font-semibold">{title}</h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}