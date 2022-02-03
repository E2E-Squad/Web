import React from 'react';

// Components
import Message from '../../Atoms/Message/Message';

// Style
import style from "./ChatCard.module.scss";

interface types {
    children?: JSX.Element,
    styleClass: string,
    pseudo: string,
}

const ChatCard = (props: types) => {
    return (
        <div className={style[`${props.styleClass}`]}>
            <div className={style[`chat-card-info`]}>
                    <div className={style[`chat-card-avatar`]}>
                        <div className={style[`chat-card-avatar__container`]}></div>
                    </div>
                    <div className={style[`chat-card-details`]}>
                        <p className={style[`chat-card-details__pseudo`]}>{props.pseudo}</p>
                    </div>
            </div>
            <Message 
                styleClass={
                    props.styleClass.includes("--right") 
                    ? "message-container--right" 
                    : "message-container--left"
                }>
                {props.children}
            </Message>
        </div>
    )
}

export default ChatCard;