import * as colors from 'material-ui/styles/colors'

export const muiStyle = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.pink500,
    primary2Color: colors.pink700,
    primary3Color: colors.pink400,
    accent1Color: colors.pinkA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: colors.fullBlack,
  },
}

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBjQGwxtw1BQGwN31SNMAW0ss63wc25FoM',
  authDomain: 'rtisvko.firebaseapp.com',
  databaseURL: 'https://rtisvko.firebaseio.com',
  storageBucket: 'rtisvko.appspot.com'
}
