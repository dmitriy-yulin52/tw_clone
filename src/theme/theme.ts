import {createTheme} from "@material-ui/core";
import {grey, red} from "@material-ui/core/colors";


export const theme = createTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ] as any,
    },
    palette: {
        primary: {
            main: 'rgb(29,161,242)',
            dark: 'rgb(26,145,218)',
            contrastText: '#fff',
        },
        secondary: {
            main: 'rgb(211, 211, 211)'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff'
        },
        text: {
            primary: '#14171a'
        }
    },
    shadows: [
        "none",
        ...Array(20).fill('none')
    ] as any,
    overrides: {
        MuiTypography: {
            colorPrimary: {
                color: '#000',
                fontWeight: 700,
                fontSize: '18px'
            },
            colorSecondary: {
                color: grey[500],
                fontSize: '18px'
            },
            colorTextPrimary: {
                color: '#000',
                fontSize: '18px'
            }
        },
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29,161,243)'
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: '2px'
                },
            },
            input: {
                backgroundColor: 'rgb(245,248,250)'
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
            }
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb(204,214,221)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& buttom': {
                    padding: 8,
                    marginRight: 20
                }

            }
        }
    }
})