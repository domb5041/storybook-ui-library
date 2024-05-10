import React, { FC } from "react";
import classes from "./Button.module.css";
import classNames from "classnames";

interface IButtonProps {
    text?: string;
    icon?: string;
    primary?: boolean;
    id: string;
    onClick: () => void;
}

const Button: FC<IButtonProps> = ({ text, icon, primary, id, onClick }) => {
    const buttonClasses = classNames(classes.button, { [classes.primary]: primary });
    const iconClasses = classNames("material-symbols-rounded", classes["button-icon"]);
    return (
        <button id={id} data-testid={id} className={buttonClasses} onClick={onClick}>
            {text}
            <span className={iconClasses}>{icon}</span>
        </button>
    );
};

export default Button;
