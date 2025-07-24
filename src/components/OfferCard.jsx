import './Card.css';

const OfferCard = ({ icon, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <p>{description}</p>
    </div>
  );
};

export default OfferCard;
