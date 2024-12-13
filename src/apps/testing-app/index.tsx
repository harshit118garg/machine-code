import { Fragment, useEffect, useState } from "react";
import "./style.scss";

const API_URL = `https://dummyjson.com/products`;

export default function TestApp() {
  const [productsData, setProductsData] = useState<any>([]);

  const callAPI = async (API_URL: string) => {
    let res = await fetch(API_URL);
    if (res.ok) {
      res = await res.json();
      setProductsData(res.products);
    }
  };

  useEffect(() => {
    callAPI(API_URL);
  }, []);

  return (
    <div className="app-wrapper">
      {productsData && productsData.length > 0 ? (
        <>
          <h2>Products are available</h2>
          <div className="wrapper">
            {productsData.map((p) => {
              return (
                <Fragment key={p.id}>
                  <Card title={p.title} imgs={p.images} />
                </Fragment>
              );
            })}
          </div>
        </>
      ) : (
        <h2>No products available</h2>
      )}
    </div>
  );
}

export const Card = ({ title, imgs }: { title: string; imgs: string[] }) => {
  return (
    <>
      <div className="card-comp">
        <div className="product-image">
          <img className="img" src={imgs[0]} alt={title} />
        </div>
        <div className="product-title">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};
