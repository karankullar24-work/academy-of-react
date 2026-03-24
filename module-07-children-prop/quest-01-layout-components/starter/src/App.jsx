import { useState } from "react";
import "./App.css";

// TODO: Create a Card component that uses children
// - Accept a "variant" prop with default value "default"
// - Wrap children in a div with className `card card-${variant}`
function Card({ children, variant = "default" }) {
  return <div className = 'card card-${variant}'> {children}</div>;
}

// TODO: Create a Section component
// - Accept "title" and "children" props
// - Render the title in an h2, then render children
function Section({ title, children }) {
  return (
    <section className='section'>
      <h2 className = 'section-title'>{title}</h2>
      {children}
    </section>
  );
}

// TODO: Create a Modal component
// - Accept props: isOpen, onClose, title, children
// - Return null if not open
// - Render an overlay, modal box with title and children
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

// TODO: Create a Layout component with multiple slots
// - Accept props: header, sidebar, children
// - Render header in a <header> tag
// - Render sidebar in an <aside> tag
// - Render children in a <main> tag
function Layout({ header, sidebar, children }) {
    return (
    <div className="layout">
      <header className="layout-header">{header}</header>
      <div className="layout-body">
        <aside className="layout-sidebar">{sidebar}</aside>
        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* TODO: Use Layout component with header, sidebar, and main content */}

      {/* Example of what you should build:
      
      <Layout
        header={<h1>Academy Dashboard</h1>}
        sidebar={<nav>Menu items...</nav>}
      >
        Main content here using children
      </Layout>
      
      */}

      {/* TODO: Inside the Layout, create Sections with Cards */}

      {/* TODO: Add a Modal that opens with a button */}
    <Layout
      header={
        <div className="nav">
          <span className="logo">Wizard Academy</span>
          <button onClick={() => setShowModal(true)}>Cast Spell</button>
        </div>
      }
      sidebar={
        <nav className="sidebar-nav">
          <a href="#">Dashboard</a>
          <a href="#">Spells</a>
          <a href="#">Students</a>
        </nav>
      }
    >
      <Section title="Welcome Back!">
        <p>Your magical journey continues today.</p>
      </Section>

      <Section title="Your Stats">
        <div className="card-grid">
          <Card variant="primary">
            <h3>Magic Level</h3>
            <p className="stat-value">45</p>
          </Card>

          <Card variant="secondary">
            <h3>Health</h3>
            <p className="stat-value">100</p>
          </Card>

          <Card>
            <h3>Mana</h3>
            <p className="stat-value">80</p>
          </Card>
        </div>
      </Section>

      <Section title="Nested Composition">
        <Card>
          <p>Cards can contain anything!</p>
          <Card variant="primary">
            <p>Even other cards.</p>
          </Card>
        </Card>
      </Section>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Cast a Spell"
      >
        <p>Choose your spell:</p>
        <div className="spell-options">
          <button className="spell-btn">Fireball</button>
          <button className="spell-btn">Ice Shard</button>
        </div>
      </Modal>
    </Layout>
  );    </div>
  );
}

export default App;
