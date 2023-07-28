{
  /* <div>
    <h1></h1>
    <h2></h2>
    <h3></h3>
    <div>
    <h1/></div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "h1tag" }, "i am h1 tag here"),
    React.createElement("h2", { id: "h2tag" }, "i am h2 tag here"),
    React.createElement("h3", { id: "h3tag" }, "i am h3 tag here"),
  ],
  React.createElement("div", { id: "childDiv" }, [
    React.createElement("h1", { id: "h1tag" }, "i am h1 tag here"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
