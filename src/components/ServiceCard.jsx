// src/components/ServiceCard.jsx
import './ServiceCard.css'; // use correct path to your CSS

const ServiceCard = ({ icon, title, onBook }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3> {/* Move this ABOVE icon */}
      <div className="card-icon">{icon}</div>
      <button className="book-btn" onClick={() => onBook(title)}>
        Book
      </button>
    </div>
  );
};

export default ServiceCard;
