import React from 'react';
import style from "./Button.module.scss"
import classNames from "classnames";

interface Props {
    text?: string,
    other: string
    children: React.ReactElement
}

/**
 * The only true button.
 */
const Button = (props: Props) => {
    const red = false;
    const classes = classNames({
        [style.red]: red,
        ["icons-item"]: true,
        exemple: true
    });
    style
    return (
        <>
            <button>
                <span className={classes}>hello</span>
            </button>
        </>
    )
}

export default Button;