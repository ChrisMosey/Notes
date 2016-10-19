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
            <div class="content pure-u-1 pure-u-md-3-4">
                <div class="posts">
                    <h1 class="content-subhead">Pinned Post</h1>

                    <section class="post">
                        <header class="post-header">
                            
                            <h2 class="post-title">
                                New Note
                            </h2>
                        </header>

                        <div class="post-description">
                            <textarea value={this.props.name} onChange={this.handleChange.bind(this)} />
                            <Note name={this.props.name} />
                        </div>
                    </section>
                </div>
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