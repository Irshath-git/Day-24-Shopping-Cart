import React, { useState } from "react";

function Card({ cart, setCart, product, addToCart, removeCart }) {
  const [isVisible, setVisible] = useState(true);
  function IncreaseCart() {
    return setCart(cart + 1);
  }
  function DecreaseCart() {
    return setCart(cart - 1);
  }

  return (
    <>
      <div className="col mb-5 text-center">
        <div class="card h-100">
          <img
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{product.title}</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {product.star}
            </div>
            {product.islinethrough ? (
              <span>
                <span
                  className={
                    product.islinethrough
                      ? "text-muted text-decoration-line-through"
                      : ""
                  }
                >
                  {product.actualPrice}
                </span>
                <span> {product.discountPrice}</span>
              </span>
            ) : (
              <span>{product.actualPrice}</span>
            )}
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <button
              href="#"
              class="btn btn-outline-dark mt-auto"
              onClick={() => {
                setVisible(!isVisible);
                isVisible ? IncreaseCart() : DecreaseCart();
              }}
            >
              {isVisible ? "Add to Cart" : "Remove"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
