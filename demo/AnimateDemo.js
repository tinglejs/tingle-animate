/**
 * Animate Component Demo for tingle
 * @author eternalsky
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Animate = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div>
            <Animate/>
        </div>
    }
};

module.exports = Demo;
