import { React, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

/// Context
import ContextApp from './ContextApp';

import './styles.scss'

const Home = lazy(() => import('./Home/Home'))
const Programmer = lazy(() => import('./Programmer/programmer'))
const AppShop = lazy(() => import('./shopping/App_shop'))
const ThreeJs = lazy(() => import('./threeJs/threeJs'))
const RecordFantasyMain = lazy(() => import('./RecordFantasy/RecordFantasyMain'))
const AdminPanel = lazy(() => import('./AdminPanel/AdminPanel'))
const AppCrypto = lazy(() => import('./Crypto/Api_Provider'))
const AmrSam = lazy(() => import('./AmrSam/AmrSam'))

/////////////////////////////
const App = () => {
    return (
        <>
            <BrowserRouter>
                <GoogleOAuthProvider clientId="958087409648-230adphg6efhl7t588o2mqqnoe9vo660">
                    <ContextApp>
                        <Routes>
                            <Route path="/" element={<Suspense fallback={<div> Loading... </div>}> <Home /> </Suspense>}> </Route>
                            <Route path="/programmer" element={<Suspense fallback={<div> Loading... </div>}> <Programmer /> </Suspense>} />
                            <Route path="/appShop/*" element={<Suspense fallback={<div> Loading... </div>}> <AppShop /> </Suspense>} />
                            <Route path="/threeJs" element={<Suspense fallback={<div> Loading... </div>}><ThreeJs /></Suspense>} />
                            <Route path="/record_fantasyMain/*" element={<Suspense fallback={<div> Loading... </div>}> <RecordFantasyMain /> </Suspense>} />
                            <Route path="/adminPanel/*" element={<Suspense fallback={<div> Loading... </div>}> <AdminPanel /> </Suspense>} />
                            <Route path="/crypto/*" element={<Suspense fallback={<div> Loading... </div>}> <AppCrypto /> </Suspense>} />
                            <Route path="/amrSam/*" element={<Suspense fallback={<div> Loading... </div>}> <AmrSam /> </Suspense>} />
                        </Routes>
                    </ContextApp>
                </GoogleOAuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
