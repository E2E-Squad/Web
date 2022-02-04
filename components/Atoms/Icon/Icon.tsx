import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab)

// Style
import style from "./Icon.module.scss";

interface types {
    icon: IconProp,
    size?: SizeProp,
    color?: string,
    styleClass?: string,
    title?: string;
}

const Icon = (props: types) => {
    return (
        <FontAwesomeIcon
            className={style[`${props.styleClass}`]}
            icon={props.icon}
            color={props.color}
            size={props.size}
            title={props.title}
        />
    )
}

export default Icon;