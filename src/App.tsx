import React from "react";
import AppProvider from "./providers/app";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

export default App;
