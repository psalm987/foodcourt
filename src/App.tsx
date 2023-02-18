import { GlobalStyles } from "@mui/material";
import React from "react";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
