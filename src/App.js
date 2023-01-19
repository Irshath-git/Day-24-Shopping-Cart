import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      title: "Fancy product",
      islinethrough: false,
      actualPrice: "$40.00 - $80.00",
      discountPrice: "",
      star: "",
    },
    {
      id: 2,
      title: "Special Item",
      islinethrough: true,
      actualPrice: "$20.00",
      discountPrice: "$18.00",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      title: "Sale Item",
      islinethrough: true,
      actualPrice: "$50.00",
      discountPrice: "$25.00",
    },
    {
      id: 4,
      title: "Popular Item",
      islinethrough: false,
      actualPrice: "$40.00",
      discountPrice: "",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      title: "Sale Item",
      islinethrough: true,
      actualPrice: "$50.00",
      discountPrice: "$25.00",
    },
    {
      id: 6,
      title: "Fancy product",
      islinethrough: false,
      actualPrice: "$120.00 - $280.00",
      discountPrice: "",
      star: "",
    },
    {
      id: 7,
      title: "Special Item",
      islinethrough: true,
      actualPrice: "$20.00",
      discountPrice: "$18.00",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 8,
      title: "Popular Item",
      islinethrough: false,
      actualPrice: "$40.00",
      discountPrice: "",
      star: "⭐⭐⭐⭐⭐",
    },
  ];

  const [cart, setCart] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Navbar cartCount={cart} />
        <Header />
        <section>
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {products.map((product) => {
                return <Card product={product} cart={cart} setCart={setCart} />;
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
