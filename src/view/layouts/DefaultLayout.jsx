import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../assets/css/DefaultLayout.css";
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function DefaultLayout() {
    return (
        <section>
            <Navbar></Navbar>
            <section className='outlet'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </section>
    )
}
