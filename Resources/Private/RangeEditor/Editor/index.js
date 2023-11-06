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
    const { value, highlight } = props;
    const valueAsString = value === 0 ? "0" : value || "";
    // Calculate the width of the input field based on the length of the min, max and step values
    const numLength = (value) => value.toString().length;
    const additionalStepLength = numLength(options.step) - 1;
    const styleWidth = Math.max(numLength(options.min), numLength(options.max)) + additionalStepLength + "ch";
    const valueLabels = options.valueLabels;

    const showMiddle = !!(value != options.min && value != options.max);

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
                    title={props.i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMinimum")}
                    onClick={() => changeValue(options.min)}
                    style={{ opacity: options.min == value ? 1 : 0.7 }}
                    disabled={options.disabled}
                >
                    {props.i18nRegistry.translate(
                        options.minLabel || valueLabels[options.min] || options.min + options.unit,
                    )}
                </button>
                {!showMiddle && <span>&nbsp;</span>}
                {valueLabels[value] && showMiddle && (
                    <span className={style.valueLabel}>{props.i18nRegistry.translate(valueLabels[value])}</span>
                )}
                {!valueLabels[value] && showMiddle && (
                    <span>
                        <input
                            title={props.i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorCurrentValue")}
                            type="text"
                            onKeyPress={this.onKeyPress}
                            onChange={this.handleChange}
                            value={valueAsString}
                            style={{ width: styleWidth }}
                            disabled={options.disabled}
                        />
                        {options.unit}
                    </span>
                )}
                <button
                    type="button"
                    title={props.i18nRegistry.translate("Neos.Neos.Ui:Main:rangeEditorMaximum")}
                    onClick={() => changeValue(options.max)}
                    style={{ opacity: options.max == value ? 1 : 0.7 }}
                    disabled={options.disabled}
                >
                    {props.i18nRegistry.translate(
                        options.maxLabel || valueLabels[options.max] || options.max + options.unit,
                    )}
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

export default neosifier(Editor);
