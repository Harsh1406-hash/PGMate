function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Welcome to PGMate 👋</h1>

      <p className="subtitle">
        Manage your PG problems easily.
      </p>

      <div className="stats">
        <div className="stat-card">
          <h2>2</h2>
          <p>Active Complaints</p>
        </div>

        <div className="stat-card">
          <h2>1</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Resolved</p>
        </div>
      </div>

      <section className="recent">
        <h2>Recent Complaints</h2>

        <div className="complaint">
          <div>
            <strong>Bathroom Water Leakage</strong>
            <p>Room 204 • Plumbing</p>
          </div>

          <span className="status">
            In Progress
          </span>
        </div>

        <div className="complaint">
          <div>
            <strong>Wi-Fi Not Working</strong>
            <p>Room 204 • Internet</p>
          </div>

          <span className="status">
            Resolved
          </span>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;