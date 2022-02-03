import React from 'react';
import {Size, Shape} from 'lib/enums'
import styles from './ImageContainer.module.scss';
//import Image from 'next/image'
//import classNames from "classnames";

type Props = {
    size: Size,
    shape: Shape,
    src: string,
    alt?: string
}

/**
 * Shows an image in a box.
 */
const ImageContainer = ({shape, size, ...imgTags}: Props): JSX.Element => {
    const classes = `${styles.custom} ${styles[shape]} ${styles[size]}`;
    return (
        <>
            <div className={classes}>
                {/*<Image {...imgTags} layout={"fill"} />*/}
                <img {...imgTags} />
            </div>
            <style jsx>{`
              div {
                background-color: red;
              }
            `}</style>
        </>
    );
}

const defaultProps = {
    size: Size.Medium,
    shape: Shape.Square
}

ImageContainer.defaultProps = defaultProps;

export default ImageContainer;