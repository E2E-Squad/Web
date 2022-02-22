import React from 'react';
import Icon from "../Icon/Icon";
import style from "./Demo.module.scss";
import Image from "next/image";

interface types {
    children: JSX.Element,
    color: string
}

/**
 *  Ceci est une demo pour les élèves de Vivalys
 */
const Button = (props: types) => {
    return (
        <>
            <Image src={"https://via.placeholder.com/150"} width={150} height={150} unoptimized />
            <span className={style.text} style={{color: props.color}}>
                {props.children} 🥶
            </span>
            <Icon
                icon={["fab", "tiktok"]}
                color="red"
                size="8x"
            />
        </>
    )
}

export default Button;