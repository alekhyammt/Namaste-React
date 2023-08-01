import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the Js) - parcel - babel.

// JSX ==> Babel transpiles it to React.createElement ==> ReactElement - JS Object => HtmlElement(render)

const jsxheading= (
  <h1 className="heading">react using JSX</h1>
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading)