import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts';
import Graph from './App';
import ChartZ from './ZingChart';
import ElementGraph from './ElementGraph';
import InfiniteScroll from 'react-infinite-scroller';


class BodyGraph extends React.Component {

    constructor(props) {
        super(props)
        var dataarrays = [];
        var graphaxises = [];
        var names = [];
        console.log(this.props.graph.length);
        for (var x =0;x<this.props.graph.length;x++) {
            var graphdata = this.props.graph[x]['graphdata'];
            var graphaxis = this.props.graph[x]['graphaxis'];
            var name = this.props.graph[x]['graph']['name'];
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
        }









        console.log(dataarrays)
        console.log(graphaxises)
        var numloaded = dataarrays.length;
        this.state = {
            token: 1,
            dataarrays: dataarrays,
            dataaxises: graphaxises,
            namearray: Array(9).fill('name2'),
            names: names,
            numloaded: numloaded,
        };

    }

    loadItems() {
        var graphs = this.state.dataarrays;
        //add new graphs with axiom here
        graphs.push('bar');
        graphs.push('bar');
        graphs.push('bar');
        this.setState({
            dataarrays: graphs,
        });
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
        const loader = <div className="loader">Loading ...</div>;

        var items = [];

        this.state.dataarrays.map((graph, i) => {
            items.push(
                <ElementGraph name={this.state.names[i]} dataarray={graph} dataaxises={this.state.dataaxises[i]} width={400} height={240}/>
            );
        });
        return (<div>
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={true}
                loader={loader}>
                    {items}

            </InfiniteScroll>
            </div>
        );

    }

}

export default BodyGraph;
//                    <GraphDetails data={this.state.dataarray[0]} name={this.state.namearray[0]} onClick={() => this.handleClick(0)} height={this.props.height} width={this.props.width}/>
