import React from 'react'
import "./ImageOnly.css"
function ImageOnly(props) {
    return (
        <div className="image-only">
            <img src={props.img} alt="imageOnly" />
        </div>
    )
}

export default ImageOnly
