import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../styles/components/carouselBar.css"

export default function CarouselBar() {
  const products = [
    {
      image:
        "https://dongphucphuongthao.vn/wp-content/uploads/2023/03/dong-phuc-phuong-thao-banner-so-mi-2.jpg",
    },
    {
      image:
        "https://dongphucphuongthao.vn/wp-content/uploads/2023/03/dong-phuc-phuong-thao-banner-so-mi-2.jpg",
    },
    {
      image:
        "https://dongphucphuongthao.vn/wp-content/uploads/2023/03/dong-phuc-phuong-thao-banner-so-mi-2.jpg",
    },
  ];


  const itemTemplate = (product) => {
    return (
      <div className="product">
        <img src={product.image} alt={product.name} />
      </div>
    );
  };

  return (
    <div className="home">
      <header className="App-header">
        <div className="carousel-header">
          <Carousel
            value={products}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={3000}
          />
        </div>
       
      </header>
    </div>
  );
}
