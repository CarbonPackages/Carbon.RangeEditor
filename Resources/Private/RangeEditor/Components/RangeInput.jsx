import React from "react";
import * as stylex from "@stylexjs/stylex";
import { Icon } from "@neos-project/react-ui-components";
import { injectNeosProps } from "./Helper";

const styles = stylex.create({
    slider: {
        "--thumb-opacity": 0.7,
        appearance: "none",
        background: "var(--colors-ContrastNeutral)",
        cursor: "pointer",
        height: 25,
        outline: "none",
        width: "100%",
        borderRadius: 2,
        marginBottom: 4,

        ":focus": {
            "--thumb-opacity": 1,
        },

        "::-webkit-slider-thumb": {
            appearance: "none",
            background: "var(--colors-PrimaryBlue)",
            borderRadius: 5,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "grab",
            height: 20,
            opacity: "var(--thumb-opacity)",
            width: 20,
            border: "none",
            transitionProperty: "transform, opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "var(--transition-Default)",

            ":hover": {
                opacity: 1,
            },
            ":active": {
                cursor: "grabbing",
                transform: "scale(1.2)",
            },
        },

        "::-moz-range-thumb": {
            appearance: "none",
            background: "var(--colors-PrimaryBlue)",
            borderRadius: 5,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "pointer",
            height: 25,
            opacity: "var(--thumb-opacity)",
            width: 25,
            border: "none",
            transitionProperty: "transform, opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "var(--transition-Default)",

            ":hover": {
                opacity: 1,
            },
            ":active": {
                cursor: "grabbing",
                transform: "scale(1.2)",
            },
        },
    },
    highlight: {
        boxShadow: "0 0 0 2px var(--colors-Warn)",
    },
    inputGroup: {
        display: "flex",
        gap: 4,
    },
    resetButton: {
        background: "var(--colors-ContrastNeutral)",
        border: 0,
        borderRadius: 2,
        color: "var(--colors-ContrastBrightest)",
        cursor: "pointer",
        height: 25,
        width: 25,
        padding: 0,
        ":where(:hover,:focus)": {
            background: "var(--colors-PrimaryBlue)",
            outline: "none",
        },
    },
});

function RangeInput({
    id,
    value,
    ratioMode,
    options,
    currentLabel,
    highlight,
    i18nRegistry,
    onChange,
    getLabel,
    ...rest
}) {
    const setId = !(!ratioMode && !currentLabel && options.showInput);

    const resetLabelValues = (() => {
        const value = options.resetValue;
        if (options.ratioMode) {
            return {
                value,
                unit: "%",
            };
        }
        const label = getLabel(value);
        if (label) {
            return {
                value: label,
                unit: "",
            };
        }
        return { value, unit: options.unit };
    })();

    // render input tag
    const inputTag = (
        <input
            type="range"
            id={setId ? id : null}
            min={options.min}
            max={options.max}
            step={options.step}
            disabled={options.disabled}
            value={value.toString()}
            onChange={({ currentTarget }) => {
                onChange(currentTarget.value);
            }}
            {...rest}
            {...stylex.props(styles.slider, highlight && styles.highlight)}
        />
    );

    if (options.resetValue === undefined) {
        return inputTag;
    }

    return (
        <div {...stylex.props(styles.inputGroup)}>
            {inputTag}
            <button
                {...stylex.props(styles.resetButton)}
                title={i18nRegistry.translate(
                    options.resetLabel,
                    null,
                    resetLabelValues,
                )}
                onClick={({ currentTarget }) => {
                    currentTarget.blur();
                    onChange(options.resetValue);
                }}
                disabled={options.disabled}
            >
                <Icon icon={options.resetIcon} />
            </button>
        </div>
    );
}

export default injectNeosProps(RangeInput);
