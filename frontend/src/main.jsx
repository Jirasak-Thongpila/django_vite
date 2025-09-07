import React from "react";
import ReactDOM from "react-dom/client";

export function App() {   // <= มี export แล้ว
  return (
    <div style={{ padding: 24 }}>
      <h1>Vite + Django ✅</h1>
      <p>สวัสดีจากฝั่ง Frontend (JS version)</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
