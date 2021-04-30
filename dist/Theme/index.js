import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
var useStyles = makeStyles({
  container: {
    fontFamily: '"Inter", sans-serif'
  }
});
var base = {
  // palette: paletteLight, -- this is merged in based on theme selection
  // shadows,
  // typography,
  mixins: {
    toolbar: {
      minHeight: 24,
      "@media (min-width:600px)": {
        minHeight: 24
      },
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 24
      }
    }
  },
  // Set default props for some components to make a dense layout
  props: {
    MuiButton: {
      size: "small"
    },
    MuiFilledInput: {
      margin: "dense"
    },
    MuiFormControl: {
      margin: "dense"
    },
    MuiFormHelperText: {
      margin: "dense"
    },
    MuiIconButton: {
      size: "small"
    },
    MuiInputBase: {
      margin: "dense"
    },
    MuiInputLabel: {
      margin: "dense"
    },
    MuiListItem: {
      dense: true
    },
    MuiOutlinedInput: {
      margin: "dense"
    },
    MuiFab: {
      size: "small"
    },
    MuiTable: {
      size: "small"
    },
    MuiTextField: {
      margin: "dense"
    } // MuiToolbar: {
    //   variant: 'dense',
    // },

  },
  overrides: {
    // MuiButton: {
    //   sizeSmall: {
    //     margin: 1,
    //     padding: 1
    //   }
    // },
    MuiToggleButton: {
      sizeSmall: {
        margin: 1,
        // marginLeft: 1,
        // marginRight: 1,
        padding: 1
      }
    }
  }
};
export var paletteDark = {
  type: "dark",
  primary: {
    main: "#1e88e5",
    light: "rgb(166, 212, 250)",
    dark: "rgb(100, 141, 174)" // contrastText: 'rgba(0, 0, 0, 0.87)'

  },
  secondary: {
    main: "#00b0ff"
  },
  appBar: "#111"
};
export var paletteLight = {
  type: "light",
  primary: {
    light: "#7986cb",
    // main: '#3f51b5',
    main: "#0d47a1",
    dark: "#303f9f",
    contrastText: "#fff"
  },
  secondary: {
    light: "#ff4081",
    main: "#f50057",
    dark: "#c51162",
    contrastText: "#fff"
  },
  appBar: "#0d47a1" // Same as primary
  // action: {
  //   active: '#fff',
  //   hover: 'rgba(255, 255, 255, 0.08)',
  //   hoverOpacity: 0.08,
  //   selected: 'rgba(255, 255, 255, 0.16)',
  //   selectedOpacity: 0.16,
  //   disabled: 'rgba(255, 255, 255, 0.3)',
  //   disabledBackground: 'rgba(255, 255, 255, 0.12)',
  //   disabledOpacity: 0.38,
  //   focus: 'rgba(255, 255, 255, 0.12)',
  //   focusOpacity: 0.12,
  //   activatedOpacity: 0.24
  // },
  // text: {
  //   primary: '#fff',
  //   secondary: 'rgba(255, 255, 255, 0.7)',
  //   disabled: 'rgba(255, 255, 255, 0.5)',
  //   hint: 'rgba(255, 255, 255, 0.5)',
  //   icon: 'rgba(255, 255, 255, 0.5)'
  // },
  // tonalOffset: 0.2,
  // contrastThreshold: 3
  // background: {
  //   dark: '#F4F6F8',
  //   default: colors.common.white,
  //   paper: colors.common.white
  // }
  // primary: {
  //   main: colors.indigo[500]
  // },
  // secondary: {
  //   main: colors.indigo[500]
  // },
  // text: {
  //   primary: colors.blueGrey[900],
  //   secondary: colors.blueGrey[600]
  // }

};
var palette = paletteDark; // const palette = paletteLight

var customTheme = _objectSpread({}, base, {
  palette: palette
});

var theme = createMuiTheme(customTheme);
console.log("Created", theme); // const theme = createMuiTheme({
//   typography: {
//     fontFamily: '"Inter", "Roboto", sans-serif',
//   },
//   overrides: {
//     MuiButton: {
//       root: {
//         textTransform: "none",
//       },
//     },
//   },
// })

export var Theme = function Theme(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, children));
};
export default Theme;