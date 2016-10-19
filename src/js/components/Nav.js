import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
    render(){
        return(
            <div class="sidebar pure-u-1 pure-u-md-1-4">
                <div class="header">
                    <h1 class="brand-title">A Sample Blog</h1>
                    <h2 class="brand-tagline">Creating a blog layout using Pure</h2>

                    <nav class="nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <Link class="pure-button" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="pure-button" to="newnote">New Note</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}