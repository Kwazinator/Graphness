import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts';
import Graph from './App';
import ChartZ from './ZingChart';
import ElementGraph from './ElementGraph';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

class BodyGraph extends React.Component {

    constructor(props) {
        super(props)
        var dataarrays = [];
        var graphaxises = [];
        var names = [];
        var authors = [];
        var catagories = [];
        var descriptions = [];
        var numloaded = this.props.graph.length;
        for (var x =0;x<this.props.graph.length;x++) {
            var graphdata = this.props.graph[x]['graphdata'];
            var graphaxis = this.props.graph[x]['graphaxis'];
            var name = this.props.graph[x]['graph']['name'];
            var author = this.props.graph[x]['graph']['authorname'];
            var description = this.props.graph[x]['graph']['description'];
            var catagory = this.props.graph[x]['graph']['catagory'];
            var copydataarray = [];
            var maximumdatapoints = 0;
            graphdata.map((graph, z) => {
                if (maximumdatapoints < graph.length) {
                    maximumdatapoints = graph.length;
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
            dataarrays.push(copydataarray);
            graphaxises.push(graphaxis);
            names.push(name);
            authors.push(author);
            descriptions.push(description);
            catagories.push(catagory);
        }
        var hasMore;
        if (numloaded >= 3) {
            hasMore = true;
        }
        else {
            hasMore = false;
        }
        var numloaded = dataarrays.length;
        this.state = {
            token: 1,
            dataarrays: dataarrays,
            dataaxises: graphaxises,
            names: names,
            authors: authors,
            descriptions: descriptions,
            catagories: catagories,
            offset: numloaded,
            hasMore: hasMore,
        };

    }

    loadItems() {
        var offset = this.state.offset;
        axios.get('/getgraph?offset=' + offset + '&num=3').then(res => {
            res = res.data['graphdata'];
            if (res.length == 0) {
                this.setState({
                    hasMore: false,
                });
                return;
            }
            var dataarrays = this.state.dataarrays;
            var graphaxises = this.state.dataaxises;
            var authors = this.state.authors;
            var descriptions = this.state.descriptions;
            var catagories = this.state.catagories;
            var names = this.state.names;
            for (var x =0;x<res.length;x++) {
                var graphdata = res[x]['graphdata'];
                var graphaxis = res[x]['graphaxis'];
                var name = res[x]['graph']['name'];
                var author = res[x]['graph']['authorname'];
                var description = res[x]['graph']['description'];
                var catagory = res[x]['graph']['catagory'];
                var copydataarray = [];
                var maximumdatapoints = 0;
                graphdata.map((graph, z) => {
                    if (maximumdatapoints < graph.length) {
                        maximumdatapoints = graph.length;
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
                dataarrays.push(copydataarray);
                graphaxises.push(graphaxis);
                names.push(name);
                authors.push(author);
                descriptions.push(description);
                catagories.push(catagory);
            }
            this.setState({
                dataarrays: dataarrays,
                dataaxises: graphaxises,
                names: names,
                authors: authors,
                descriptions: descriptions,
                catagories: catagories,
                offset: res.length + this.state.offset,
            });
        });
    }

    render () {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];

        this.state.dataarrays.map((graph, i) => {
            items.push(
                <ElementGraph
                    name={this.state.names[i]}
                    dataarray={graph}
                    dataaxises={this.state.dataaxises[i]}
                    catagory={this.state.catagories[i]}
                    author={this.state.authors[i]}
                    description={this.state.descriptions[i]}
                    width={400}
                    height={240}/>
            );
        });
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMore}
                loader={loader}>
                    {items}

            </InfiniteScroll>
        );

    }

}

export default BodyGraph;
//                    <GraphDetails data={this.state.dataarray[0]} name={this.state.namearray[0]} onClick={() => this.handleClick(0)} height={this.props.height} width={this.props.width}/>
