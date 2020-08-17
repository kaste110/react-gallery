import React, { Component } from 'react';



class GalleryItem extends Component {
    render() {
        return (
            <div key={this.props.photo.id}>
            <img className='picture' src={this.props.photo.path} alt={this.props.photo.description}/>
            <p>{this.props.photo.description}</p>
            <p>likes: {this.props.photo.likes} </p>
        </div>
        );
    };
};




export default GalleryItem;