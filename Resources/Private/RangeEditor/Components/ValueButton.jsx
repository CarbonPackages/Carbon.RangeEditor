import React from "react";
import * as stylex from "@stylexjs/stylex";
import { injectNeosProps } from "./Helper";

function ValueButton({
    i18nRegistry,
    title,
    textRight = false,
    dimmed = false,
    children,
    ...rest
}) {
    return (
        <button
            type="button"
            title={title ? i18nRegistry.translate(title) : null}
            {...rest}
            {...stylex.props(
                styles.editorValueButton,
                textRight && styles.textRight,
                dimmed && styles.dimmed,
            )}
        >
            {children}
        </button>
    );
}

export default injectNeosProps(ValueButton);

var styles = stylex.create({
    editorValueButton: {
        cursor: "pointer",
        background: "none",
        padding: 0,
        border: 0,
        color: "inherit",
        borderRadius: 2,
        minHeight: 20,
        textAlign: "left",
        ":focus": {
            outline: "2px solid var(--colors-PrimaryBlue)",
            outlineOffset: 2,
        },
    },
    textRight: {
        textAlign: "right",
    },
    dimmed: {
        opacity: 0.7,
    },
});
