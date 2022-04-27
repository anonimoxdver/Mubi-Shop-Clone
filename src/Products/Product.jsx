import React from "react";
import { Navbar } from "../Navbar/Navbar";

import "./product.css";
import { Articles } from "../articles/Articles";
import { Footer2 } from "../Footer/Footer2";


export const Product = ({
  classDfault1 = "classDfault",
  classDfault2 = "classDfault",
  classDfault3 = "classDfault",
  classDfault4 = "classDfault",
  description1 = "",
  description2 = "",
  description3 = "",
  description4 = "",
  price1 = '',
  price2 = '',
  price3 = '',
  price4 = '',
  descripcionOfProduct = "", 
  price = "",
  image1,
  image2,
  images = '',
  measures,
  descriptionRoute,
}) => {
  return (
    <div>
      <Navbar />
      <div className="imgproduct-1">
        <img src={image1} alt="" className="product-1" />
        <img src={image2} alt="" className="product-1" />
      </div>
      <div className="container">
        <div className="container-data">
          <div className="container-name">
            <h3 className="name-con">{descripcionOfProduct} </h3>
            <h4 className="price-con">{price} </h4>
            <p className="tax-con"> Tax included.</p>
            <div className="container-data">
              <button className="cart-con">ADD TO CART</button>
              <button className="buy-con">BUY IT NOW</button>
            </div>
          </div>
          <div className="container-description">
            <div>
              <p className="container-p-1">{descriptionRoute} </p>
              <p className="container-p-2">{measures}</p>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650819193/MubiShop/bxl-facebook-square_1_ixat8c.svg"
                  alt=""
                  className="img-container"
                />
                Share
              </a>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650819253/MubiShop/bxl-twitter_1_z0rcg4.svg"
                  alt=""
                  className="img-container"
                />
                Tweet
              </a>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650819182/MubiShop/bxl-pinterest_yyk5bv.svg"
                  alt=""
                  className="img-container"
                />{" "}
                pin it
              </a>
            </div>
          </div>
        </div>
      </div>

      { images.map((images) => (
        <div className="imgproduct-1">
          <img src={images.position1 } alt="" className="product-1" />
          <img src={images.position2} alt="" className="product-1" />
          <img src={images.position3 === '' ? 'classDfault' : images.position3} alt="" className="product-1" />
        </div>
      ))}

      <div className="also-like">
        <p>You may also like</p>
      </div>

      <div className="articles-main2">
        <Articles
          imgback={classDfault1}
          descripcionOfProduct={description1}
          price={price1}
        />
        <Articles
          imgback={classDfault2}
          descripcionOfProduct={description2}
          price={price2}
        />
        <Articles
          imgback={classDfault3}
          descripcionOfProduct={description3}
          price={price3}
        />
        <Articles
          imgback={classDfault4}
          descripcionOfProduct={description4}
          price={price4}
        />
      </div>
      <div className="home-anchor">
        <a href="/" className="home">
          <img
            src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1650839625/MubiShop/bx-arrow-back_ekdfcl.svg"
            alt=""
            className="img-home"
          />{" "}
          Home
        </a>
      </div>

      <Footer2 />
    </div>
  );
};
