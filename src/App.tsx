import { GlobalStyles } from "@mui/material";
import React from "react";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          "*": {
            boxSizing: "border-box",
            fontFamily: "Manrope, sans-serif",
          },
          "#root, body": {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
