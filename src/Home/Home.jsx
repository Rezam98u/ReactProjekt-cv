import { React, useContext } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Works from '../threeJs/components/Works';
import Tech from './Tech';
import About from './About'
import Footer from './Footer';

/// Context
import { AppContext } from '../ContextApp';


///////////////////////////
const Home = () => {
    const { scroll } = useContext(AppContext)
    // const fakeDelay = () => new Promise(resolve => setTimeout(resolve, 2000))


    return (
        <>
            <div className="bg-slate-300 relative overflow-hidden">
                <Navbar />
                <HeroSection />
                <Works />
                <Tech />
                <About />
                <Footer />

                <div
                    className='absolute h-6 top-[32%] bg-[#10182f] rounded-3xl'
                    style={{ width: scroll * 1.02 }}
                />

                {scroll >= 688.7999877929688 &&
                    <div className="fixed right-4 bottom-24 z-20 text-gray-500 duration-300">
                        <Tippy content="scroll to top" delay={550} placement='top'>
                            <button>
                                <BsArrowUpSquareFill size={34} className='rounded-xl'
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                            </button>
                        </Tippy>
                    </div>
                }
            </div>
        </>
    )
}
export default Home;
