import React from "react";
import Header from './Organisms/Header/Header'

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <>
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