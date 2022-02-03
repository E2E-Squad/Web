import React from 'react';
import { navLinks } from "./utils/data";

// Style
import style from "./Header.module.scss";

interface types {
    children?: JSX.Element,
    styleClass: string,
}

interface link {
    path: string,
    name: string,
}

const Nav = (props: types) => {
    return (
        <nav className={style[`${props.styleClass}`]}>
            <ul>
                {navLinks.map((props: link, index: number) => {
                    return (
                        <li key={index}>
                            <a href={props.path}>
                                {props.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {props.children}
        </nav>
    )
}

export default Nav;