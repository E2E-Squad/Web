import { useState } from "react";

// Components
import Nav from './Nav';
import Button from '../../Atoms/Button/Button';

// Style
import style from "./Header.module.scss";

interface types {
    title?: string,
    styleClass: string,
}

const Header = (props: types) => {
    const [isModal, setIsModal] = useState(true);
    const contentClassname = isModal
        ? `${style["hidden"]}`
        : ``;

    const [isClosed, setClosed] = useState(true);
    const btnClassname = isClosed
        ? `${style[`icon-menu`]}`
        : `${style["icon-close"]}`;

    return (
        <>
            <header id="main-header" className={style[`${props.styleClass}`]}>
                <div className={style[`header-logo`]}>
                    <div className={style[`header-logo__container`]}></div>
                    <span>{props.title}</span>
                </div>
                <div className={style[`header-nav-large`]}>
                    <Nav styleClass="header-nav-large__links"/>
                    <div className={style[`header-nav-large__avatar`]}>
                        <div className={style[`header-nav-large__avatar__container`]}></div>
                    </div>
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
            <div className={contentClassname}>
                <Nav styleClass="header-dropdown-menu">
                    <Button styleClass="btn--danger">
                        <p>Déconnexion</p>
                    </Button>
                </Nav>
            </div>
        </>
    )
}

export default Header;