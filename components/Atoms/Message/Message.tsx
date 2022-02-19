import React from 'react';

// Style
import style from "./Message.module.scss";

interface types {
    children?: JSX.Element,
    styleClass: string,
}

const Message = (props: types) => {
    return (
        <div className={style[`${props.styleClass}`]}>
            {props.children}
        </div>
    )
}

export default Message;