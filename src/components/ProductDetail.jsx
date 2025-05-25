import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
import { Navigation } from "./navigation";
import { Footer } from "./Footer";
import styles from "./ProductDetail.module.css";

const slugToTitle = {
  crystalblue: "CrystalBlue",
  crystalpro: "CrystalPro",
  crystalbasic: "CrystalBasic",
  "reverse-osmosis": "Reverse Osmosis",
};


export const ProductDetail = () => {
  const { slug } = useParams();

  const title = slugToTitle[slug];

  let product = undefined;
  if (title) {
    product =
      JsonData.Gallery &&
      JsonData.Gallery.find(
        (item) => item.title.toLowerCase().replace(/\s+/g, "") === title.toLowerCase().replace(/\s+/g, "")
      );
  }

  if (!product) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
          <h2 className="text-danger">Product Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <div className={`container flex-grow-1 my-4 py-3 ${styles['product-detail-center']}`} style={{maxWidth:900}}>
        <h2 className={styles['product-title']}>{product.title}</h2>
        <div className="row g-3 mb-4 justify-content-center mt-3">
          {product.imgUrls && product.imgUrls.length > 0 ? (
            product.imgUrls.map((url, i) => (
              <div className="col-12 col-sm-6 col-md-4" key={i}>
                <img
                  src={url.startsWith('/') ? url : `/${url}`}
                  alt={`${product.title} ${i + 1}`}
                  className="img-fluid rounded shadow-sm w-100"
                />
              </div>
            ))
          ) : product.imgUrl ? (
            <div className="col-12 col-sm-6 col-md-4">
              <img
                src={product.imgUrl.startsWith('/') ? product.imgUrl : `/${product.imgUrl}`}
                alt={product.title}
                className="img-fluid rounded shadow-sm w-100"
              />
            </div>
          ) : null}
        </div>
        <p className="fs-5">{product.description}</p>
        {product.features && product.features.length > 0 && (
          <ul className="list-group list-group-flush mb-3">
            {product.features.map((f, i) => f && <li key={i} className="list-group-item">{f}</li>)}
          </ul>
        )}
        {product.texts && product.texts.length > 0 && (
          <div className="mt-3">
            {product.texts.map((t, i) => t && <p key={i}>{t}</p>)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
