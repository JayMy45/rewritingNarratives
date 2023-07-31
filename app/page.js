import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen xl:justify-center md:min-h-fit xl:min-h-screen flex-col items-center">

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <h1 className='home_welcome m-0 text-7xl text-black dark:text-orange-300 mt-5'>Welcome</h1>
      </div>

      <div className='xl:py-auto'>
        <Image
          className="relative rounded-full mt-28 md:mt-0"
          src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690413201/RewriteTheNarrative/ReWrte_the_Narrative_4_tzprwx.png"
          alt="Next.js Logo"
          width={450}
          height={450}
          priority
        />
      </div>
    </main>
  )
}
