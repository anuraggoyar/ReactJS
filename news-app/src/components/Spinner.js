import loading from './loading.gif';
import React, { Component } from 'react';

class Spinner extends Component {
    render() { 
        return ( 
            <div className="text-center" style = {{margin : '10px auto'}}>
                <img className="my -3" src={loading} alt="loading"/>
            </div>
         );
    }
}
 
export default Spinner;