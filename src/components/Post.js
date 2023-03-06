import React from "react"

function Post(props) {
    return (
        <div style={{marginBottom:'80px'}}>
            <div className="Post">
                <h5 style={{marginBottom:'30px'}}>{props.author}</h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
                </p> 
            </div>
            <div className="Actions">
                <button className="btn btn-primary">
                    Like
                </button>
            </div>
        </div>
    )

}

export default Post