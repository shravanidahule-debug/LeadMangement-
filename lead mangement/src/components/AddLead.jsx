import './AddLead.css';

function AddLead({ onAddLead, onCancel, editLead }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const leadData = Object.fromEntries(formData.entries());

    if (editLead) {
      onAddLead({
        ...editLead,
        ...leadData
      });
    } else {
      onAddLead({
        ...leadData,
        id: Date.now(),
        createdDate: new Date().toLocaleDateString()
      });
    }
  };

  return (
    <div className="add-lead-section">

      <div className="form-header">
        <div>
          <h4>{editLead ? 'Edit Lead' : 'Add New Lead'}</h4>
          <p>Enter the details of your potential customer.</p>
        </div>

        <button type="button" className="close-btn" onClick={onCancel}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="row g-3">

          <div className="col-md-6">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={editLead?.name || ''}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              className="form-control"
              defaultValue={editLead?.email || ''}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              pattern="[0-9]{10}"
              defaultValue={editLead?.phone || ''}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Company Name *</label>
            <input
              type="text"
              name="company"
              className="form-control"
              defaultValue={editLead?.company || ''}
              required
            />
          </div>

          <div className="col-md-6">
            <label>Lead Source *</label>
            <select
              name="source"
              className="form-select"
              defaultValue={editLead?.source || ''}
              required
            >
              <option value="">Select source</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Lead Status *</label>
            <select
              name="status"
              className="form-select"
              defaultValue={editLead?.status || 'New'}
              required
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Interested">Interested</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-light" onClick={onCancel}>
            Cancel
          </button>

          <button type="submit" className="btn btn-primary">
            {editLead ? 'Update Lead' : 'Add Lead'}
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddLead;