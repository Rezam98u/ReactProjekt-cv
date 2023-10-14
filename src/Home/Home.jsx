import { React } from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Works from '../threeJs/components/Works';
import Tech from './Tech';
import Navbar from './Navbar';

///////////////////////////
const Home = () => {
    return (
        <>
            <div className="bg-slate-300">
                <Navbar />
                <HeroSection />
                <Works />
                <Tech />
                <Footer />
            </div>
        </>
    )
}
export default Home;
