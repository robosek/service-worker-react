import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'

class ImageButton extends Component{

    handleClick() {
        console.log("ImageButton has been clicked!");
    }

    render(){
        return(<Button bsStyle="primary" id={this.props.uniqueId}  onClick={this.handleClick}>{this.props.titleText} </Button>);
    }
}

export default ImageButton