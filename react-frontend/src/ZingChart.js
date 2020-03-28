import React from 'react';
import './App.css';
import ZingChart from 'zingchart-react';
import 'zingchart-react/dist/modules/zingchart-depth.min.js';

class ChartZ extends React.Component {
    constructor(props) {
        super(props);
        if (props.type == 'bar') {
            this.state = {
            config: {
                type: 'bar',
                series: [{
                values: [4,5,3,4,5,3,5,4,11]
                    }]
                }
            };
        }
        if (props.type == 'line') {
            this.state = {
                config: {
                        type: "line",
                        series: [
                        { values: [20,40,25,50,15,45,33,34]},
                        { values: [5,30,21,18,59,50,28,33]},
                        { values: [30,5,18,21,33,41,29,15]}
                    ]
                }
            };
        }
  }
  render() {
    return (
        <ZingChart data={this.state.config} width={400} height={240}/>
    );
  }
}

export default ChartZ;

