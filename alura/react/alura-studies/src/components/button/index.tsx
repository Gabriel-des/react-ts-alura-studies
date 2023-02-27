import React from "react";
import style from './button.module.scss';

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void;
}

function Button({ type = 'button', onClick, children }: Props) {
    return (
        <button
            type={type}
            className={style.botao}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;