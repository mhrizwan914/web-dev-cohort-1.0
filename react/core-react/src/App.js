import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const container = document.getElementById("root");

function Items(props) {
  console.log(props);

  return React.createElement("li", {}, props.name);
}

function App() {
  return React.createElement(
    "div",
    { className: "main" },
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Hello, I'm core react"),
      React.createElement("ul", {}, [
        Items({ name: "Mango" }),
        Items({ name: "Apple" }),
        Items({ name: "Banana" }),
      ]),
    ])
  );
}

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
