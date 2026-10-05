import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <header className="topbar">
          <h2>PGMate</h2>

          <div className="user">
            🔔 &nbsp; 👤 Resident
          </div>
        </header>

        <Dashboard />
      </div>
    </div>
  );
}

export default App;