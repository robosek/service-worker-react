import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image'

class CustomImage extends Component{
    render(){
        return(<Image id={this.props.uniqueId} src={this.props.imageUrl} rounded/>);
    }
}

export default CustomImage