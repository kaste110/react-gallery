import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


class GalleryList extends Component {
    render() {
        console.log(this.props.listOfPhotos);
        return (
            
            <>
                {this.props.listOfPhotos.map((photo) => {
                    return(
                       
                        <GalleryItem key={photo.id} photo={photo} likePhoto={this.props.likePhoto}/>
                    )
                })}

            </>
        );
    };
};



export default GalleryList;