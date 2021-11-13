import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value,
    //     // tags : ['tag1', 'tag2', 'tag3'],
    // };
    style = {
        fontSize: '24px',
        fontWeight: "bold",
    };
    // handleIncrement = () => {
    //     this.setState({value : this.props.counter.value + 1})
    // }
    render() { 
        return (
            <div>
                <span style={this.style} className={this.getCounterClass()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
               
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
        );
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'ZERO' : value; 
    }
    getCounterClass() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    
}
 
export default Counter;