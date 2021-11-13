import './App.css';
import React, { Component } from 'react';
import Header  from './components/header';
import Counters from './components/counters';

class App extends Component {
  state = { 
        counters : [
            { id :1 , value : 0},
            { id :2 , value : 21},
            { id :3 , value : 9},
            { id :4 , value : 11},
            { id :5 , value : 0},
        ]
     };
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters : counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

  render() { 
    return (
      <React.Fragment>
        <Header totalCounters={this.state.counters.filter( c => c.value > 0).length} />
        <main className='container'>
          <Counters counters={this.state.counters}
                    onReset={this.handleReset}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}/>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
