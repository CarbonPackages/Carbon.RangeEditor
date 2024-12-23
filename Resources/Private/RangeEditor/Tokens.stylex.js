import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
    blue: "var(--colors-PrimaryBlue)",
    neutral: "var(--colors-ContrastNeutral)",
    bright: "var(--colors-ContrastBright)",
    brightest: "var(--colors-ContrastBrightest)",
    darkest: "var(--colors-ContrastDarkest)",
    warn: "var(--colors-Warn)",
});

export const transitions = stylex.defineVars({
    default: "var(--transition-Default)",
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
});
