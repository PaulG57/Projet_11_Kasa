function Rating({ rating }) {
  
    return (
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "filled" : ""}>★</span>
        ))}
      </div>
    );
  }
  
  export default Rating;
  