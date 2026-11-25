import { useState } from 'react';
import './LeadTable.css';

function LeadTable({ leads, onDeleteLead, onAddClick, onEditLead }) {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filter === 'All' || lead.status === filter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="leads-section">

      <div className="section-header">
        <div>
          <h4>Recent Leads</h4>
          <p>Manage and track your potential customers.</p>
        </div>

        <button className="btn btn-primary" onClick={onAddClick}>
          <i className="bi bi-plus-lg"></i> Add Lead
        </button>
      </div>

      <div className="lead-controls">

        <div className="search-box">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="form-select status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Interested">Interested</option>
          <option value="Converted">Converted</option>
          <option value="Lost">Lost</option>
        </select>

      </div>

      <div className="table-responsive">

        <table className="table align-middle">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Source</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredLeads.length > 0 ? (

              filteredLeads.map((lead) => (

                <tr key={lead._id}>
                  <td className="lead-name">{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.company}</td>
                  <td>{lead.source}</td>

                  <td>
                    <span className={`status ${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                  </td>

                 <td>
                    <button
                       className="action-btn edit-btn"
                       onClick={() => onEditLead(lead)}
                       title="Edit lead"
                    >
                    <i className="bi bi-pencil-square"></i>
                     </button>

                      <button
                       className="action-btn delete-btn"
                       onClick={() => onDeleteLead(lead._id)}
                       title="Delete lead"
                      >
                    <i className="bi bi-trash"></i>
                    </button>
                 </td>
                </tr>

              ))

            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No leads found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      <p className="lead-count">
        Showing {filteredLeads.length} of {leads.length} leads
      </p>

    </div>
  );
}

export default LeadTable;