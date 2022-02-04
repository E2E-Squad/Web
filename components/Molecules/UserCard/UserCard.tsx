import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Size, Shape} from 'lib/enums';

// Components
import Button from '../../Atoms/Button/Button';
import ImageContainer from '../../Atoms/ImageContainer/ImageContainer';

// Style
import style from "./UserCard.module.scss";

interface types {
    children?: JSX.Element,
    styleClass?: string,
    pseudo: string,
    ratingValue: number,
    location?: string,
    rank?: string,
    avatar: string,
}

const UserCard = (props: types) => {
    return (
        <div className={style[`${props.styleClass}`]}>
            <div className={style[`user-card-top`]}>
                <div className={style[`user-card-info`]}>
                    <div className={style[`user-card-avatar`]}>
                        <div className={style[`user-card-avatar__container`]}>
                            <ImageContainer 
                                size={Size.Adaptive} 
                                shape={Shape.Circle}
                                src={props.avatar}
                            />
                        </div>
                    </div>
                    <div className={style[`user-card-details`]}>
                        <p className={style[`user-card-details__pseudo`]}>{props.pseudo}</p>
                        <ReactStars
                            count={5}
                            size={18}
                            value={props.ratingValue}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div className={style[`user-card-btn`]}>
                    {props.children}
                </div>
            </div>
            <div className={style[`user-card-bottom`]}>
                <div className={style[`user-card-profile`]}>
                    <p>Classe: {props.rank}</p>
                    <p>Localité: {props.location}</p>
                </div>
                <Button styleClass="btn">
                    <p>Notifier</p>
                </Button>
            </div>
        </div>
    )
}

export default UserCard;