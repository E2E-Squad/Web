import React from 'react';
import style from "./Button.module.scss";

interface types {
    children: JSX.Element,
    styleClass: string,
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

/**
 * Les différents types de boutons
 */
const Button = (props: types) => {
    const classes = `${style[props.styleClass]}`;
    return (
        <button
            type="button"
            className={classes}
            onClick={props.ClickHandler}
        >
            {props.children}
        </button>
    )
}

export default Button;