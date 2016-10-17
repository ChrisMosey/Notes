import React from "react";

export default class Note extends React.Component{
    render(){
        function createMarkup(markup) { return {__html: markup}; };
        return (<div dangerouslySetInnerHTML={createMarkup(this.props.name)}></div>);
    }
}