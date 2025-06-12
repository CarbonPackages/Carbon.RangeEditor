import React from "react";
import ValueButton from "./ValueButton";

export default function RatioToolbar({ value, onClick, options }) {
    return (
        <>
            <ValueButton
                title="Neos.Neos.Ui:Main:rangeEditorMinimum"
                onClick={() => onClick(options.min)}
                disabled={options.disabled}
            >
                {value.toString()}%
            </ValueButton>
            <ValueButton
                title="Neos.Neos.Ui:Main:rangeEditorMaximum"
                onClick={() => onClick(options.max)}
                disabled={options.disabled}
                textRight={true}
            >
                {100 - value}%
            </ValueButton>
        </>
    );
}
