import React from 'react';
import style from "./Button.module.scss";

interface types {
    children: React.ReactNode,
    styleClass: 'primary' | 'secondary' | 'danger' | 'success',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
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
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    styleClass: 'primary'
}

export default Button;