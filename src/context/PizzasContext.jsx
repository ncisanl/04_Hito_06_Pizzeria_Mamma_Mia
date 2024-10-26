import { createContext, useContext, useEffect, useState } from "react";

const pizzasContext = createContext();

export function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState([]);

  const getPizzas = async () => {
    const resPizzas = await fetch("http://localhost:5000/api/pizzas");
    const resPizza = await fetch("http://localhost:5000/api/pizzas/p001");

    const pizzasResponse = await resPizzas.json();
    const pizzaResponse = await resPizza.json();

    setPizzas(pizzasResponse);
    setPizza(pizzaResponse);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <pizzasContext.Provider value={{ pizzas, pizza }}>
      {children}
    </pizzasContext.Provider>
  );
}

export const usePizzas = () => {
  return useContext(pizzasContext);
};
