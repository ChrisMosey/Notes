import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Note from '../components/Note';

class NewNote extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    }
    handleChange(e){
        const note = e.target.value;
        this.props.dispatch({type: 'NAME_UPDATED', name: note});
    }
    render(){
        return(
            <div>
                <h1>new note</h1>
                <Note name={this.props.name} />
                <textarea value={this.props.name} onChange={this.handleChange.bind(this)} />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.get('name')
    }
}

export default connect(mapStateToProps)(NewNote)