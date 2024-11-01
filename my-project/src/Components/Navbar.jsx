import React from 'react'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'

const Navbar = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* <li><Link to="/home">Home</Link></li> */}
                    </ul>
                </nav>

            </div>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>

    )

}

export default Navbar
