import React from "react";
import { AppLayout } from "./components/app/app-layout";
import { HomePage } from "./components/pages/home";

function App() {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
}

export default App;
