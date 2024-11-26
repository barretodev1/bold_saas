"use client"
import { Ripple } from "react-css-spinners"

function Loading() {
    
    return (
        <div style={{}}>
            <Ripple 
            color="rgba(147,211,106,1)"
            size={100}
            thickness={5}
            />
        </div>
    )
}

export default Loading();