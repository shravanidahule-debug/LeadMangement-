import './Landing.css';
function Landing({ onLogin, onRegister }) {
  return (
    <div className="landing-page">

      <nav className="landing-navbar">
        <h2>LeadFlow</h2>

        <div>
          <button onClick={onLogin}>Login</button>
          <button onClick={onRegister}>Get Started</button>
        </div>
      </nav>

      <section className="hero-section">
        <h1>Manage Your Leads.<br />Grow Your Business.</h1>

        <p>
          A simple and smart CRM platform to manage,
          track and convert your potential customers.
        </p>

        <button onClick={onRegister}>
          Get Started
        </button>
      </section>

      <section className="features-section">
        <h2>Why Choose LeadFlow?</h2>

        <div className="features-grid">
          <div>
            <h3>Lead Management</h3>
            <p>Manage all your leads in one place.</p>
          </div>

          <div>
            <h3>Track Progress</h3>
            <p>Track lead status and customer progress.</p>
          </div>

          <div>
            <h3>Dashboard Analytics</h3>
            <p>Monitor your business performance easily.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;