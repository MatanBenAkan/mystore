import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";
import Cart from "./Cart";

function Home() {
  return (
    <>
      <h1 className="text-center">All-Items</h1>
      <section className="p-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <Cart />
    </>
  );
}

export default Home;
