import React from "react";
import data from "./lottie.json";
import Lottie from "lottie-react";

export default function NotFound() {

    return (
        <div style={{
            color: "white",
            fontSize: 200,
            width: 800,
            height: 800
        }}>
            <Lottie loop animationData={data} />;
        </div>
    )
}