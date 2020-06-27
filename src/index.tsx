import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.hydrate(
    <Hello compiler="TypeScript" framework="Express" library="React" />,
    document.getElementById("example")
);