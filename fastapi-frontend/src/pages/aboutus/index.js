import React, { useState, useEffect } from 'react'
import styles from '@/styles/global.module.css';
import Navbar from '@/components/molecule/navbar';
import Button from '@/components/atom/button';

export default function Home() {

    return (
        <div className={styles.custom}>
            <Navbar 
            className={styles.navbar}
            colapseClass={styles.navcolapsed}
            active={["","","active"]}
            current={["","","page"]}
            />
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col text-center'>
                        <h1>About Us!</h1>
                    </div>
                </div>
            <div className='row justify-content-between'>
                <div className='col text-center'>
                    <p>{"Hi, I'm Jett. I made this website to give me an excuse to do something I have wanted to do since I was a kid. I've written a genetic algorithm just like the ones I saw on youtube in middle school. if you have questions or anything like that feel free to shoot me an email at jettpennington@gmail.com"}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
