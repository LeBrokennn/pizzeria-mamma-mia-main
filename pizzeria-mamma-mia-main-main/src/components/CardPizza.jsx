// src/components/CardPizza.jsx
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { clp } from "../utils/format";
import { useCart } from "../context/CartContext.jsx"; 

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { add } = useCart();

  return (
    <div className="col">
      <Link to={`/pizza/${id}`} className="text-decoration-none">
        <div className="card h-100 shadow-sm" style={{ cursor: 'pointer' }}>
        <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
        <div className="card-body">
          <h5 className="card-title mb-2">{name}</h5>
          <h6 className="text-muted mb-2">Ingredientes</h6>
          <ul className="mb-3">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5">
              ${clp(price)}  {/* ← reemplazo de toLocaleString */}
            </span>
            <button 
              className="btn btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                add(id);
              }}
            >
              Añadir
            </button>
          </div>
        </div>
        </div>
      </Link>
    </div>
  );
};

export default CardPizza;
