import React from 'react';
import styles from './Button.module.scss';

/**
 * The only true button.
 */
const Button = () => {
    // styles
    return (
        <button className={styles.red}>I am a button</button>
    )
}

export default Button;