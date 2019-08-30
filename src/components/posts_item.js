import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return(
            <div>{this.props.match.params.id}</div>
        )
    }
}

export default PostItem;