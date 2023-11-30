import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import ContentSection from "./ContentSection"
import Footer from "./Footer"
import "../assets/css/Homepage.css";

export default function Homepage() {
    return (
        <section>
            <Navbar></Navbar>
            <Header></Header>
            <article className='content-article'>
                <ContentSection></ContentSection>
            </article>
            <Footer />
        </section>
    )
}
