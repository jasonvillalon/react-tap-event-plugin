module.exports = function injectTapEventPlugin () {
  var React = require("react");
  React.initializeTouchEvents(true);

  require('react/lib/EventPluginHub').injection.injectEventPluginsByName({
    "ResponderEventPlugin": require('./ResponderEventPlugin'),
    "TapEventPlugin":       require('./TapEventPlugin')
  });
};
