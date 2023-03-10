import Button from '@/components/Button'
import Footer from '@/layout/Footer'
import { useRouter } from 'next/router'
import { Rocket, BrightStar } from 'iconoir-react'

function Home() {
  const router = useRouter()

  return (
    <>
      <section className='my-32 sm:my-40'>
        <div className='px-4'>
          <h1 className='max-w-sm mx-auto text-4xl font-semibold leading-tight text-center sm:max-w-xl sm:text-6xl'>
            Create a poll and vote the{' '}
            <span className='font-black text-transparent bg-gradient-to-r bg-clip-text from-brand-pink to-brand-mauve'>
              best ideas
            </span>
          </h1>
          <p className='max-w-sm mx-auto mt-4 text-center break-words text-brand-subtext sm:max-w-md sm:mt-8 sm:text-xl'>
            Can{"'"}t decide? Get answers through a poll.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-8 sm:flex-row'>
          <Button variant='pink' size='large' onClick={() => router.push('/create')}>
            <Rocket className='rotate-45' />
            Get Started
          </Button>
          <a
            href='https://github.com/techwithmat/fira'
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center h-12 gap-3 px-6 text-white transition-colors duration-200 rounded-md bg-brand-surface hover:bg-brand-surface2'
          >
            <BrightStar />
            Star on GitHub
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
