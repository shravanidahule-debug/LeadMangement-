import "./Sidebar.css";

function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h3 className="brand">
        <i className="bi bi-layers-fill"></i> LeadFlow
      </h3>

      <p className="menu-heading">MENU</p>

      <ul className="nav-menu">
        <li className="active">
          <i className="bi bi-grid"></i> Dashboard
        </li>

        <li>
          <i className="bi bi-people"></i> All Leads
        </li>

        <li>
          <i className="bi bi-person-plus"></i> Add Lead
        </li>

        <li>
          <i className="bi bi-graph-up"></i> Reports
        </li>
      </ul>

      <div className="sidebar-bottom" onClick={onLogout}>
        <i className="bi bi-box-arrow-right"></i> Logout
      </div>
    </div>
  );
}

export default Sidebar;