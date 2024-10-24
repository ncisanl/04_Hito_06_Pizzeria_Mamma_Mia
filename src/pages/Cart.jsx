import { CardPizza } from "../components/CardPizza.jsx";
import { pizzas } from "../assets/js/pizzas.js";
import { useState } from "react";

export function Cart() {
  const [pizzaCart, setCart] = useState(pizzas);

  const addToCart = (pizza) => {
    const newPizza = {
      id: (pizzaCart.length + 1).toString(),
      name: pizza.name,
      price: pizza.price,
      ingredients: pizza.ingredients,
      quantity: pizza.quantity,
      img: pizza.img,
    };
    setCart((prev) => [...prev, newPizza]);
  };

  const eliminateToCart = (pizzaToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((pizza) => pizza.id !== pizzaToRemove.id),
    );
  };

  const mapPizzas = pizzaCart.map((pizza) => {
    return (
      <CardPizza
        key={pizza.id}
        pizzaInfo={pizza}
        add={addToCart}
        eliminate={eliminateToCart}
        cartButton={true}
      />
    );
  });

  const quantityTotal = pizzaCart.reduce((total, pizza) => {
    return total + (pizza.quantity || 1);
  }, 0);

  const priceTotal = pizzaCart.reduce((total, pizza) => {
    return total + (pizza.price || 1);
  }, 0);

  return (
    <>
      <div className="row m-3 section-card">{mapPizzas}</div>
      <div className="row m-3 section-card section-pay">
        <h1 className="mt-3">Cantidad:{quantityTotal}</h1>
        <h1>Total: ${priceTotal.toLocaleString("es-CL")}</h1>
        <button
          disabled={quantityTotal === 0}
          type="button"
          className="btn btn-dark mb-3 button-pay"
        >
          Pagar 🤑
        </button>
      </div>
    </>
  );
}
