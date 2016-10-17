import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='newnote'>New Note</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}