import React from 'react'
import smiley from './images/smiley_icon.png'
import './index.css'

const User = function(props){
    return(
        <div>
            <div className="card">
                <a>
                    <img src ={props.image} alt="smiley emoji"/>
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    Today at <span className="date">{props.date}</span>
                </div>
                <div className="comment">
                   {props.comments}
                </div>
            </div>
        </div>
    )
}
export default User;