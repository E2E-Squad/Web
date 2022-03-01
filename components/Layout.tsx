import React from "react";
import Header from './Organisms/Header/Header'
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <>
            <Head>
                <title>E2E</title>
                <meta name="description" content="Le peer-to-peer learning à l'école obligatoire"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header
                title="Plus fort ensemble"
                userPath="/"
                styleClass="main-header"
                logo="https://via.placeholder.com/150"
                avatar="https://randomuser.me/api/portraits/lego/1.jpg"
            />
            <main>{children}</main>
        </>
    )
}