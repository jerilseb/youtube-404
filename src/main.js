import React from "react";
import ReactDOM from "react-dom";
import NotFound from "./NotFound.jsx";
import "./main.scss";

console.log("Hello from extension");

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    await sleep(1000);
    const element = document.querySelector('ytd-browse[page-subtype="home"] #primary.ytd-two-column-browse-results-renderer');
    
    if(element) {
        const newEl = document.createElement("div");
        newEl.setAttribute("class", "react-root");
    
        element.insertAdjacentElement('beforebegin', newEl);
        ReactDOM.render(<NotFound />, newEl);
    }
}

main();