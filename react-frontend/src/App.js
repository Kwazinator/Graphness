import React from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis,Tooltip,Legend,CartesianGrid} from 'recharts'

class GraphDetails extends React.Component {

    render () {
        var items = [];
        this.props.dataaxises.map((dataaxis, i) => {
            items.push(
                <Line type="monotone" dataKey={dataaxis['name']} />
            );
        });

        return (<div>{this.props.name}
        <LineChart
        width={this.props.width}
        height={this.props.height}
        data={this.props.dataarray}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        onClick={this.props.onClick}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {items}
        </LineChart>
        </div>
        );
    }
}


class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            token: 1,
            dataarray: this.props.data,
            dataaxises: this.props.dataaxises,
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
            <div className="graph-x">
                <div className="graph-graphDetails">
                    <GraphDetails dataarray={this.state.dataarray} dataaxises={this.state.dataaxises} name={this.state.namearray[0]} onClick={() => this.handleClick(0)} height={this.props.height} width={this.props.width}/>
                </div>
            </div>
        );

    }

}

export default Graph;
