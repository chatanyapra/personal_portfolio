import WelcomeSection from './WelcomeSection'
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import TypewriterEffect from '../ui/Typewriter';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <div className='w-full max-sm:pt-10 md:pt-32 flex items-center max-md:flex-col '>

                <div className='w-full flex max-md:flex-col justify-between mx-auto items-center overflow-hidden z-10'>
                    <div className="w-2/4 max-md:w-full h-full max-lg:pl-4 max-sm:p-0">
                        <div className='m-auto text-left max-sm:px-4'>
                            <h5 className='text-xl py-2'>Welcome to my world</h5>
                            <div className='text-4xl font-bold pt-8 leading-10 -mb-3'>Hi,</div>
                            <div className='text-8xl max-md:text-6xl font-bold'>
                                <span className="text-4xl"> I&apos;m</span> <span className='text-gradient font-bold'>Chatanya</span>
                            </div>
                            <span className='text-3xl font-bold py-4 max-md:text-4xl flex'>
                                a
                                <span className='sm:pl-1 mt-0.5 max-sm:mt-1.5'>
                                    <TypewriterEffect />
                                </span>
                            </span>
                            <ScrollViewAnimation>
                                <p className="pt-5">I create seamless, high-performance websites where every line of code serves a purpose combining functionality with user-friendly experiences.</p>
                            </ScrollViewAnimation>
                        </div>
                        <div className='my-14 text-3xl flex max-sm:justify-center'>
                            <Link
                                href='https://www.linkedin.com/in/chatanya-pratap-ab410a277/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Chatanya Pratap LinkedIn Profile'
                                title='Connect with Chatanya Pratap on LinkedIn'
                            >
                                <FaLinkedinIn className='m-1.5 cursor-pointer hover:text-blue-500 transition-colors' />
                            </Link>
                            <span className='btn-gradient w-14 mt-5 mx-2'></span>
                            <Link
                                href='https://github.com/chatanyapra'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Chatanya Pratap GitHub Profile'
                                title='View Chatanya Pratap projects on GitHub'
                            >
                                <FaGithub className='m-1.5 cursor-pointer hover:text-gray-400 transition-colors' />
                            </Link>
                            <span className='btn-gradient w-14 mt-5 mx-2'></span>
                            <Link
                                href='https://x.com/Chatanyapra'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Chatanya Pratap Twitter/X Profile'
                                title='Follow Chatanya Pratap on X (Twitter)'
                            >
                                <FaXTwitter className='m-1.5 cursor-pointer hover:text-blue-400 transition-colors' />
                            </Link>
                        </div>
                    </div>
                    <WelcomeSection />
                </div>
            </div>
        </div>
    )
}

export default Home
