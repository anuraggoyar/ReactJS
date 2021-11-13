import React, { Component } from 'react';

//Stateless functional component
const Header = (props) => {
    return (  
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">CounterApp 
                    <span className="badge badge-pill badge-secondary m-1">{props.totalCounters}</span>
                </span>
            </nav>
    );
};
 
export default Header;