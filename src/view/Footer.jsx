import React from 'react'
import "../assets/css/Footer.css"
import NavbarLogic from "../model/NavbarLogic";
import logo from "../assets/images/logo.png";

export default function Footer() {

    const NavbarLogicInstace = NavbarLogic();
    const collectGetNavBarItems = () => {
        return NavbarLogicInstace.getNavigation();
    }

    const navItems = collectGetNavBarItems();

    return (
        <footer>
            <article className='main-article'>
                <article className='info-logo'>
                    <div>
                        <img src={logo} alt="" />
                        <h5>QuantumSky Solutions</h5>
                    </div>
                </article>
                <article className='navigation'>
                    <h5>Navigation</h5>
                    <ul>
                        {navItems.map((obj, key) => {
                            return <li><a key={key} href={obj.href}>{obj.name}</a></li>
                        })}
                    </ul>
                </article>

                <article className='about-us'>
                    <h5>About Us</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quibusdam nulla, optio porro, dolorem nobis ab temporibus delectus ipsa
                        ad nemo minima aut sed distinctio non totam nesciunt maiores voluptas impedit.
                        Repellat eum necessitatibus ad
                        facere odio similique vitae eagnam. Quidem, obcaecati.</p>
                </article>
            </article>

        </footer>
    )
}
