import React, { useState, useEffect, useRef } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { useDebounce } from "use-debounce";
import style from "./style.module.css";
import clsx from "clsx";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.RangeEditor"),
}));

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
};

function Editor({ value, id, highlight, i18nRegistry, onEnterKey, onKeyDown, onKeyPress, commit, ...props }) {
    const forceUpdate = useForceUpdate();
    const [state, setState] = useState(value);
    const [debouncedState] = useDebounce(state, 500);
    const options = { ...defaultOptions, ...props.options };
    const ratioMode = options.ratio == true && options.unit == "%" && options.min >= 0 && options.max <= 100;
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
            const finalValue = Math.min(options.max, Math.max(options.min, number + addValue));
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
    const styleWidth = Math.max(numLength(options.min), numLength(options.max)) + additionalStepLength + "ch";
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
            const fallback = !showInput || ignoreShowInput ? options.min + unit : null;
            const label = options.minLabel || getValueLabel(options.min) || fallback;
            return i18nRegistry.translate(label);
        }
        if (value >= options.max) {
            const fallback = !showInput || ignoreShowInput ? options.max + unit : null;
            const label = options.maxLabel || getValueLabel(options.max) || fallback;
            return i18nRegistry.translate(label);
        }
        return i18nRegistry.translate(getValueLabel(value));
    };

    const currentLabel = getLabel(value);

    return (
        <div className={clsx(style.editor, options.disabled && style.editorDisabled)}>
            <input
                type="range"
                id={!ratioMode && !currentLabel && showInput ? null : id}
                min={options.min}
                max={options.max}
                step={options.step}
                value={valueAsString}
                className={clsx(style.slider, highlight && style.sliderHighlight)}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPress}
                disabled={options.disabled}
            />
            <div
                className={clsx(
                    style.editorValue,
                    !options.showMinLabel && !options.showMaxLabel && style.editorValueSingle,
                )}
            >
                {ratioMode ? (
                    <>
                        <button
                            type="button"
                            title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMinimum")}
                            onClick={() => changeValue(options.min)}
                            disabled={options.disabled}
                        >
                            {valueAsString}%
                        </button>
                        <button
                            type="button"
                            title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMaximum")}
                            onClick={() => changeValue(options.max)}
                            disabled={options.disabled}
                        >
                            {100 - value}%
                        </button>
                    </>
                ) : (
                    <>
                        {options.showMinLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMinimum")}
                                onClick={() => changeValue(options.min)}
                                style={{ opacity: !showInput && options.min >= value ? 1 : 0.7 }}
                                disabled={options.disabled}
                            >
                                {getLabel(options.min, true)}
                            </button>
                        )}
                        {!showMiddle && !showInput && <span>&nbsp;</span>}
                        {currentLabel && showMiddle && <span className={style.valueLabel}>{currentLabel}</span>}
                        {!currentLabel && showInput && (
                            <span className={clsx(style.textfield, !!unit && unit.toString().startsWith(" ") && style.textfieldGap)} onClick={() => {
                                textfieldRef?.current?.focus();
                            }}>
                                <input
                                    id={id}
                                    title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue")}
                                    type="text"
                                    onKeyDown={handleKeyDown}
                                    onKeyPress={(event) => {
                                        handleKeyPress(event);
                                        if (isNaN(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onChange={(event) => setState(event.target.value)}
                                    value={!state ? "0" : state}
                                    style={{ width: styleWidth }}
                                    disabled={options.disabled}
                                    ref={textfieldRef}
                                />
                                {unit && <span>{unit.toString().trim()}</span>}
                            </span>
                        )}
                        {!currentLabel && showMiddle && !showInput && (
                            <span>
                                {valueAsString}
                                {unit}
                            </span>
                        )}
                        {options.showMaxLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMaximum")}
                                onClick={() => changeValue(options.max)}
                                style={{ opacity: !showInput && options.max <= value ? 1 : 0.7 }}
                                disabled={options.disabled}
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

export default neosifier(Editor);
