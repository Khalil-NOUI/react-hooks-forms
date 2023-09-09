import React from "react";

function Display(props) {

    const userFirst = props.firstName
    const userLast = props.lastName

return (
    <h3 style={{textAlign:"center", padding:"10px", border:"solid #AFF069", margin:"55px", color:"firebrick"}} > 
    user's First Name: {userFirst} <br></br>
    user's Last Name : {userLast}
    </h3>
)
}


export default Display;