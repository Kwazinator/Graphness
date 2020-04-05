import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts'
import Graph from './App';
import ChartZ from './ZingChart'

class ElementGraph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: 1,
            dataarray: Array(9).fill(
                [
                    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
                    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
                    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290,},
                    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
                    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
                    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
                    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
                 ]),
            namearray: Array(9).fill('name2'),
        };

    }

    handleClick(i) {
        const dataarray = this.state.dataarray;
        dataarray[i] =
                        [
                    {name: 'Page B', uv: 4000, pv: 2400, amt: 2400,},
                    {name: 'Page C', uv: 3000, pv: 1398, amt: 2210,},
                    {name: 'Page D', uv: 2000, pv: 9800, amt: 2290,},
                    {name: 'Page E', uv: 2780, pv: 3908, amt: 2000,},
                    {name: 'Page F', uv: 1890, pv: 4800, amt: 2181,},
                    {name: 'Page G', uv: 2390, pv: 3800, amt: 2500,},
                    {name: 'Page H', uv: 3490, pv: 4300, amt: 2100,},
                 ];
        this.setState({dataarray: dataarray, namearray: Array(9).fill('name1'),});
    }

    render () {
        return (
            <div class="_3-collection-item w-dyn-item w-col w-col-3">
                <a href="#" class="posts-image w-inline-block">
                    <ChartZ type='bar'/>
                </a>
                <div class="post-info-text">
                    <a href="#" class="category-link">catagory</a>
                    <br></br>
                    <a href="#" class="post-title w-inline-block">
                        <h3 class="h3">ReChart Line</h3>
                    </a>
                    <div>Description</div>
                    <div class="post-author-text cc-small-thumbnail">
                        <div class="post-author cc-top-margin">By</div>
                        <a href="#" class="post-author">author</a>
                    </div>
                </div>
            </div>
        );

    }

}

export default ElementGraph;