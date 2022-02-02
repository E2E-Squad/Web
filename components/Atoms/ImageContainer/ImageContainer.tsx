import React from 'react';
import {Size, Shape} from 'lib/enums'

type Props = {
    size: Size,
    shape: Shape
}

/**
 * Shows an image in a box.
 */
const ImageContainer = (props: Props) => {
    console.log(props);
    return (
        <div>
            <img/>
        </div>
    )
}

export default ImageContainer;