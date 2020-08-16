import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.galleryIems.map((galleryItem) => {
                    return(
                        <GalleryItem />
                    )
                })}

            </div>
        );
    };
};



export default GalleryList;