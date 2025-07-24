import ServiceCard from '../components/ServiceCard';
import './Sections.css';

const OurServices = ({ onBookClick }) => {
  return (
    <div className="section services">
      <h2>Our Services</h2>
      <div className="card-row">
        <ServiceCard icon="🎁" title="Personal Shopper" onBook={onBookClick} />
        <ServiceCard icon="📦" title="Mail Box" onBook={onBookClick} />
        <ServiceCard icon="🚚" title="Shipment" onBook={onBookClick} />
      </div>
    </div>
  );
};

export default OurServices;
