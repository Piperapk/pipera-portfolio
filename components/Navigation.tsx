import React, { Fragment, useEffect, useState } from "react";

const Navigation = () => {

//Navbar scroll controll
const [showNavbar, setShowNavbar] = useState<Boolean>(false)

const navbarControl = () => {
    if (window.scrollY>150) {
        setShowNavbar(true)
    } else {
        setShowNavbar(false)
    }
}

 useEffect(() => {
    //Add and then remove event listener. 
    //Execute function to check if we've scrolled pass the start of the page
    window.addEventListener('scroll', navbarControl)
    return () =>{
        window.removeEventListener('scroll', navbarControl)
    } 
 }, []);

return(
    <Fragment>
        <nav className={`py-3 flex justify-center space-x-3 sm:space-x-8 uppercase bg-white border-b-[1px] border-slate-100
        sticky top-0 z-50 backdrop-blur-sm bg-opacity-80
        transition-transform ease-in duration-200 ${showNavbar ? '' : '-translate-y-[80px] -my-8'}`}>
            {[
                ['Home', '#'],
                ['Work', '#work'],
                ['Contact', '#contact'],
            ].map(([title, url]) => (
                <a key={title} href={url} className="rounded-3xl px-3 py-1.5 text-black text-base font-normal 
                pf:hh:hover:outline pf:hh:hover:outline-1 pf:hh:hover:outline-rose-400  pf:hh:hover:text-rose-400
                active:outline active:outline-1 active:outline-rose-400  active:text-rose-400">{title}</a>
            ))}
        </nav>
    </Fragment>
);

}

export default Navigation;  