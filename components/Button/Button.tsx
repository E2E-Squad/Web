import React from 'react';

interface Props {
    /** Text to be displayed before the button */
    text?: string,
    children: React.ReactChild
}
/**
 * The only true button.
 *
 * @author [Loïc Humbert](https://github.com/loichu)
 */
const Button = ({text, children}: Props) => {
    return (
        <>
            {text}
            <button>{children}</button>
        </>
    )
}

export default Button;