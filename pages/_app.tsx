import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import './../styles/globals.css';
import Loader from "../components/Loader";
import PageTransition from "../components/page-transition/page-transition";
import HamburgerMenu from "../components/hamburger-menu/hamburger-menu";

export default function MyApp({ Component, pageProps, router }: AppProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div style={{ display: loading ? 'block' : 'none' }}>
                <Loader />
            </div>
            {!loading && (
                <AnimatePresence  mode="wait">
                    <PageTransition key={router.route}>
                        <HamburgerMenu/>
                        <Component {...pageProps} />
                    </PageTransition>
                </AnimatePresence>
            )}
        </>
    );
}