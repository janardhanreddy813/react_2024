import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import About from './components/lazyLoading/About';
import Contact from './Contact';
import Navbar from './Navbar';
import './Lazy.css';
import { Suspense, lazy } from 'react-router-dom'



const Main = () => {
    const LazyLoad = React.lazy(() => import('./About'))
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={
                        <React.Suspense fallback='Loading....'>
                            <LazyLoad />
                        </React.Suspense>} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;
