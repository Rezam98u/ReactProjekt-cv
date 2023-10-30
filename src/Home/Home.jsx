import { React, useContext, useEffect, useMemo, useState } from 'react';
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

    // const [text, setText] = useState(String);
    // const [nm, setNm] = useState(Number);


    // const sum = (nm) => {
    //     console.log("fun rendered");
    //     let total = 0
    //     for (let i = 0; i < nm; i++) {
    //         total += i
    //     }
    //     return total
    // }



    // // const sumMemo = sum()
    // const sumMemo = useMemo(() => sum(nm), [nm])



    // const sum = useMemo(() => ({
    //     const: `${nm} of example`
    // }), [nm])


    // useEffect(() => {
    //     console.log('sum has changed')
    // }, [sum])


    // console.log('component rendered')

    return (
        <>
            <div className="bg-slate-300 relative overflow-hidden">
                <Navbar />
                <HeroSection />
                <Works />
{/* 
                <div>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} />
                </div>
                <div>
                    <input type="number" value={nm} onChange={e => setNm(e.target.value)} />
                </div> */}


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
