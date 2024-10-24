import { Header } from "../components/Header.jsx";
import { CardPizza } from "../components/CardPizza.jsx";
import { useEffect, useState } from "react";

export function Home() {
  const [pizzasApi, setPizzasApi] = useState([]);

  const getPizzas = async () => {
    const resPizzas = await fetch("http://localhost:5000/api/pizzas");
    const pizzasResponse = await resPizzas.json();
    setPizzasApi(pizzasResponse);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const mapPizzas = pizzasApi.map((pizza) => {
    return <CardPizza key={pizza.id} pizzaInfo={pizza} cartButton={false} />;
  });

  return (
    <>
      <Header />
      <div className="row m-3 section-card">{mapPizzas}</div>
    </>
  );
}
