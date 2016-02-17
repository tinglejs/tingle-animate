/**
 * Animate Component for tingle
 * @author eternalsky
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const RcAnimate = require('rc-animate');

class Animate extends RcAnimate {
    constructor(props) {
        super(props);
    }
}

Animate.displayName = 'Animate';

module.exports = Animate;
