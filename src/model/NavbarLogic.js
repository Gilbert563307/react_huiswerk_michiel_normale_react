// import React from 'react'

export default function NavbarLogic(){
    const navItems = [
        { href: "/home", name: "Home" },
        { href: "#", name: "Solutions" },
        { href: "#", name: "Pricing" },
        { href: "#", name: "About Us" },
        { href: "#", name: "Pricing" },
        { href: "/contact", name: "Contact" },
    ];
    const getNavigation = () => {
        return navItems;
    }
    return {
        getNavigation
    }
}
