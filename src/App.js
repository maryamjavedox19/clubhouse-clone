import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification"

function App() {
  return (
    <BrowserRouter>
      {/* people will only be able to go to path inside this */}
      <Routes>
        <Route>
          exact path=
          {[
            "/",
            "/invite",
            "/get_username",
            "/code_confirm",
            "/allow_notification",
          ]}
        </Route>
      </Routes>

      <PlanLayout>

        <Routes>
          <Route exact path="/" Component={Welcome} />
          <Route exact path="/invite" Component={PhoneConfirmation} />
          <Route exact path="/code-confirm" Component={CodeConfirm} />
          <Route exact path="/allow-notification" Component={AllowNotification} />
        </Routes>

      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
