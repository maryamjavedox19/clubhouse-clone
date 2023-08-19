import './App.css';
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import { Component } from "react";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path="/" Component={Welcome} />
          <Route exact path="/invite" Component={PhoneConfirmation} />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
