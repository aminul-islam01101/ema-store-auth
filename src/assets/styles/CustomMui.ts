import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
        '2xl': true; // adds the `mobile` breakpoint
    }
}

declare module '@mui/material/styles/createPalette' {
    interface CommonColors {
        primary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
    }
}

const rootElement = document.getElementById('root');

const Theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1040,
            xl: 1280,
            '2xl': 1536,
        },
    },
    palette: {
        primary: {
            light: '#fff000',
            main: '#FF9900',
            dark: '#FF9900',
            contrastText: '#fff00',
        },
    },
});
export default Theme;
