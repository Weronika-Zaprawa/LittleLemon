function HighlightsSection() {
  return (
    <div className="highlights-container">
      <div className="top-bar">
        <header>Specials</header>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <div className="first-card">
          <div className="photo-first"></div>
          <div className="card-content-first">
            <div className="top-bar-content">
              <p>Greek Salad</p>
              <p>$12.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <div className="bottom-bar-content">
              <p>Order a delivery</p>
            </div>
          </div>
        </div>
        <div className="second-card"></div>
        <div className="third card"></div>
      </div>
    </div>
  );
}

export default HighlightsSection;
