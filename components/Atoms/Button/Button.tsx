import React from 'react';
import style from "./Button.module.scss";

interface types {
    children: JSX.Element,
    styleClass: string,
}

/**
 * The only true button.
 */
const Button = (props: types) => {
    return (
        <button className={style[`${props.styleClass}`]}>{props.children}</button>
    )
}

export default Button;