import React from 'react';
import Intro from '@/Components/intro';
import Contact from '@/Components/contact';
import Privacy from '@/Components/privacy';
import Head from 'next/head';


export default function Index() {
    return (
        <>
        <Head>
            <title>nlion</title>
            <meta {...{name: "description", content: "rando makes website"}} />
            <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
        </Head>
        <Intro />
        <Contact />
        <Privacy />
        <script src="/email-obfuscation.js?v=2.0" async />
        </>
    );
}
