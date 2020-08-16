import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
    render() {
        console.log(this.props.galleryList);
        return (
            <p>Hi from Gallery List</p>
            // <div>
            //     {this.props.galleryItems.map((galleryItem) => {
            //         return(
            //             <GalleryItem />
            //         )
            //     })}

            // </div>
        );
    };
};



export default GalleryList;