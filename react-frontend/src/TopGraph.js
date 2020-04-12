import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts'
import Graph from './App';

class TopGraph extends React.Component {

    constructor(props) {
        super(props)
        var graphdata = this.props.graph['graphdata'];
        var graphaxis = this.props.graph['graphaxis'];
        var copydataarray = [];
        var maximumdatapoints = 0;
        graphdata.map((graph, i) => {
            if (maximumdatapoints < graph.length) {
                maximumdatapoints = graph.length
            }
        });

        for (var i=0;i<maximumdatapoints;i++) {
            var thedata = {name: i};
            for (var j=0;j<graphaxis.length;j++) {
                if (i < graphdata[j].length ) {
                    thedata[graphaxis[j]['name']] = parseInt(graphdata[j][i]);
                }
            }
            copydataarray.push(thedata);
        }

        this.state = {
            token: 1,
            name: this.props.graph['graph']['name'],
            dataarray: copydataarray,
            dataaxises: graphaxis,
            description: this.props.graph['graph']['description'],
            author: this.props.graph['graph']['authorname'],
            catagory: this.props.graph['graph']['catagory'],
        };

    }

    render () {
        return (
    <div class="container">
      <div class="posts-wrapper cc-top-post">
        <div class="w-dyn-list">
          <div class="w-dyn-items">
            <div class="top-post-item w-dyn-item" id="top_post">
              <a data-w-id="f584d68a-6baf-e0a3-5c39-421b1f2647d2" href="#" class="top-post-image w-inline-block">
                <Graph data={this.state.dataarray} dataaxises={this.state.dataaxises} width={600} height={360}/>
              </a>
              <div class="top-post-text">
	            <a href="#" class="category-link">{this.state.catagory}</a>
	            <div class="top-post-text">
		          <a href="#" class="category-link">
		          </a>
		          <a href="#" class="top-post-link-block w-inline-block">
			        <h2 class="h2">{this.state.name}</h2>
		          </a>
		          <div class="post-short-text">{this.state.description}</div>
		          <div class="text-block-2">
		          </div>
                  <div class="post-author-text">
		            <div class="post-author cc-top-margin">By</div>
                    <a href="#" class="post-author">{this.state.author}</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );

    }

}

export default TopGraph;
//                    <GraphDetails data={this.state.dataarray[0]} name={this.state.namearray[0]} onClick={() => this.handleClick(0)} height={this.props.height} width={this.props.width}/>
