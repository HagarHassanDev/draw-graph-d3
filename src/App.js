import React, { Component, Children } from "react";
import { Graph } from "react-d3-graph";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGraph: false,
            cname2: '',
            cname1: '',
            btnValue : 'Hide Graph'
          }
    }

    data = {
        nodes: [

        ],
        links: [

        ],
    }


    myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    // graph event callbacks
    onClickGraph = function() {
        window.alert(`Clicked the graph background`);
    };

    onClickNode = function(nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };

    onDoubleClickNode = function(nodeId) {
        window.alert(`Double clicked node ${nodeId}`);
    };

    onRightClickNode = function(event, nodeId) {
        window.alert(`Right clicked node ${nodeId}`);
    };

    onMouseOverNode = function(nodeId) {
        window.alert(`Mouse over node ${nodeId}`);
    };

    onMouseOutNode = function(nodeId) {
        window.alert(`Mouse out node ${nodeId}`);
    };

    onClickLink = function(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    onRightClickLink = function(event, source, target) {
        window.alert(`Right clicked link between ${source} and ${target}`);
    };

    onMouseOverLink = function(source, target) {
        window.alert(`Mouse over in link between ${source} and ${target}`);
    };

    onMouseOutLink = function(source, target) {
        window.alert(`Mouse out link between ${source} and ${target}`);
    };

    onNodePositionChange = function(nodeId, x, y) {
        window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, );

    }


    render() {
        var { showGraph, cname1, cname2  , btnValue} = this.state;
        return ( <div className = "p-5" >
            <h5 >
            Hello there,
            let's play wih d3 </ h5 >

            <hr />
            <input className = "form-control m-2"
            placeholder = "Concept name"
            type = "text"
            name = "cname1"
            value = { cname1 }
            onChange = { this.changeHandler }
            />

            <input className = "form-control m-2"
            placeholder = "Concept name"
            type = "text"
            name = "cname2"
            value = { cname2 }
            onChange = { this.changeHandler }
            />

<input className = "btn btn-primary m-2"
            placeholder = "Concept id"
            type = "button"
            value = {btnValue}
            onClick = {
                (e) => {
                    this.setState(
                        (prevState) => ({ showGraph: !prevState.showGraph })
                      
                        ); 
                      showGraph?this.setState({btnValue: "Hide Graph"}):this.setState({btnValue: "Show Graph"}); 
                      }
      
            }
            />




            <input className = "btn btn-success m-2"
            placeholder = "Concept id"
            type = "button"
            value = "Add"
            onClick = {
                () => {
                    this.setState(
                        (prevState) => ({ showGraph: true })
                    )
                    this.data.nodes.push({ id: cname1 })
                    this.data.nodes.push({ id: cname2 })
                    this.data.links.push({ source: cname1, target: cname2 }, )
                  }
            }
            />


            {
                showGraph ?
                    <Graph
                id = "graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data = { this.data }
                config = { this.myConfig }
                onClickNode = { this.onClickNode }
                // onRightClickNode = { this.onRightClickNode }
                // onClickGraph = { this.onClickGraph }
                // onClickLink = { this.onClickLink }
                // onRightClickLink = { this.onRightClickLink }
                    // onMouseOverNode={this.onMouseOverNode}
                    // onMouseOutNode={this.onMouseOutNode}
                    // onMouseOverLink={this.onMouseOverLink}
                    // onMouseOutLink={this.onMouseOutLink}
                // onNodePositionChange = { this.onNodePositionChange }
                />: null
            }




            </div>


        )
    }
}
export default App;