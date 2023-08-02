import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// JSX (transpiled before it reaches the Js) - parcel - babel.

// JSX ==> Babel transpiles it to React.createElement ==> ReactElement - JS Object => HtmlElement(render)

const jsxheading = <h1 className="heading">react using JSX</h1>;
const Title = () => (
  <h1 className="title"> hello i am a title</h1>
);

// header Component
// logo
// searchBar
// user icon in right

const HeadingComponent = () => {
  return (
    <div className="container">
      <img className="logo" src="./images/ligo.jpg"></img>
      <div className="serch">
      <input type="text" placeholder="Search here" />
      </div>
      <div className="userIcon">
      <img  src="./images/ligo.jpg"></img>

      </div>

      
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
