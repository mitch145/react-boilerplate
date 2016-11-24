'use strict';
/*I've also put this file inside node_modules/material-ui/styles/baseThemes*/

var _colors = require('../colors');

var _colorManipulator = require('../../utils/colorManipulator');

var _spacing = require('../spacing');

var _spacing2 = _interopRequireDefault(_spacing);

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const colours = {
	primaryOrange: "#FFA417",
	accentOrange: "#D38E50",
	offWhite: "#F4F4F4",
	lightGrey: "#E2E2E2",
	primaryDark: "#272C33",
	accentNavy: "#2C3E50",
	white: "#FFFFFF",
	black: "#000000"
}

exports.default = {
	spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colours.primaryOrange,
    primary2Color: colours.primaryDark,
    primary3Color: colours.offWhite,
    accent1Color: colours.accentOrange,
    accent2Color: colours.accentNavy,
    accent3Color: colours.lightGrey,

    textColor: colours.black,
    secondaryTextColor: colours.primaryDark,
    alternateTextColor: colours.white,
    canvasColor: colours.white,
    borderColor: colours.lightGrey,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.cyan500,
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack
  }
};

/**
* NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
*/
