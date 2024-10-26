import { CardPizza } from "../components/CardPizza.jsx";
import { useCart } from "../context/CartContext.jsx";

export function Cart() {
  const { pizzaCart, totalCart, quantityTotal } = useCart();

  const mapPizzas = pizzaCart.map((pizza) => {
    return <CardPizza key={pizza.idCart} pizzaInfo={pizza} cartButton={true} />;
  });

  return (
    <>
      <div className="row m-3 section-card">{mapPizzas}</div>
      <div className="row m-3 section-card section-pay">
        <h1 className="mt-3">Cantidad:{quantityTotal}</h1>
        <h1>Total: ${totalCart.toLocaleString("es-CL")}</h1>
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
