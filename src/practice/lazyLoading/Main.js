import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'

const Main = () => {

  const LazyLoad= lazy(()=> import('./About'))
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={

            <Suspense fallback='Loading'>
              <LazyLoad/>
            </Suspense>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
