import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "Prompt, system-ui, sans-serif",
        heading: "Prompt, Georgia, serif",
        mono: "Prompt, Menlo, monospace",
    },
    colors: {
        palette: {
            main: "#fff",
            secondary: "#fdf8ee",
            footer: "#fff",
            body: "#F5F8FA",
            container: "#FFFFFF"
        },
        simple: {
            50: "#A1F7F9",
            100: "#77D6F3",
            200: "#4FA3EB",
            300: "#2863E2",
            400: "#2566D0",
            500: "#2167BD",
            600: "#1E66AB",
            700: "#1B6399",
            800: "#175E86",
            900: "#145774",
        }
    },
})

