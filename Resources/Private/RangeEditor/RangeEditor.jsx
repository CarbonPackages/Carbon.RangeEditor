import React, { useState, useEffect, useRef } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { Icon } from "@neos-project/react-ui-components";
import { useDebounce } from "use-debounce";
import * as stylex from "@stylexjs/stylex";
import { colors, transitions } from "./Tokens.stylex";

const defaultOptions = {
    min: 0,
    max: 100,
    step: 1,
    unit: "",
    showMinLabel: true,
    showMaxLabel: true,
    minLabel: null,
    maxLabel: null,
    disabled: false,
    showInput: true,
    valueLabelsFile: "",
    valueLabels: {},
    resetValue: undefined,
    resetLabel: "Carbon.RangeEditor:Main:reset",
    resetIcon: "times",
};

const styles = stylex.create({
    slider: {
        "--opacity": 0.7,
        appearance: "none",
        background: colors.neutral,
        cursor: "pointer",
        height: 25,
        outline: "none",
        width: "100%",
        borderRadius: 2,

        ":focus": {
            "--opacity": 1,
        },

        "::-webkit-slider-thumb": {
            appearance: "none",
            background: "var(--color)",
            borderRadius: 5,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "grab",
            height: 20,
            opacity: "var(--opacity)",
            width: 20,
            border: "none",
            transitionProperty: "transform, opacity",
            transitionTimingFunction: transitions.timing,
            transitionDuration: transitions.default,

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
            background: "var(--color)",
            borderRadius: 5,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "pointer",
            height: 25,
            opacity: "var(--opacity)",
            width: 25,
            border: "none",
            transitionProperty: "transform, opacity",
            transitionTimingFunction: transitions.timing,
            transitionDuration: transitions.default,

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
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    editorValue: (hasReset) => ({
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: hasReset ? 29 : null,
    }),
    inputGroup: {
        display: "flex",
        gap: 4,
    },
    resetButton: {
        background: colors.neutral,
        border: 0,
        borderRadius: 2,
        color: colors.brightest,
        cursor: "pointer",
        height: 25,
        width: 25,
        padding: 0,
        ":where(:hover,:focus)": {
            background: colors.blue,
            outline: "none",
        },
    },
    editorValueButton: {
        cursor: "pointer",
        background: "none",
        padding: 0,
        border: 0,
        color: "inherit",
        borderRadius: 2,
        minHeight: 20,
        ":focus": {
            outline: `2px solid ${colors.blue}`,
            outlineOffset: 2,
        },
    },
    textfield: {
        background: colors.neutral,
        border: 0,
        color: colors.brightest,
        display: "flex",
        alignItems: "center",
        padding: "0 var(--spacing-Half)",
        borderRadius: 2,
        gap: 1,
        cursor: "text",
        ":focus-within": {
            color: colors.darkest,
            background: colors.brightest,
        },
    },
    textfieldInput: {
        appearance: "none",
        padding: 0,
        border: 0,
        margin: 0,
        background: "transparent",
        color: "inherit",
        display: "inline-block",
        textAlign: "right",
        boxSizing: "content-box",
        ":focus": {
            outline: "none",
        },
    },
    noSelect: {
        userSelect: "none",
    },
    textfieldGap: {
        gap: "0.25em",
    },
    editorValueSingle: {
        justifyContent: "center",
    },
    container: {
        width: "100%",
    },
    editorDisabled: {
        "--color": colors.bright,
        opacity: 0.65,
        cursor: "not-allowed",

        ":where(*)>*": {
            pointerEvents: "none",
        },
    },
    editorEnabled: {
        "--color": colors.blue,
    },
});

function Editor({
    value,
    id,
    highlight,
    i18nRegistry,
    onEnterKey,
    onKeyDown,
    onKeyPress,
    commit,
    ...props
}) {
    const forceUpdate = useForceUpdate();
    const [state, setState] = useState(value);
    const [debouncedState] = useDebounce(state, 500);
    const options = { ...defaultOptions, ...props.options };
    const { disabled, resetLabel, resetValue, resetIcon } = options;
    const ratioMode =
        options.ratio == true &&
        options.unit == "%" &&
        options.min >= 0 &&
        options.max <= 100;
    const textfieldRef = useRef(null);

    const handleChange = (event) => {
        changeValue(event.target.value);
    };

    useEffect(() => {
        if (debouncedState != value) {
            // Check if the value from the input field fits into the step settings
            const { step, min } = options;
            const number = parseFloat(debouncedState);
            let addValue = step - ((number - min) % step);
            if (addValue == 0 || addValue == step) {
                addValue = 0;
            }
            if (addValue > step / 2) {
                addValue = addValue - step;
            }
            const finalValue = Math.min(
                options.max,
                Math.max(options.min, number + addValue),
            );
            changeValue(finalValue);
        }
    }, [debouncedState]);

    const changeValue = (value) => {
        setState(value);
        const useParseInt = (options.step || 1) % 1 === 0;
        value = useParseInt ? parseInt(value, 10) : parseFloat(value, 10);
        if (isNaN(value)) {
            return;
        }
        value = Math.min(options.max, Math.max(options.min, value));
        commit(value);

        forceUpdate();
    };

    const handleKeyPress = (event) => {
        if (typeof onKeyPress === "function") {
            onKeyPress(event);
        }

        if (event.key === "Enter" && typeof onEnterKey === "function") {
            onEnterKey();
            return;
        }
    };

    const handleKeyDown = (event) => {
        if (typeof onKeyDown === "function") {
            onKeyDown(event);
        }

        const key = event.key;
        const isUp = key == "ArrowUp";
        if (key == "ArrowDown" || isUp) {
            let step = options.step;
            const { metaKey, shiftKey } = event;
            const multiplier = shiftKey ? 10 : metaKey ? 100 : 1;
            step = step * multiplier;
            if (isUp) {
                changeValue(Math.min(value + step, options.max));
                event.preventDefault();
                return;
            }
            changeValue(Math.max(value - step, options.min));
            event.preventDefault();
            return;
        }
    };

    const valueAsString = !value ? "0" : value;
    // Calculate the width of the input field based on the length of the min, max and step values
    const numLength = (value) => value.toString().length;
    const additionalStepLength = numLength(options.step) - 1;
    const styleWidth =
        Math.max(numLength(options.min), numLength(options.max)) +
        additionalStepLength +
        "ch";
    const unit = options.unit ? i18nRegistry.translate(options.unit) : "";

    const { valueLabels, valueLabelsFile, showInput } = options;
    let showMiddle = between(value, options.min, options.max);
    if (!options.showMinLabel) {
        showMiddle = showMiddle || value === options.min;
    }
    if (!options.showMaxLabel) {
        showMiddle = showMiddle || value === options.max;
    }
    const getValueLabel = (value) => {
        if (valueLabels && valueLabels[value]) {
            return valueLabels[value];
        }
        if (valueLabelsFile) {
            return `${valueLabelsFile}:${value}`;
        }
        return null;
    };

    const getLabel = (value, ignoreShowInput) => {
        if (value <= options.min) {
            const fallback =
                !showInput || ignoreShowInput ? options.min + unit : null;
            const label =
                options.minLabel || getValueLabel(options.min) || fallback;
            return i18nRegistry.translate(label);
        }
        if (value >= options.max) {
            const fallback =
                !showInput || ignoreShowInput ? options.max + unit : null;
            const label =
                options.maxLabel || getValueLabel(options.max) || fallback;
            return i18nRegistry.translate(label);
        }
        return i18nRegistry.translate(getValueLabel(value));
    };

    const currentLabel = getLabel(value);

    // render input tag
    const renderInput = (
        <input
            type="range"
            id={!ratioMode && !currentLabel && showInput ? null : id}
            min={options.min}
            max={options.max}
            step={options.step}
            value={valueAsString}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            disabled={disabled}
            {...stylex.props(styles.slider, highlight && styles.highlight)}
        />
    );

    return (
        <div
            {...stylex.props(
                styles.container,
                disabled ? styles.editorDisabled : styles.editorEnabled,
            )}
        >
            {typeof resetValue === "undefined" ? (
                renderInput
            ) : (
                <div {...stylex.props(styles.inputGroup)}>
                    {renderInput}
                    <button
                        {...stylex.props(styles.resetButton)}
                        title={i18nRegistry.translate(resetLabel, null, [
                            resetValue,
                        ])}
                        onClick={({ currentTarget }) => {
                            currentTarget.blur();
                            changeValue(resetValue);
                        }}
                        disabled={disabled}
                    >
                        <Icon icon={resetIcon} />
                    </button>
                </div>
            )}
            <div
                {...stylex.props(
                    styles.editorValue(typeof resetValue !== "undefined"),
                    !options.showMinLabel &&
                        !options.showMaxLabel &&
                        styles.editorValueSingle,
                )}
            >
                {ratioMode ? (
                    <>
                        <button
                            type="button"
                            title={i18nRegistry.translate(
                                "Neos.Neos.Ui:Main:rangeEditorMinimum",
                            )}
                            onClick={() => changeValue(options.min)}
                            disabled={disabled}
                            {...stylex.props(styles.editorValueButton)}
                        >
                            {valueAsString}%
                        </button>
                        <button
                            type="button"
                            title={i18nRegistry.translate(
                                "Neos.Neos.Ui:Main:rangeEditorMaximum",
                            )}
                            onClick={() => changeValue(options.max)}
                            disabled={disabled}
                            {...stylex.props(styles.editorValueButton)}
                        >
                            {100 - value}%
                        </button>
                    </>
                ) : (
                    <>
                        {options.showMinLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate(
                                    "Neos.Neos.Ui:Main:rangeEditorMinimum",
                                )}
                                onClick={() => changeValue(options.min)}
                                style={{
                                    opacity:
                                        !showInput && options.min >= value
                                            ? 1
                                            : 0.7,
                                }}
                                disabled={disabled}
                                {...stylex.props(styles.editorValueButton)}
                            >
                                {getLabel(options.min, true)}
                            </button>
                        )}
                        {!showMiddle && !showInput && <span>&nbsp;</span>}
                        {currentLabel && showMiddle && (
                            <span {...stylex.props(styles.noSelect)}>
                                {currentLabel}
                            </span>
                        )}
                        {!currentLabel && showInput && (
                            <span
                                {...stylex.props(
                                    styles.textfield,
                                    !!unit &&
                                        unit.toString().startsWith(" ") &&
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
                                        if (isNaN(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onChange={(event) =>
                                        setState(event.target.value)
                                    }
                                    value={!state ? "0" : state}
                                    style={{ width: styleWidth }}
                                    disabled={disabled}
                                    ref={textfieldRef}
                                    {...stylex.props(styles.textfieldInput)}
                                />
                                {unit && (
                                    <span {...stylex.props(styles.noSelect)}>
                                        {unit.toString().trim()}
                                    </span>
                                )}
                            </span>
                        )}
                        {!currentLabel && showMiddle && !showInput && (
                            <span {...stylex.props(styles.noSelect)}>
                                {valueAsString}
                                {unit}
                            </span>
                        )}
                        {options.showMaxLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate(
                                    "Neos.Neos.Ui:Main:rangeEditorMaximum",
                                )}
                                onClick={() => changeValue(options.max)}
                                style={{
                                    opacity:
                                        !showInput && options.max <= value
                                            ? 1
                                            : 0.7,
                                }}
                                disabled={disabled}
                                {...stylex.props(styles.editorValueButton)}
                            >
                                {getLabel(options.max, true)}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

//create your forceUpdate hook
function useForceUpdate() {
    const [, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here
    // is better than directly setting `setValue(value + 1)`
}

function between(x, min, max) {
    return x > min && x < max;
}
const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
}));

export default neosifier(Editor);
