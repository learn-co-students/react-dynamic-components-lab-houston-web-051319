import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    // let opaque = this.props.opacity
   
    // if (opaque > .2){
    //   opaque -= .1;
    //   <ColorBox opacity= {opaque} />
    // }
    return (
      
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= .2 ? <ColorBox opacity={this.props.opacity - .1}/>: null}
      </div>
    )
  }
  
}
