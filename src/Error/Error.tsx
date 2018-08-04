import React from "react";
import "./Error.pcss";
import icon from "./error-icon.svg";

export const Error = ({errorMessage, display}: {errorMessage: string; display: boolean}) =>
    display ? (
        <div className="error-message">
            <img src={icon} alt="error-icon" />
            {errorMessage}
        </div>
    ) : null;
