import { VictoryBar, VictoryChart } from 'victory';
import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts';
import Graph from './App';
import ChartZ from './ZingChart';
import ElementGraph from './ElementGraph';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';



class Victory extends React.Component {

    render () {
        return (
            <div width={this.props.width} height={this.props.height}>
                <VictoryBar width={this.props.width} height={this.props.height}/>
            </div>
            );
    }

}


export default Victory;