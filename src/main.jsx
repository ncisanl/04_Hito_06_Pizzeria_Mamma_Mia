import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { PizzasProvider } from "./context/PizzasContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PizzasProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </PizzasProvider>
  </StrictMode>,
);
