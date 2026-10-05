function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="Sidebar-logo">
        🏠 PGMate
      </div>

      <nav>
        <a href="#">🏠 Dashboard</a>
        <a href="#">🛠️ Complaints</a>
        <a href="#">🏠 My Room</a>
        <a href="#">📢 Notices</a>
        <a href="#">⚙️ Settings</a>
      </nav>

      <div className="logout">
        🚪 Logout
      </div>
    </aside>
  );
}

export default Sidebar;