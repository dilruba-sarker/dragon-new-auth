import React from 'react';
import Header from '../components/Header';
import LattestNews from '../components/LattestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LeftNavbar/LeftNavbar';
import RightNavBar from '../components/RightNavBar/RightNavBar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <h1>home lay out</h1>
            <header>
                <Header />
                <section className='w-11/12 mx-auto'>
                    <LattestNews />
                </section>
            </header>

            <nav>
                <section className='w-11/12 mx-auto py-2'>
                    <Navbar />
                </section>
            </nav>

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12'>
                <aside className='col-span-3'><LeftNavbar /></aside>
                <section className='col-span-6'>
                    <Outlet /> {/* This will render the category/:id content */}
                </section>
                <aside className='col-span-3'><RightNavBar /></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
