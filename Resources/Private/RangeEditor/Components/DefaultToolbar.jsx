import React, { useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import ValueButton from "./ValueButton";
import { injectNeosProps, valueIsClientEval } from "./Helper";

const styles = stylex.create({
    noSelect: {
        userSelect: "none",
    },
    textfield: {
        background: "var(--colors-ContrastNeutral)",
        border: 0,
        color: "var(--colors-ContrastBrightest)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--spacing-Half)",
        borderRadius: 2,
        gap: 1,
        cursor: "text",
        ":focus-within": {
            color: "var(--colors-ContrastDarkest)",
            background: "var(--colors-ContrastBrightest)",
        },
    },
    textfieldGap: {
        gap: "0.25em",
    },
    textfieldInput: (width) => ({
        appearance: "none",
        padding: 0,
        border: 0,
        margin: 0,
        background: "transparent",
        color: "inherit",
        display: "inline-block",
        textAlign: "center",
        boxSizing: "content-box",
        width: width,
        ":focus": {
            outline: "none",
        },
    }),
    textRight: {
        textAlign: "right",
    },
});

function DefaultToolbar({
    id,
    value,
    setValue,
    getLabel,
    onClick,
    currentLabel,
    options,
    handleKeyDown,
    handleKeyPress,
    allowFloat,
    i18nRegistry,
}) {
    const textfieldRef = useRef(null);
    const showMiddle = getShowMiddle({
        ...options,
        value,
    });
    const inputWidth = getInputWidth(options);

    return (
        <>
            {options.showMinLabel && (
                <ValueButton
                    title="Neos.Neos.Ui:Main:rangeEditorMinimum"
                    onClick={() => onClick(options.min)}
                    disabled={options.disabled}
                    dimmed={
                        !(!showMiddle && currentLabel && options.min >= value)
                    }
                >
                    {getLabel(options.min, true)}
                </ValueButton>
            )}
            {!showMiddle && !options.showInput && <span>&nbsp;</span>}
            {currentLabel && showMiddle && (
                <span {...stylex.props(styles.noSelect)}>{currentLabel}</span>
            )}
            {!currentLabel && options.showInput && (
                <span
                    {...stylex.props(
                        styles.textfield,
                        !!options.unit &&
                            options.unit.toString().startsWith(" ") &&
                            styles.textfieldGap,
                    )}
                    onClick={() => {
                        textfieldRef?.current?.focus();
                    }}
                >
                    <input
                        id={id}
                        title={i18nRegistry.translate(
                            "Neos.Neos.Ui:Main:rangeEditorCurrentValue",
                        )}
                        type="text"
                        onKeyDown={handleKeyDown}
                        onKeyPress={(event) => {
                            handleKeyPress(event);
                            const key = event.key;
                            if (!(allowFloat && key === ".") && isNaN(key)) {
                                event.preventDefault();
                            }
                        }}
                        onChange={(event) =>
                            setValue(event.currentTarget.value)
                        }
                        value={!value ? "0" : value}
                        disabled={options.disabled}
                        ref={textfieldRef}
                        {...stylex.props(
                            styles.textfieldInput(inputWidth),
                            options.unit && styles.textRight,
                        )}
                    />
                    {options.unit && (
                        <span {...stylex.props(styles.noSelect)}>
                            {i18nRegistry.translate(
                                options.unit.toString().trim(),
                            )}
                        </span>
                    )}
                </span>
            )}
            {!currentLabel && showMiddle && !options.showInput && (
                <span {...stylex.props(styles.noSelect)}>
                    {value.toString()}
                    {i18nRegistry.translate(options.unit)}
                </span>
            )}
            {options.showMaxLabel && (
                <ValueButton
                    title="Neos.Neos.Ui:Main:rangeEditorMaximum"
                    onClick={() => onClick(options.max)}
                    disabled={options.disabled}
                    dimmed={
                        !(!showMiddle && currentLabel && options.max <= value)
                    }
                >
                    {getLabel(options.max, true)}
                </ValueButton>
            )}
        </>
    );
}

function between(x, min, max) {
    return x > min && x < max;
}

function isInteger(value) {
    return value % 1 === 0;
}

function numLength(value) {
    return value.toString().length;
}

function getInputWidth({ min, max, step }) {
    if (
        valueIsClientEval(min) ||
        valueIsClientEval(max) ||
        valueIsClientEval(step)
    ) {
        return null;
    }
    // Calculate the width of the input field based on the length of the min, max and step values
    const additionalStepLength =
        isInteger(min) && isInteger(max) ? numLength(step) - 1 : 0;
    return (
        Math.max(numLength(min), numLength(max)) + additionalStepLength + "ch"
    );
}

function getShowMiddle({ value, min, max, showMinLabel, showMaxLabel }) {
    let show = between(value, min, max);
    if (!showMinLabel) {
        show = show || value === min;
    }
    if (!showMaxLabel) {
        show = show || value === max;
    }
    return show;
}

export default injectNeosProps(DefaultToolbar);
