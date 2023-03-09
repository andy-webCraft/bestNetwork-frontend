const themeSettings = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
        primary: {
          main: "#3a74b3",
          contrastText: "#e0e0e0",
        },
        secondary: {
          main: "#a64813",
          contrastText: "#e0e0e0",
        },
        background: {
          default: "#303030",
          paper: "#424242",
        },
        text: {
          primary: "#e0e0e0",
          secondary: "#aaaaaa",
        },
        divider: "#9e9e9e",
      }
      : {
        primary: {
          main: "#0277bd",
          contrastText: "#fafafa",
        },
        secondary: {
          main: "#ef6c00",
          contrastText: "#fafafa",
        },
        background: {
          default: "#eeeeee",
          paper: "#fafafa",
        },
        text: {
          primary: "#303030",
          secondary: "#424242",
        },
      }),
  },
  typography: {
    fontFamily: "Rubik",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
          transition: "opacity 0.1s ease-in",
          "&:hover": {
            cursor: "pointer",
            opacity: "0.7",
          },
        },
      },
    },
  },
});

export default themeSettings;
