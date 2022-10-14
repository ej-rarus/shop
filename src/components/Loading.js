/* eslint-disable */
import React from "react";

function Loadingspinner(props) {
    return(
        props.loadingmode == true ?
            (   
                <div>
                    <img src= {process.env.PUBLIC_URL + "/images/LoadingSpinner.gif"} alt=""></img>
                    <p>잠시만 기다려주세요.</p>
                </div>
            ) : null
        
    )
}

export default Loadingspinner;