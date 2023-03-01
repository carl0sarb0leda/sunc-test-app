import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

//React 18 introduces createRoot to enable concurrent mode
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
