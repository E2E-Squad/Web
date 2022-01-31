import React, {useState} from 'react';
// import styles from './Button.module.css';
//import './Button.module.scss';
import classNames from "classnames";

interface ICounter {
    value: number;
    increment?: () => number;
}

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
    // Type is inferred by the initial value.
    const [clicked, setClicked] = useState(false)
    const [counter, setCounter] = useState<ICounter>({ value: 0 })
    counter.increment = () => {
        console.log("click")
        setCounter({value: counter.value + 1})
        console.log(counter.value)
        return counter.value
    }
    const classes = classNames({})
    // const classes = classNames(styles.btnDummy, styles['btn-margin'], {
    //     [styles.red]: clicked
    // })
    return (
        <>
            <span style={{ color: 'blue' }}>{text}</span>
            <span>{counter.value}</span>
            <button className={classes} onClick={() => setClicked(!clicked)}>{children}</button>
            <button className={classes} onClick={counter.increment}>Increment counter</button>
            <style jsx>{`
              span {
                margin: 8px;
              }
            `}</style>
        </>
    )
}

export default Button;