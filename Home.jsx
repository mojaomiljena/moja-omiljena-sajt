import React, { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} (${product.size}) dodat u korpu.`);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleCheckout = () => {
    if (!name || !phone || cart.length === 0) {
      alert("Molimo unesite ime, broj telefona i dodajte bar jedan proizvod u korpu.");
      return;
    }

    const orderText = `Porudžbina za: ${name}\nTelefon: ${phone}\n${cart
      .map((item) => `- ${item.name}, veličina: ${item.size}`)
      .join("\n")}\nNapomena: ${note}`;

    const encodedText = encodeURIComponent(orderText);
    window.open(`viber://forward?text=${encodedText}`, "_blank");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Moja Omiljena</h1>
      <p>Dobrodošli u butik ženske garderobe!</p>
    </div>
  );
}