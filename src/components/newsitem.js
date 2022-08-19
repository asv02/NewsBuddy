import React, { Component } from "react";

export class newsitem extends Component {

    render() {
      let {title,desc,imageurl,newsurl}=this.props
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc.slice(1,80)}..........
          </p>
          <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-primary">
            Go To Detais
          </a>
        </div>
      </div>
    );
  }
}

export default newsitem;
