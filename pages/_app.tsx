import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import PageTransition from "../components/page-transition/page-transition";
import HamburgerMenu from "../components/hamburger-menu/hamburger-menu";
import { ToastContainer } from "react-toastify";
import Loader from "../components/loader";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps, router }: AppProps) {
    const [loading, setLoading] = useState(true);
    const nextRouter = useRouter();

    useEffect(() => {
        setLoading(true);
        const initialTimer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        const handleRouteChangeStart = () => {
            setLoading(true);
        };

        const handleRouteChangeComplete = () => {
            const routeTimer = setTimeout(() => {
                setLoading(false);
            }, 1500);
            return () => clearTimeout(routeTimer);
        };

        nextRouter.events.on("routeChangeStart", handleRouteChangeStart);
        nextRouter.events.on("routeChangeComplete", handleRouteChangeComplete);

        return () => {
            clearTimeout(initialTimer);
            nextRouter.events.off("routeChangeStart", handleRouteChangeStart);
            nextRouter.events.off("routeChangeComplete", handleRouteChangeComplete);
        };
    }, [nextRouter]);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    <Loader />
                </motion.div>
            ) : (
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    <HamburgerMenu />
                    <PageTransition>
                        <Component {...pageProps} />
                    </PageTransition>
                    <ToastContainer theme="dark" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}