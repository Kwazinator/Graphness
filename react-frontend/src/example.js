import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts';
import Graph from './App';
import ChartZ from './ZingChart';
import ElementGraph from './ElementGraph';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';



class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            string: "testing",
            text: this.props.text,
            integer: 3,
        };
    }


    handleClick() {
        this.setState({
                integer: this.state.integer + 1,
            });
    }


    render () {
        return (
        <div onClick={() => this.handleClick()}>
            {this.props.text}<h1>{this.state.integer}</h1>
        </div>
        );
    }


}


export default Example;