import React from 'react';

class ImageCard extends React.Component {
    state = {  }
    render() { 
        return ( <div className="welcomeImageContainer" >
            <img className='welcomeImage' src={this.props.src}   alt={this.props.alt} key={this.props.key}/>
        </div>  );
    }
}
 
export default ImageCard;