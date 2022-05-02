"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_propTypes=_interopRequireDefault(require("prop-types"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var styleTypes={style:_propTypes["default"].object,contentStyle:_propTypes["default"].object,inputAreaStyle:_propTypes["default"].object,promptLabelStyle:_propTypes["default"].object,inputStyle:_propTypes["default"].object,inputTextStyle:_propTypes["default"].object},classNameTypes={className:_propTypes["default"].string,contentClassName:_propTypes["default"].string,inputAreaClassName:_propTypes["default"].string,promptLabelClassName:_propTypes["default"].string,inputClassName:_propTypes["default"].string,inputTextClassName:_propTypes["default"].string},optionTypes={autoFocus:_propTypes["default"].bool,dangerMode:_propTypes["default"].bool,styleEchoBack:_propTypes["default"].oneOf(["labelOnly","textOnly","fullInherit","messageInherit"]),locked:_propTypes["default"].bool,readOnly:_propTypes["default"].bool,disabled:_propTypes["default"].bool,disableOnProcess:_propTypes["default"].bool,hidePromptWhenDisabled:_propTypes["default"].bool,ignoreCommandCase:_propTypes["default"].bool,noDefaults:_propTypes["default"].bool,noEchoBack:_propTypes["default"].bool,noHistory:_propTypes["default"].bool,noAutoScroll:_propTypes["default"].bool,noNewlineParsing:_propTypes["default"].bool},labelTypes={welcomeMessage:_propTypes["default"].oneOfType([_propTypes["default"].bool,_propTypes["default"].arrayOf(_propTypes["default"].string),_propTypes["default"].string]),promptLabel:_propTypes["default"].node,errorText:_propTypes["default"].string},commandTypes={commands:_propTypes["default"].object.isRequired,commandCallback:_propTypes["default"].func},messageTypes={messageStyle:_propTypes["default"].object,messageClassName:_propTypes["default"].string},_default=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},styleTypes),classNameTypes),optionTypes),labelTypes),commandTypes),messageTypes);exports["default"]=_default;