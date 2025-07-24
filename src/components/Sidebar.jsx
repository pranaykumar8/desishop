import './Sidebar.css';
export default function Sidebar({ open, toggle, scrollTo }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span>Navigation</span>
        <button className="close-btn" onClick={toggle}>×</button>
      </div>
      <nav className="sidebar-nav">
        <button onClick={() => scrollTo('services')}>Our Services</button>
        <button onClick={() => scrollTo('offers')}>Special Offers</button>
        <button onClick={() => scrollTo('how')}>How It Works</button>
        <button onClick={() => scrollTo('about')}>About Us</button>
      </nav>
    </aside>
  )
}
