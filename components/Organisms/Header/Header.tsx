import React, { useState } from "react";
import {Size, Shape} from 'lib/enums';

// Components
import Nav from '../../Molecules/Nav/Nav';
import Button from '../../Atoms/Button/Button';
import ImageContainer from '../../Atoms/ImageContainer/ImageContainer';

// Style
import style from "./Header.module.scss";

const navLinks = [{
    name: "Accueil",
    path: "/"
},
{
    name: "Recherche",
    path: "/"
},
{
    name: "Profile",
    path: "/"
},
{
    name: "Gestion des branches",
    path: "/"
},
{
    name: "Branche",
    path: "/"
},
];

interface types {
    title?: string,
    userPath: string,
    styleClass: string,
    logo: string,
    avatar: string,
}

const Header = (props: types) => {
    const [isModal, setIsModal] = useState(true);
    const contentClassname = isModal
        ? `${style["hidden"]}`
        : `${style["nav-open"]}`;

    const [isClosed, setClosed] = useState(true);
    const btnClassname = isClosed
        ? `${style["icon-menu"]}`
        : `${style["icon-close"]}`;

    return (
        <>
            <header id="main-header" className={style[`${props.styleClass}`]}>
                <a href="/" className={style[`header-logo`]}>
                    <div className={style[`header-logo__container`]}>
                        <ImageContainer 
                            size={Size.Adaptive} 
                            shape={Shape.Circle}
                            src={props.logo}
                        />
                    </div>
                    <span>{props.title}</span>
                </a>
                <div className={style[`header-nav-large`]}>
                    <Nav items={navLinks} styleClass="nav-inline-links"/>
                    <a href={props.userPath} className={style[`header-nav-large__avatar`]}>
                        <div className={style[`header-nav-large__avatar__container`]}>
                            <ImageContainer 
                                size={Size.Adaptive} 
                                shape={Shape.Circle}
                                src={props.avatar}
                            />
                        </div>
                    </a>
                </div>
                <div className={style[`header-menu-icon`]}>
                    <span 
                        onClick={() => {
                            setIsModal(!isModal);
                            setClosed(!isClosed);
                        }} 
                        className={`${style[`icons-item`]} ${btnClassname}`}>
                    </span>
                </div>
            </header>
            <div className={`${contentClassname}`}>
                <Nav items={navLinks} styleClass="nav-dropdown-menu">
                    <Button styleClass="btn--danger">
                        <p>Déconnexion</p>
                    </Button>
                </Nav>
            </div>
        </>
    )
}

export default Header;