/**
 * Animate Component Demo for tingle
 * @author eternalsky
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./AnimateDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));
