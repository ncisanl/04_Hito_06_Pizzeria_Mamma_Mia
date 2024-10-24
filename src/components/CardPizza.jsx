import PropTypes from "prop-types";

export function CardPizza({ pizzaInfo, add, eliminate, cartButton }) {
  const mapIngredients = pizzaInfo.ingredients.map((ingredient, index) => {
    const isLast = index === pizzaInfo.ingredients.length - 1;
    return (
      <li key={ingredient} className="ingredient-item">
        {ingredient}
        {!isLast && ", "}
      </li>
    );
  });

  return (
    <div className="col-md-4">
      <div className="card mb-4 mt-4">
        <img
          src={pizzaInfo.img}
          className="card-img-top"
          alt="imagen de card"
        />
        <div className="card-body">
          <h5 className="card-title m-0 fw-bold">Pizza {pizzaInfo.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <p className="m-1 text-black-50">🍕 Ingredientes:</p>
            <ul className="ingredients-list-inline">{mapIngredients}</ul>
          </li>
        </ul>
        <div className="card-body">
          <h2 className="fw-bold fs-4 text-center mb-4">
            Precio: ${pizzaInfo.price.toLocaleString("es-CL")}
          </h2>
          <div className="button-card">
            <button
              onClick={() => {
                if (cartButton) {
                  eliminate(pizzaInfo);
                }
              }}
              type="button"
              className="btn btn-outline-dark"
            >
              {cartButton ? "Quitar ❌" : "Ver Más 👀"}
            </button>
            <button
              onClick={() => {
                if (cartButton) {
                  add(pizzaInfo);
                }
              }}
              type="button"
              className="btn btn-dark"
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CardPizza.propTypes = {
  pizzaInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.array,
    quantity: PropTypes.number,
    img: PropTypes.string,
  }),
};