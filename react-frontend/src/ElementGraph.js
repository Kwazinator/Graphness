import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts'
import Graph from './App';
import ChartZ from './ZingChart'

class ElementGraph extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div class="_3-collection-item w-dyn-item w-col w-col-3">
                <a href="#" class="posts-image w-inline-block">
                    <Graph data={this.props.dataarray} dataaxises={this.props.dataaxises} width={this.props.width} height={this.props.height}/>
                </a>
                <div class="post-info-text">
                    <a href="#" class="category-link">{this.props.catagory}</a>
                    <br></br>
                    <a href="#" class="post-title w-inline-block">
                        <h3 class="h3">{this.props.name}</h3>
                    </a>
                    <div>{this.props.description}</div>
                    <div class="post-author-text cc-small-thumbnail">
                        <div class="post-author cc-top-margin">By</div>
                        <a href="#" class="post-author">{this.props.author}</a>
                    </div>
                </div>
            </div>
        );

    }

}

export default ElementGraph;