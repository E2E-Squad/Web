import React from 'react';
import style from "./Button.module.scss";

interface types {
    children: JSX.Element,
    styleClass: string,
}

const btnHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('hello');
}

/**
 * The only true button.
 */
const Button = (props: types) => {
    return (
        <button 
            onClick={btnHandle}
            className={style[`${props.styleClass}`]}
        >
            {props.children}
        </button>
    )
}

export default Button;