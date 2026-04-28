"use client"
import { productType } from "@/types/productType";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams<{ id: string }>();
   console.log("ID:", id); 
  const [product, setProduct] = useState<productType | null>(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setProduct(null);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        .detail-wrap {
          font-family: 'Montserrat', sans-serif;
          max-width: 1100px;
          margin: 48px auto;
          padding: 0 60px;
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }
        .detail-img-wrap {
          flex: 0 0 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          min-height: 380px;
        }
        .detail-img-wrap img {
          max-width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .detail-info { flex: 1; min-width: 0; padding-top: 8px; }
        .detail-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 18px;
        }
        .detail-price {
          font-size: 22px;
          font-weight: 700;
          color: #c8a96e;
          margin-bottom: 22px;
        }
        .detail-desc {
          font-size: 13px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        .detail-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .qty-cart {
          display: flex;
          align-items: center;
          background: #f5f0e8;
          border-radius: 10px;
          border: 1px solid #e8e2d8;
          overflow: hidden;
        }
        .qty-btn {
          width: 42px;
          height: 50px;
          background: none;
          border: none;
          font-size: 18px;
          color: #555;
          cursor: pointer;
        }
        .qty-btn:hover { color: #1a1a1a; }
        .qty-num {
          width: 36px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }
        .add-cart-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #c8a96e;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-cart-btn:hover { background: #b8965a; }
        .add-cart-btn svg { width: 17px; height: 17px; stroke: white; fill: none; }
        .wishlist-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #555;
          transition: color 0.2s;
        }
        .wishlist-btn:hover { color: #e05; }
        .wishlist-btn svg { width: 18px; height: 18px; stroke: currentColor; fill: none; }
        .detail-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid #e8e2d8;
          padding-top: 24px;
          font-size: 13px;
          color: #555;
        }
        .detail-meta strong { color: #1a1a1a; font-weight: 700; }
      `}</style>

      <div className="detail-wrap">
        <div className="detail-img-wrap">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">$ {product.price.toFixed(2)}</p>
          <div className="detail-actions">
            <div className="qty-cart">
              <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span className="qty-num">{qty}</span>
              <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button className="add-cart-btn">
              Add to cart
            </button>
          </div>
          <div className="detail-meta">
            <p><strong>Brand:</strong> Globe Furniture</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;






