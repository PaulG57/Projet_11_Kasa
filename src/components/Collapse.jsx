import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // État ouvert/fermé

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={isOpen ? "arrow up" : "arrow down"}>⌵</span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
