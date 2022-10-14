/* eslint-disable */
import React from "react";

function Loadingspinner(props) {
    return(
        <div>
            <img src= {process.env.PUBLIC_URL + "/images/LoadingSpinner.gif"} alt=""></img>
            <p>잠시만 기다려주세요.</p>
        </div>
    )
}

export default Loadingspinner;