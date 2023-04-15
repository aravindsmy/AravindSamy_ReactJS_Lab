import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ExpenseTracker from "./Component/ExpenseTracker";
import ShowData from "./Component/ShowList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<ExpenseTracker onTrue={undefined} onClose={undefined} />} />
          <Route path="/" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;