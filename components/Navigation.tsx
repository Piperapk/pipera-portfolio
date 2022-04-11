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
    console.log('executed')
    return () =>{
        window.removeEventListener('scroll', navbarControl)
        console.log("scrolling")
    } 
 }, []);

return(
    <Fragment>
        <nav className={`py-3 flex justify-center space-x-3 sm:space-x-8 uppercase bg-white border-b-[1px] border-slate-100
        sticky top-0 z-50 backdrop-blur-sm bg-opacity-80
        transition-all ease-in duration-200 ${showNavbar ? '' : '-translate-y-[80px] -my-8'}`}>
            {[
                ['Home', '#'],
                ['Work', '#'],
                ['Contact', '#'],
            ].map(([title, url]) => (
                <a key={title} href={url} className="rounded-3xl px-3 py-2 text-black text-base font-normal hover:bg-slate-100 hover:text-slate-500">{title}</a>
            ))}
        </nav>
    </Fragment>
);

}

export default Navigation;