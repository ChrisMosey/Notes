import React from 'react';

export default class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>New Note</li>
                    <li>view all Notes</li>
                </ul>
            </nav>
        );
    }
}