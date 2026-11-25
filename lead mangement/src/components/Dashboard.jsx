import { useState, useEffect } from 'react';
import './Dashboard.css';
import API from '../api';

import LeadTable from './LeadTable';
import AddLead from './AddLead';

function Dashboard() {

  const [showForm, setShowForm] = useState(false);
  const [editLead, setEditLead] = useState(null);

  const [leads, setLeads] = useState([]);
   
   
  useEffect(() => {
    API.get('/leads')
        .then((response) => {
            setLeads(response.data);
        })
        .catch((error) => {
            console.log('Error fetching leads:', error);
        });
    }, []);

  const stats = [
    {
      title: 'Total Leads',
      value: leads.length,
      icon: 'bi-people',
      color: 'purple'
    },
    {
      title: 'New Leads',
      value: leads.filter(lead => lead.status === 'New').length,
      icon: 'bi-person-plus',
      color: 'blue'
    },
    {
      title: 'Contacted',
      value: leads.filter(lead => lead.status === 'Contacted').length,
      icon: 'bi-telephone',
      color: 'orange'
    },
    {
      title: 'Converted',
      value: leads.filter(lead => lead.status === 'Converted').length,
      icon: 'bi-check-circle',
      color: 'green'
    }
  ];

  const handleSaveLead = async (leadData) => {
    try {
        if (editLead) {
            const response = await API.put(
                `/leads/${editLead._id}`,
                leadData
            );

            setLeads(prev =>
                prev.map(lead =>
                    lead._id === editLead._id ? response.data : lead
                )
            );
        } else {
            const response = await API.post('/leads', leadData);

            setLeads(prev => [...prev, response.data]);
        }

        setEditLead(null);
        setShowForm(false);

    } catch (error) {
        console.log('Error saving lead:', error);
    }
};
  const handleDeleteLead = async (id) => {
    try {
        await API.delete(`/leads/${id}`);

        setLeads(prevLeads =>
            prevLeads.filter(lead => lead._id !== id)
        );

    } catch (error) {
    console.log('Delete Error:', error);
    console.log('Server Response:', error.response?.data);
}
};
  const handleEditLead = (lead) => {
  setEditLead(lead);
  setShowForm(true);
};

  return (
    <div className="dashboard">

      <div className="topbar">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back! Here's your lead overview.</p>
        </div>

        <div className="profile">
          <i className="bi bi-person-circle"></i>
          <span>Admin</span>
        </div>
      </div>

      {/* Statistics Cards */}

      <div className="row g-4 mt-2">

        {stats.map((item, index) => (
          <div className="col-xl-3 col-md-6" key={index}>

            <div className="stat-card">

              <div>
                <p>{item.title}</p>
                <h3>{item.value}</h3>
              </div>

              <div className={`stat-icon ${item.color}`}>
                <i className={`bi ${item.icon}`}></i>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Add Lead Button */}

      <div className="add-button-container">
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          <i className="bi bi-plus-lg"></i> Add New Lead
        </button>
      </div>

      {/* Add Lead Form */}

     {showForm && (
       <AddLead
        onAddLead={handleSaveLead}
        onCancel={() => {
        setShowForm(false);
        setEditLead(null);
      }}
        editLead={editLead}
      />
     )}

      {/* Lead Table */}

      <LeadTable
        leads={leads}
        onDeleteLead={handleDeleteLead}
        onAddClick={() => {
          setEditLead(null);
          setShowForm(true);
        }}
        onEditLead={handleEditLead}
       />

    </div>
  );
}

export default Dashboard;