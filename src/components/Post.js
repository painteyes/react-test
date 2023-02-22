import React from "react"

function Post(props) {

    return (

        <div className="Post">
            <h4>{props.author}</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            </p>
            <button>
                Like
            </button>
        </div>

    )

}

export default Post