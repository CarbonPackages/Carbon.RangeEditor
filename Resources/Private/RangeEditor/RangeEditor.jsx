import React, { useState, useEffect, useRef } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { selectors } from "@neos-project/neos-ui-redux-store";
import Loading from "carbon-neos-loadinganimation/LoadingWithStyleX";
import { connect } from "react-redux";
import { Icon } from "@neos-project/react-ui-components";
import { merge } from "ts-deepmerge";
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
    dataSourceIdentifier: null,
    dataSourceUri: null,
    dataSourceAdditionalData: null,
};

const getDataLoaderOptionsForProps = (props) => ({
    contextNodePath: props.focusedNodePath,
    dataSourceIdentifier: props.options.dataSourceIdentifier,
    dataSourceUri: props.options.dataSourceUri,
    dataSourceAdditionalData: props.options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(props.options.dataSourceDisableCaching),
});

const styles = stylex.create({
    slider: {
        "--thumb-opacity": 0.7,
        appearance: "none",
        background: colors.neutral,
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
            background: "var(--color)",
            borderRadius: 5,
            boxShadow: "0 0 0 #000, 0 0 0 #0d0d0d",
            cursor: "grab",
            height: 20,
            opacity: "var(--thumb-opacity)",
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
            opacity: "var(--thumb-opacity)",
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
    editorValue: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editorValueWithReset: {
        marginRight: 29,
    },
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
    textLeft: {
        textAlign: "left",
    },
    textRight: {
        textAlign: "right",
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
    textfielInputRight: {
        textAlign: "right",
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
    dimmed: {
        opacity: 0.7,
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
    dataSourcesDataLoader,
    ...props
}) {
    // We use this hack to prevent the editor from re-rendering all the time, even if the options are the same.
    const [dataSourceOptionsAsJSON, setDataSourceOptionsAsJSON] =
        useState(null);
    const getTranslation = (label) =>
        label ? i18nRegistry.translate(label) : "";
    const forceUpdate = useForceUpdate();
    const [state, setState] = useState(value);
    const [debouncedState] = useDebounce(state, 500);
    const fixedOptions = { ...defaultOptions, ...props.options };
    const { dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData } =
        fixedOptions;
    const hasDataSource = !!(dataSourceIdentifier || dataSourceUri);

    const [isLoading, setIsLoading] = useState(hasDataSource);
    const [disabled, setDisabled] = useState(fixedOptions.disabled);
    const [resetLabel, setResetLabel] = useState(fixedOptions.resetLabel);
    const [resetValue, setResetValue] = useState(fixedOptions.resetValue);
    const [resetIcon, setResetIcon] = useState(fixedOptions.resetIcon);
    const [unit, setUnit] = useState(getTranslation(fixedOptions.unit));
    const [min, setMin] = useState(fixedOptions.min);
    const [max, setMax] = useState(fixedOptions.max);
    const [step, setStep] = useState(fixedOptions.step);
    const [ratioMode, setRatioMode] = useState(isRatioMode(fixedOptions));
    const [valueLabels, setValueLabels] = useState(fixedOptions.valueLabels);
    const [valueLabelsFile, setValueLabelsFile] = useState(
        fixedOptions.valueLabelsFile,
    );
    const [showInput, setShowInput] = useState(fixedOptions.showInput);
    const [inputWidth, setInputWidth] = useState(getInputWidth(fixedOptions));
    const [ratio, setRatio] = useState(fixedOptions.ratio);
    const [showMiddle, setShowMiddle] = useState({ ...fixedOptions, value });
    const [showMinLabel, setShowMinLabel] = useState(fixedOptions.showMinLabel);
    const [showMaxLabel, setShowMaxLabel] = useState(fixedOptions.showMaxLabel);
    const [minLabel, setMinLabel] = useState(fixedOptions.minLabel);
    const [maxLabel, setMaxLabel] = useState(fixedOptions.maxLabel);

    // React on changes of options, because of ClientEval or DataSource
    function onChangedOptions(newOptions) {
        if (
            !valueIsClientEval(newOptions.disabled) &&
            newOptions.disabled !== disabled
        ) {
            setDisabled(newOptions.disabled);
        }
        if (
            !valueIsClientEval(newOptions.resetLabel) &&
            newOptions.resetLabel !== resetLabel
        ) {
            setResetLabel(newOptions.resetLabel);
        }
        if (
            !valueIsClientEval(newOptions.resetValue) &&
            newOptions.resetValue !== resetValue
        ) {
            setResetValue(newOptions.resetValue);
        }
        if (
            !valueIsClientEval(newOptions.resetIcon) &&
            newOptions.resetIcon !== resetIcon
        ) {
            setResetIcon(newOptions.resetIcon);
        }
        if (!valueIsClientEval(newOptions.min) && newOptions.min !== min) {
            setMin(newOptions.min);
        }
        if (!valueIsClientEval(newOptions.max) && newOptions.max !== max) {
            setMax(newOptions.max);
        }
        if (!valueIsClientEval(newOptions.step) && newOptions.step !== step) {
            setStep(newOptions.step);
        }
        if (
            !valueIsClientEval(newOptions.valueLabels) &&
            JSON.stringify(newOptions.valueLabels) !==
                JSON.stringify(valueLabels)
        ) {
            setValueLabels(newOptions.valueLabels);
        }
        if (
            !valueIsClientEval(newOptions.valueLabelsFile) &&
            newOptions.valueLabelsFile !== valueLabelsFile
        ) {
            setValueLabelsFile(newOptions.valueLabelsFile);
        }
        if (
            !valueIsClientEval(newOptions.showInput) &&
            newOptions.showInput !== showInput
        ) {
            setShowInput(newOptions.showInput);
        }
        if (
            !valueIsClientEval(newOptions.ratio) &&
            newOptions.ratio !== ratio
        ) {
            setRatio(newOptions.ratio);
        }
        if (
            !valueIsClientEval(newOptions.showMinLabel) &&
            newOptions.showMinLabel !== showMinLabel
        ) {
            setShowMinLabel(newOptions.showMinLabel);
        }
        if (
            !valueIsClientEval(newOptions.showMaxLabel) &&
            newOptions.showMaxLabel !== showMaxLabel
        ) {
            setShowMaxLabel(newOptions.showMaxLabel);
        }
        if (
            !valueIsClientEval(newOptions.minLabel) &&
            newOptions.minLabel !== minLabel
        ) {
            setMinLabel(newOptions.minLabel);
        }
        if (
            !valueIsClientEval(newOptions.maxLabel) &&
            newOptions.maxLabel !== maxLabel
        ) {
            setMaxLabel(newOptions.maxLabel);
        }

        const newUnit = getTranslation(newOptions.unit);
        if (!valueIsClientEval(newOptions.unit) && newUnit !== unit) {
            setUnit(newUnit);
        }

        const newInputWidth = getInputWidth(newOptions);
        if (newInputWidth !== null && newInputWidth !== inputWidth) {
            setInputWidth(newInputWidth);
        }
    }

    // React on changes of ClientEval values
    useEffect(() => {
        onChangedOptions({ ...defaultOptions, ...props.options });
    }, [props.options]);

    useEffect(() => {
        const dataAsJSON = JSON.stringify({
            dataSourceIdentifier,
            dataSourceUri,
            dataSourceAdditionalData,
        });
        if (!hasDataSource || dataSourceOptionsAsJSON === dataAsJSON) {
            return;
        }

        setDataSourceOptionsAsJSON(dataAsJSON);

        // Load options from data source
        dataSourcesDataLoader
            .resolveValue(getDataLoaderOptionsForProps(props), value)
            .then((values) => {
                setIsLoading(false);
                const newOptions = merge(defaultOptions, props.options, values);
                onChangedOptions(newOptions);
            });
    }, [dataSourceIdentifier, dataSourceUri, dataSourceAdditionalData]);

    useEffect(() => {
        const newRatioMode = isRatioMode({ ratio, unit, min, max });
        if (newRatioMode != ratioMode) {
            setRatioMode(newRatioMode);
        }
    }, [ratio, unit, min, max]);

    useEffect(() => {
        const newShowMiddle = getShowMiddle({
            value,
            min,
            max,
            showMinLabel,
            showMaxLabel,
        });
        if (newShowMiddle != showMiddle) {
            setShowMiddle(newShowMiddle);
        }
    }, [value, min, max, showMaxLabel, showMinLabel]);

    const textfieldRef = useRef(null);

    const handleChange = (event) => {
        changeValue(event.target.value);
    };

    useEffect(() => {
        if (debouncedState != value) {
            // Check if the value from the input field fits into the step settings
            const number = parseFloat(debouncedState);
            let addValue = step - ((number - min) % step);
            if (addValue == 0 || addValue == step) {
                addValue = 0;
            }
            if (addValue > step / 2) {
                addValue = addValue - step;
            }
            const finalValue = Math.min(max, Math.max(min, number + addValue));
            changeValue(finalValue);
        }
    }, [debouncedState]);

    const changeValue = (value) => {
        setState(value);
        const useParseInt = (step || 1) % 1 === 0;
        value = useParseInt ? parseInt(value, 10) : parseFloat(value, 10);
        if (isNaN(value)) {
            return;
        }
        value = Math.min(max, Math.max(min, value));
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
            const { metaKey, shiftKey } = event;
            const multiplier = shiftKey ? 10 : metaKey ? 100 : 1;
            const stepWithMultiplier = step * multiplier;
            if (isUp) {
                changeValue(Math.min(value + stepWithMultiplier, max));
                event.preventDefault();
                return;
            }
            changeValue(Math.max(value - stepWithMultiplier, min));
            event.preventDefault();
            return;
        }
    };

    const valueAsString = !value ? "0" : value;

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
        if (value <= min) {
            const fallback = !showInput || ignoreShowInput ? min + unit : null;
            const label = minLabel || getValueLabel(min) || fallback;
            return i18nRegistry.translate(label);
        }
        if (value >= max) {
            const fallback = !showInput || ignoreShowInput ? max + unit : null;
            const label = maxLabel || getValueLabel(max) || fallback;
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
            min={min}
            max={max}
            step={step}
            value={valueAsString}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            disabled={disabled}
            {...stylex.props(styles.slider, highlight && styles.highlight)}
        />
    );

    const resetLabelValues = (() => {
        const value = resetValue;
        if (ratioMode) {
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
        return { value, unit };
    })();

    if (isLoading) {
        return (
            <Loading isLoading={true} title="Carbon.RangeEditor:Main:loading" />
        );
    }

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
                        title={i18nRegistry.translate(
                            resetLabel,
                            null,
                            resetLabelValues,
                        )}
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
                    styles.editorValue,
                    typeof resetValue !== "undefined" &&
                        styles.editorValueWithReset,
                    !showMinLabel && !showMaxLabel && styles.editorValueSingle,
                )}
            >
                {ratioMode ? (
                    <>
                        <button
                            type="button"
                            title={i18nRegistry.translate(
                                "Neos.Neos.Ui:Main:rangeEditorMinimum",
                            )}
                            onClick={() => changeValue(min)}
                            disabled={disabled}
                            {...stylex.props(
                                styles.editorValueButton,
                                styles.textLeft,
                            )}
                        >
                            {valueAsString}%
                        </button>
                        <button
                            type="button"
                            title={i18nRegistry.translate(
                                "Neos.Neos.Ui:Main:rangeEditorMaximum",
                            )}
                            onClick={() => changeValue(max)}
                            disabled={disabled}
                            {...stylex.props(
                                styles.editorValueButton,
                                styles.textRight,
                            )}
                        >
                            {100 - value}%
                        </button>
                    </>
                ) : (
                    <>
                        {showMinLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate(
                                    "Neos.Neos.Ui:Main:rangeEditorMinimum",
                                )}
                                onClick={() => changeValue(min)}
                                disabled={disabled}
                                {...stylex.props(
                                    styles.editorValueButton,
                                    styles.textLeft,
                                    !showMiddle && currentLabel && min >= value
                                        ? null
                                        : styles.dimmed,
                                )}
                            >
                                {getLabel(min, true)}
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
                                    disabled={disabled}
                                    ref={textfieldRef}
                                    {...stylex.props(
                                        styles.textfieldInput(inputWidth),
                                        unit && styles.textfielInputRight,
                                    )}
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
                        {showMaxLabel && (
                            <button
                                type="button"
                                title={i18nRegistry.translate(
                                    "Neos.Neos.Ui:Main:rangeEditorMaximum",
                                )}
                                onClick={() => changeValue(max)}
                                disabled={disabled}
                                {...stylex.props(
                                    styles.editorValueButton,
                                    styles.textRight,
                                    !showMiddle && currentLabel && max <= value
                                        ? null
                                        : styles.dimmed,
                                )}
                            >
                                {getLabel(max, true)}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function valueIsClientEval(value) {
    return typeof value === "string" && value.startsWith("ClientEval:");
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

function isRatioMode({ ratio, unit, min, max }) {
    return ratio == true && unit == "%" && min >= 0 && max <= 100;
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

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));
const connector = connect((state) => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));
export default neosifier(connector(Editor));
