import React, { useState } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import style from "./style.module.css";
import clsx from "clsx";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.RangeEditor"),
}));

const defaultProps = {
    options: {
        min: 0,
        max: 100,
        step: 1,
        unit: "",
        minLabel: null,
        maxLabel: null,
        disabled: false,
        valueLabelsFile: "",
        valueLabels: {},
    },
};

function Editor(props, second) {
    const forceUpdate = useForceUpdate();

    const handleChange = (event) => {
        changeValue(event.target.value);
    };

    const changeValue = (value) => {
        const { options } = props;
        const useParseInt = (options.step || 1) % 1 === 0;
        value = useParseInt ? parseInt(value, 10) : parseFloat(value, 10);
        if (isNaN(value)) {
            return;
        }
        value = Math.min(options.max, Math.max(options.min, value));
        props.commit(value);

        forceUpdate();
    };

    const onKeyPress = (event) => {
        if (isNaN(event.key)) {
            event.preventDefault();
        }
    };

    const options = { ...defaultProps.options, ...props.options };
    const { value, highlight, i18nRegistry } = props;
    const valueAsString = value === 0 ? "0" : value || "";
    // Calculate the width of the input field based on the length of the min, max and step values
    const numLength = (value) => value.toString().length;
    const additionalStepLength = numLength(options.step) - 1;
    const styleWidth = Math.max(numLength(options.min), numLength(options.max)) + additionalStepLength + "ch";
    const unit = options.unit ? i18nRegistry.translate(options.unit) : "";

    const { valueLabels, valueLabelsFile } = options;
    const showMiddle = between(value, options.min, options.max);
    const getValueLabel = (value) => {
        if (valueLabels && valueLabels[value]) {
            return valueLabels[value];
        }
        if (valueLabelsFile) {
            return `${valueLabelsFile}:${value}`;
        }
        return null;
    };

    const getLabel = (value) => {
        if (value <= options.min) {
            const label = options.minLabel || getValueLabel(options.min) || options.min + unit;
            return i18nRegistry.translate(label);
        }
        if (value >= options.max) {
            const label = options.maxLabel || getValueLabel(options.max) || options.max + unit;
            return i18nRegistry.translate(label);
        }
        return i18nRegistry.translate(getValueLabel(value));
    };

    const currentLabel = getLabel(value);

    return (
        <div className={clsx(style.editor, options.disabled && style.editorDisabled)}>
            <input
                type="range"
                min={options.min}
                max={options.max}
                step={options.step}
                value={valueAsString}
                className={clsx(style.slider, highlight && style.sliderHighlight)}
                onChange={handleChange}
                disabled={options.disabled}
            />
            <div className={style.editorValue}>
                <button
                    type="button"
                    title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMinimum")}
                    onClick={() => changeValue(options.min)}
                    style={{ opacity: options.min >= value ? 1 : 0.7 }}
                    disabled={options.disabled}
                >
                    {getLabel(options.min)}
                </button>
                {!showMiddle && <span>&nbsp;</span>}
                {currentLabel && showMiddle && <span className={style.valueLabel}>{currentLabel}</span>}
                {!currentLabel && showMiddle && (
                    <span>
                        <input
                            title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue")}
                            type="text"
                            onKeyPress={onKeyPress}
                            onChange={handleChange}
                            value={valueAsString}
                            style={{ width: styleWidth }}
                            disabled={options.disabled}
                        />
                        {unit}
                    </span>
                )}
                <button
                    type="button"
                    title={i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMaximum")}
                    onClick={() => changeValue(options.max)}
                    style={{ opacity: options.max <= value ? 1 : 0.7 }}
                    disabled={options.disabled}
                >
                    {getLabel(options.max)}
                </button>
            </div>
        </div>
    );
}

//create your forceUpdate hook
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here
    // is better than directly setting `setValue(value + 1)`
}

function between(x, min, max) {
    return x > min && x < max;
}

export default neosifier(Editor);
