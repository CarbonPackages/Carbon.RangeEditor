import React, { useState, useEffect, useCallback } from "react";
import {
    injectNeosProps,
    getDeciamls,
    isRatioMode,
    getNumberFromValue,
    getLabelToTranslate,
    getStepMultiplier,
    roundNumber,
} from "./Components/Helper";
import Loading from "carbon-neos-loadinganimation/LoadingWithStyleX";
import { merge } from "ts-deepmerge";
import { useDebounce } from "use-debounce";
import DebugOutput from "./Components/DebugOutput";
import RangeInput from "./Components/RangeInput";
import RatioToolbar from "./Components/RatioToolbar";
import DefaultToolbar from "./Components/DefaultToolbar";
import * as stylex from "@stylexjs/stylex";

const defaultOptions = {
    min: 0,
    max: 100,
    step: 1,
    unit: "",
    showMinLabel: true,
    showMaxLabel: true,
    minValueIsNull: false,
    maxValueIsNull: false,
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

const styles = stylex.create({
    editorValue: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editorValueWithReset: {
        marginRight: 29,
    },
    editorValueSingle: {
        justifyContent: "center",
    },
    container: {
        width: "100%",
    },
    editorDisabled: {
        "--color": "var(--colors-ContrastBright)",
        opacity: 0.65,
        cursor: "not-allowed",

        ":where(*)>*": {
            pointerEvents: "none",
        },
    },
    editorEnabled: {
        "--color": "var(--colors-PrimaryBlue)",
    },
});

const getDataLoaderOptions = (focusedNodePath, options) => ({
    contextNodePath: focusedNodePath,
    dataSourceIdentifier: options.dataSourceIdentifier,
    dataSourceUri: options.dataSourceUri,
    dataSourceAdditionalData: options.dataSourceAdditionalData,
    dataSourceDisableCaching: Boolean(options.dataSourceDisableCaching),
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
    focusedNodePath,
    ...props
}) {
    const hasDataSource = !!(
        props.options.dataSourceIdentifier || props.options.dataSourceUri
    );

    const [options, setOptions] = useState({});
    const [optionsAsJSON, setOptionsAsJSON] = useState("");
    const [state, setState] = useState(0);
    const [debouncedState] = useDebounce(state, 500);
    const [ratioMode, setRatioMode] = useDebounce(false);
    const [decimals, setDecimals] = useState(0);
    const getLabel = useCallback(
        (value, ignoreShowInput = false) => {
            return getLabelToTranslate(
                i18nRegistry,
                options,
                value,
                ignoreShowInput,
            );
        },
        [i18nRegistry, options],
    );

    useEffect(() => {
        const newOptions = {
            ...defaultOptions,
            ...props.options,
        };
        const newOptionsAsJSON = JSON.stringify(newOptions);
        const clientEval =
            newOptionsAsJSON?.includes("ClientEval:") ||
            newOptionsAsJSON?.includes("ItemEval:");

        if (!clientEval && optionsAsJSON !== newOptionsAsJSON) {
            setOptions(newOptions);
            setOptionsAsJSON(newOptionsAsJSON);
            setState(getNumberFromValue(value, newOptions));

            const ratio = isRatioMode(newOptions);
            if (ratioMode !== ratio) {
                setRatioMode(ratio);
            }

            const newDecimals = getDeciamls(newOptions.step);
            if (decimals !== newDecimals) {
                setDecimals(newDecimals);
            }
        }
    }, [props.options]);

    const [isLoading, setIsLoading] = useState(hasDataSource);
    const currentLabel = getLabel(value);

    useEffect(() => {
        if (!hasDataSource) {
            return;
        }
        // Load options from data source
        dataSourcesDataLoader
            .resolveValue(getDataLoaderOptions(focusedNodePath, options))
            .then((values) => {
                setIsLoading(false);
                if (
                    !values ||
                    JSON.stringify(values) === JSON.stringify(options)
                ) {
                    return;
                }
                setOptions((prevOptions) => ({
                    ...prevOptions,
                    ...values,
                }));
            });
    }, [
        options.dataSourceIdentifier,
        options.dataSourceUri,
        options.dataSourceAdditionalData,
    ]);

    useEffect(() => {
        if (debouncedState != value) {
            const { min, max, step } = options;
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

    function handleKeyDown(event) {
        if (typeof onKeyDown === "function") {
            onKeyDown(event);
        }
        const key = event.key;
        if (key == "ArrowDown" || key == "ArrowUp") {
            changeValue(getStepMultiplier(event, options, decimals));
            event.preventDefault();
        }
    }

    function handleKeyPress(event) {
        if (typeof onKeyPress === "function") {
            onKeyPress(event);
        }

        if (event.key === "Enter" && typeof onEnterKey === "function") {
            onEnterKey();
        }
    }

    function changeValue(input) {
        const { min, max, minValueIsNull, maxValueIsNull, step } = options;
        input = roundNumber(input, decimals);
        if (isNaN(input)) {
            return;
        }
        input = Math.min(max, Math.max(min, input));
        setState(input);
        if (
            (minValueIsNull && input <= min) ||
            (maxValueIsNull && input >= max)
        ) {
            input = "";
        }

        if (value !== input && !(value === null && input === "")) {
            commit(input);
        }
    }

    if (isLoading || Object.values(options).length === 0) {
        return (
            <Loading isLoading={true} title="Carbon.RangeEditor:Main:loading" />
        );
    }

    return (
        <div
            {...stylex.props(
                styles.container,
                options.disabled ? styles.editorDisabled : styles.editorEnabled,
            )}
        >
            <RangeInput
                id={id}
                options={options}
                ratioMode={ratioMode}
                currentLabel={currentLabel}
                highlight={highlight}
                onChange={changeValue}
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPress}
                value={state}
                getLabel={getLabel}
            />
            <div
                {...stylex.props(
                    styles.editorValue,
                    options.resetValue !== undefined &&
                        styles.editorValueWithReset,
                    !options.showMinLabel &&
                        !options.showMaxLabel &&
                        styles.editorValueSingle,
                )}
            >
                {ratioMode ? (
                    <RatioToolbar
                        value={state}
                        onClick={changeValue}
                        options={options}
                    />
                ) : (
                    <DefaultToolbar
                        id={id}
                        value={state}
                        setValue={setState}
                        getLabel={getLabel}
                        onClick={changeValue}
                        currentLabel={currentLabel}
                        options={options}
                        handleKeyDown={handleKeyDown}
                        handleKeyPress={handleKeyPress}
                        allowFloat={decimals > 0}
                    />
                )}
            </div>

            <DebugOutput>
                value: {value} / state: {state}
            </DebugOutput>
        </div>
    );
}

export default injectNeosProps(Editor, true);
