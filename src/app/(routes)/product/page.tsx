// "use client"

// import Link from "@/components/Link"
// import { productType } from "@/types/productType"
// import axios from "axios"
// import { useEffect, useState } from "react"

// const CATEGORIES = [
//   "Accessories", "Bath Room", "Bedroom", "Dinning Room",
//   "Home Decor", "Kitchen", "Laundry Room", "Lightning",
//   "Living Room", "Sofas & Armchairs", "Tables & Chairs", "Chairs", "Tables"
// ]

// const Product = () => {
//   const [product, setProduct] = useState<productType[]>([])
//   const [minPrice, setMinPrice] = useState(7)
//   const [maxPrice, setMaxPrice] = useState(5389)
//   const [selected, setSelected] = useState<string[]>([])
//   const [sort, setSort] = useState("Default sorting")
//   const [page, setPage] = useState(1)
//   const PER_PAGE = 16

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(res => setProduct(res.data))
//       .catch(err => console.log(err))
//   }, [])

//   const toggleCat = (cat: string) =>
//     setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])

//   const filtered = product
//     .filter(p => p.price >= minPrice && p.price <= maxPrice)
//     .filter(p => selected.length === 0 || selected.some(c => p.title.toLowerCase().includes(c.toLowerCase())))

//   const sorted = [...filtered].sort((a, b) => {
//     if (sort === "Price: Low to High") return a.price - b.price
//     if (sort === "Price: High to Low") return b.price - a.price
//     return 0
//   })

//   const totalPages = Math.ceil(sorted.length / PER_PAGE)
//   const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE)

//   return (
//     <>

//       <div className="shop-layout">
//         <aside className="shop-sidebar">

//           <div className="sidebar-section">
//             <div className="sidebar-section-title">
//               <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2 2 12 2 8 7 8 12 6 12 6 7"/></svg>
//               Filter by Price
//             </div>
//             <div className="price-range-wrap">
//               <div className="price-range-fill" />
//               <input type="range" min={0} max={6000} value={minPrice}
//                 onChange={e => setMinPrice(Number(e.target.value))} />
//             </div>
//             <p className="price-label">Price: ${minPrice} – ${maxPrice}</p>
//           </div>

//           <div className="sidebar-section">
//             <div className="sidebar-section-title">
//               <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="1" width="5" height="5" rx="1"/><rect x="8" y="1" width="5" height="5" rx="1"/><rect x="1" y="8" width="5" height="5" rx="1"/><rect x="8" y="8" width="5" height="5" rx="1"/></svg>
//               Categories
//             </div>
//             {CATEGORIES.map(cat => (
//               <div key={cat} className="cat-item" onClick={() => toggleCat(cat)}>
//                 <div className={`cat-checkbox ${selected.includes(cat) ? 'checked' : ''}`} />
//                 <span className={`cat-label ${["Chairs","Tables"].includes(cat) ? 'sub' : ''}`}>{cat.toUpperCase()}</span>
//               </div>
//             ))}
//           </div>
//         </aside>

//         <main className="shop-main">
//           <div className="product-grid">
//             {paginated.length === 0 ? (
//               <div className="shop-loading">Loading products...</div>
//             ) : paginated.map((item, index) => (

//               <div key={item.id} className="product-card">
//                 <div className="product-img-wrap">
//                   {index === 1 && <span className="hot-badge">HOT</span>}
//                   <button className="product-wish" aria-label="Wishlist">
//                     <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
//                     </svg>
//                   </button>
//                   <img src={item.image} alt={item.title} />
//                 </div>
//                 <div className="product-info">
//                   <p className="product-name">{item.title}</p>
//                   <p className="product-price">${item.price.toFixed(2)}</p>
//                   <Link className="link-view" href={`/product/${item.id}`}>View More</Link>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </main>
//       </div>
//     </>
//   )
// }

// export default Product

"use client";

import Link from "@/components/Link";
import { productType } from "@/types/productType";
import axios from "axios";
import { useEffect, useState } from "react";

const CATEGORIES = [
  "Accessories",
  "Bath Room",
  "Bedroom",
  "Dinning Room",
  "Home Decor",
  "Kitchen",
  "Laundry Room",
  "Lightning",
  "Living Room",
  "Sofas & Armchairs",
  "Tables & Chairs",
  "Chairs",
  "Tables",
];

const Product = () => {
  const [product, setProduct] = useState<productType[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("Default sorting");
  const [page, setPage] = useState(1);
  const PER_PAGE = 16;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const toggleCat = (cat: string) =>
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );

  const filtered = product.filter(
    (p) =>
      selected.length === 0 ||
      selected.some((c) => p.title.toLowerCase().includes(c.toLowerCase())),
  );

  // const sorted = [...filtered].sort((a, b) => {
  //   if (sort === "Price: Low to High") return a.price - b.price
  //   if (sort === "Price: High to Low") return b.price - a.price
  //   return 0
  // })

  // const totalPages = Math.ceil(sorted.length / PER_PAGE)
  // const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      <div className="shop-layout">
        {/* ── SIDEBAR ── */}
        <aside className="shop-sidebar">
          {/* Filter by Price — dekorativ */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="2 2 12 2 8 7 8 12 6 12 6 7" />
              </svg>
              Filter by Price
            </div>
            <div className="price-range-wrap">
              <div className="price-range-fill" />
            </div>
            <p className="price-label">Price: $7 – $5389</p>
          </div>

          {/* Categories */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="1" y="1" width="5" height="5" rx="1" />
                <rect x="8" y="1" width="5" height="5" rx="1" />
                <rect x="1" y="8" width="5" height="5" rx="1" />
                <rect x="8" y="8" width="5" height="5" rx="1" />
              </svg>
              Categories
            </div>
            {/* {CATEGORIES.map(cat => (
              <div key={cat} className="cat-item" onClick={() => toggleCat(cat)}>
                <div className={`cat-checkbox ${selected.includes(cat) ? 'checked' : ''}`} />
                <span className={`cat-label ${["Chairs","Tables"].includes(cat) ? 'sub' : ''}`}>{cat.toUpperCase()}</span>
              </div>
            ))} */}

            {CATEGORIES.map((cat) => (
              <div key={cat} className="cat-item">
                <input type="checkbox" className="cat-checkbox" />

                <span
                  className={`cat-label ${["Chairs", "Tables"].includes(cat) ? "sub" : ""}`}
                >
                  {cat.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="shop-main">
          <div className="product-grid">
            {filtered.length === 0 ? (
              <div className="shop-loading">Loading products...</div>
            ) : (
              filtered.map((item, index) => (
                <div key={item.id} className="product-card">
                  <div className="product-img-wrap">
                    {/* {index === 1 && <span className="hot-badge">HOT</span>} */}
                    <button className="product-wish" aria-label="Wishlist">
                      <svg
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="product-info">
                    <p className="product-name">{item.title}</p>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                    <Link className="link-view" href={`/product/${item.id}`}>
                      View More
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Product;
