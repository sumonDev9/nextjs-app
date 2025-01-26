"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const navMenu = <>
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/post'>Post</Link></li>
    <li><Link href='/about'>About</Link></li>
    <li><Link href='/services'>Service</Link></li>
    <li><Link href='/contact'>Contact</Link></li>
    </>

    if(!pathname.includes('dashboard')){
        return (
            <div className='bg-white shadow'>
                <div className="navbar w-11/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navMenu}
                            </ul>
                        </div>
                        <a className="text-xl">NextJS</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                           {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end gap-3">
                       <button className='btn'>Login</button>
                       <button className='btn'>Logout</button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return <></>
    }
  

 
};

export default Navbar;