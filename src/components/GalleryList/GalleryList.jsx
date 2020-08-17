import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
    render() {
        console.log(this.props.listOfPhotos);
        return (
            
            <>
                {this.props.listOfPhotos.map((photo) => {
                    return(
                        <GalleryItem key={photo.id} photo={photo} />
                    )
                })}

            </>
        );
    };
};



export default GalleryList;