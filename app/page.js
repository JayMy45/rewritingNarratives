import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen xl:justify-center lg:min-h-full flex-col items-center">

      <div className="fixed bottom-0 left-0 pb-5 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* <h1 className='home_welcome m-0 text-7xl bg-black text-black dark:text-orange-300 bg-transparent mt-5'>Welcome</h1> */}
        <div className='md:hidden block'>
          <h2 className='md:hidden block text-black dark:text-slate-200'>with</h2>
          <Image
            className="hidden dark:block"
            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692065329/RewriteTheNarrative/O.Signature.whte_gmofke.png"
            alt="Signature Logo"
            width={300}
            height={300}
            priority
          />
          <Image
            className="dark:hidden"
            src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692065329/RewriteTheNarrative/OledaSignature.BLK_ng6dyg.png"
            alt="Signature Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      <div className='mt-0 md:mt-5 md:ml-60 xl:py-auto z-5 md:flex md:items-center'>
        <Image
          className="relative rounded-full mt-10 md:mt-0"
          src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1690413201/RewriteTheNarrative/ReWrte_the_Narrative_4_tzprwx.png"
          alt="Next.js Logo"
          width={450}
          height={450}
          priority
        />

        <div className="ml-4">
          <h2 className='hidden md:block text-black dark:text-slate-200'>with</h2>
          <div className='hidden md:block'>
            <Image
              className="hidden dark:block"
              src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692065329/RewriteTheNarrative/O.Signature.whte_gmofke.png"
              alt="Signature Logo"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className='hidden md:block'>
            <Image
              className="dark:hidden"
              src="https://res.cloudinary.com/dp04hh5pz/image/upload/v1692065329/RewriteTheNarrative/OledaSignature.BLK_ng6dyg.png"
              alt="Signature Logo"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
