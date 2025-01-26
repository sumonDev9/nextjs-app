"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleCilck = () => {
        if(isLoggedIn){
            router.push('/about/address');
        }else{
            router.push('/');
        }
    }
    return (
        <div>
            <p>this is a about page</p>
            <button onClick={handleCilck}>Addess</button>
        </div>
    );
};

export default About;