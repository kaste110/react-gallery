import React, { Component } from 'react';



class GalleryItem extends Component {

state = {
    isPictureShowing : true
};

flipPicture = () => {
    this.setState({
        isPictureShowing : !this.state.isPictureShowing
    })
}

//add toggle picture function

    render() {
        return (
            <>
            <div onClick={this.flipPicture}>
            {this.state.isPictureShowing ? <img className='picture' src={this.props.photo.path} alt={this.props.photo.description}/>
             : <p>{this.props.photo.description}</p>}
             </div>
            <div key={this.props.photo.id}>
            {/* <img className='picture' src={this.props.photo.path} alt={this.props.photo.description}/> */}
            {/* <p>{this.props.photo.description}</p> */}
            <p>likes: {this.props.photo.likes} </p>
            <button onClick={(event) => this.props.likePhoto(this.props.photo.id)}>Like!</button>
        </div>
        </>
        
        );
    };
};




export default GalleryItem;