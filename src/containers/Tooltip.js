import React, { Component } from 'react';

class Tooltip extends Component {
    constructor() {
        super();
        this.onPointClick = this.onPointClick.bind(this);
        this.onPointHoverChanged = this.onPointHoverChanged.bind(this);
    }
    componentDidMount() {
        //Highcharts.addEvent(chart, 'load', chart.reflow);
        

    }
    onPointHoverChanged(e) {
        var point = e.target;
        if (!point.isHovered()) {
            point.hideTooltip();
        }
    }
    onPointClick(e) {
        var point = e.target;
        point.showTooltip();
        console.log(point)
    }
    render() {
        return (
            <div>
            {this.onPointHoverChanged}
            {this.onPointClick}
            </div>
        );
    }
}

export default Tooltip;