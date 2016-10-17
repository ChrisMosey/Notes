import React from 'react';

import Nav from './Nav';

export default class Layout extends React.Component {
    changeTitle(title){
        this.setState({title});
    }
    render(){
        return(
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}
