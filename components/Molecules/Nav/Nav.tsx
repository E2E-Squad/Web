import React from 'react';

// Style
import style from "./Nav.module.scss";

interface types {
    children?: JSX.Element,
    styleClass?: string,
    items: [],
}

interface link {
    path: string,
    name: string,
}

const Nav = (props: types) => {
    return (
        <nav className={style[`${props.styleClass}`]}>
            <ul>
                {props.items.map((props: link, index: number) => {
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