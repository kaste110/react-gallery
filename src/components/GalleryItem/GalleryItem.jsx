import React, { Component } from 'react';



class GalleryItem extends Component {
    render() {
        return (
            <p>{this.props.photo}</p>
        );
    };
};




export default GalleryItem;