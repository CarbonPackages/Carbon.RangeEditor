import { neos } from "@neos-project/neos-ui-decorators";
import { selectors } from "@neos-project/neos-ui-redux-store";
import { connect } from "react-redux";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources"),
}));

const connector = connect((state) => ({
    focusedNodePath: selectors.CR.Nodes.focusedNodePathSelector(state),
}));

export function injectNeosProps(component, useConnector = false) {
    if (!useConnector) {
        return neosifier(component);
    }
    return neosifier(connector(component));
}

export function valueIsClientEval(value) {
    return typeof value === "string" && value.startsWith("ClientEval:");
}

export function roundNumber(value, deciamls = 0) {
    if (typeof value === "string") {
        value = parseFloat(value);
    }

    if (!deciamls) {
        return Math.round(value);
    }

    return parseFloat(value.toFixed(deciamls));
}

export function getDeciamls(step = 1) {
    // Step is integer
    if (step % 1 === 0) {
        return 0;
    }
    // Get the number of decimals in the step
    const stepString = step.toString();
    const decimalIndex = stepString.indexOf(".");
    if (decimalIndex === -1) {
        return 0; // No decimals
    }
    return stepString.length - decimalIndex - 1; // Count decimals after the dot
}

export function isRatioMode({ ratio, unit, min, max }) {
    return ratio == true && unit == "%" && min >= 0 && max <= 100;
}

export function getNumberFromValue(value, options) {
    const { min, max, minValueIsNull, maxValueIsNull } = options;

    if (value === null || value === "" || isNaN(value)) {
        if (maxValueIsNull) {
            return max;
        }
        return min;
    }
    return Math.min(max, Math.max(min, value));
}

export function getLabelToTranslate(i18nRegistry, options, value, ignoreShowInput = false) {
    const { min, max, showInput, valueLabels, valueLabelsFile } = options;
    const unit = i18nRegistry.translate(options.unit);
    const maxLabel = i18nRegistry.translate(options.maxLabel);
    const minLabel = i18nRegistry.translate(options.minLabel);

    const getValueLabel = (v) =>
        i18nRegistry.translate(valueLabels?.[v] ? valueLabels[v] : valueLabelsFile ? `${valueLabelsFile}:${v}` : "");
    value = getNumberFromValue(value, options);

    if (value <= min) {
        const fallback = !showInput || ignoreShowInput ? min + unit : null;
        return minLabel || getValueLabel(min) || fallback;
    }
    if (value >= max) {
        const fallback = !showInput || ignoreShowInput ? max + unit : null;
        return maxLabel || getValueLabel(max) || fallback;
    }
    return getValueLabel(value);
}

export function getStepMultiplier(event, options, decimals) {
    let value = event.currentTarget.value;
    value = decimals ? parseFloat(value) : parseInt(value);
    const multiplier = event.shiftKey ? 10 : event.metaKey ? 100 : 1;
    const step = options.step * multiplier;
    if (event.key == "ArrowUp") {
        return Math.min(value + step, options.max);
    }
    return Math.max(value - step, options.min);
}
