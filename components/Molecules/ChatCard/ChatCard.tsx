import React from 'react';
import {Size, Shape} from 'lib/enums';

// Components
import Message from '../../Atoms/Message/Message';
import ImageContainer from '../../Atoms/ImageContainer/ImageContainer';

// Style
import style from "./ChatCard.module.scss";

interface types {
    children?: JSX.Element,
    styleClass: string,
    pseudo: string,
    avatar: string,
}

const ChatCard = (props: types) => {
    return (
        <div className={style[`${props.styleClass}`]}>
            <div className={style[`chat-card-info`]}>
                    <div className={style[`chat-card-avatar`]}>
                        <div className={style[`chat-card-avatar__container`]}>
                            <ImageContainer 
                                size={Size.Adaptive} 
                                shape={Shape.Circle}
                                src={props.avatar}
                            />
                        </div>
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