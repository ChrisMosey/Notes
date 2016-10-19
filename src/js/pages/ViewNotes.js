import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getNotes} from '../actions/noteActions';

@connect((store) => {
    return{
        notes: store.notes || []
    }
})
export default class ViewNotes extends React.Component{
    render(){
        this.props.dispatch(getNotes());
        const {notes} = this.props;
        console.log(notes);
        const mappedNotes = notes.map(x => <li><Link to="viewNote/{x._id}">{x.title}</Link></li>)
        return(
            <div class="content pure-u-1 pure-u-md-3-4">
                <div class="posts">
                   <h1>view notes</h1>
                   <ul>{mappedNotes}</ul>
                </div>
            </div>
        );
    }
}