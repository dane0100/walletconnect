import React from "react";
import { createRoot } from "react-dom/client";
const Options = () => <div style={{padding:"10px"}}><h3>Settings</h3><p>Configure API endpoint, sharing mode, etc.</p></div>;
createRoot(document.getElementById("root")!).render(<Options />);
