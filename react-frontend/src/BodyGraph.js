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
            graphs: [1,2,3],
        };

    }

    loadItems() {
        var graphs = this.state.graphs;
        graphs.push('bar');
        graphs.push('bar3d');
        graphs.push('bar');
        this.setState({
            graphs: graphs,
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

        this.state.graphs.map((graph, i) => {
            items.push(
                <ElementGraph />
            );
        });
        return (<div><ElementGraph /><ElementGraph /> <ElementGraph />
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
