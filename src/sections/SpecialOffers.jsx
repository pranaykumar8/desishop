import './Sections.css';

const SpecialOffers = () => {
  const offers = [
    { name: "Mango Jelly", price: "₹800/kg", icon: "🥭" },
    { name: "Shipping", price: "₹560/kg", icon: "🚢" },
    { name: "Free Mailbox", price: "₹0", icon: "📬" },
  ];

  return (
    <div className="section offers">
      <h2>Special Offers</h2>
      <div className="card-row">
        {offers.map((offer, idx) => (
          <div className="card" key={idx}>
            <div className="card-icon">{offer.icon}</div>
            <h3 className="card-title">{offer.name}</h3>
            <p className="card-price">{offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
