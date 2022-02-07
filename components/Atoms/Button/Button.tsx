import React from 'react';
import { useRouter } from 'next/router';
import style from "./Button.module.scss";

interface types {
    children: JSX.Element,
    styleClass: string,
    url: string,
}

/**
 * Les différents types de boutons
 */
const Button = (props: types) => {
    // const router = useRouter();
    const classes = `${style[props.styleClass]}`;
    const btnHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // TODO add routing
        // router.push(props.src);
        console.log(props.url);
    }
    return (
        <button
            type="button"
            className={classes}
            url={style[`${props.url}`]}
            onClick={btnHandle}
            // onClick={() => router.push("/")}
        >
            {props.children}
        </button>
    )
}

export default Button;